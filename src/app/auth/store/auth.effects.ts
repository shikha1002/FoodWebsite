import { Injectable } from '@angular/core';
import {Effect, Actions,ofType} from '@ngrx/effects';
import * as authaction from '../../auth/store/auth.action';
// import 'rxjs/add/operator/map';
import { map, switchMap , mergeMap, tap} from 'rxjs/operators';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects{

    @Effect()
    authSignup= this.action$.pipe(
        ofType(authaction.TRY_SIGNUP),
        map((action: authaction.try_signup)=>{
            return action.payload;
        }),
        switchMap((authData:{username:string, password:string})=>{
            return from(firebase.auth().createUserWithEmailAndPassword(authData.username,authData.password));
        }),
        switchMap(()=>{
            return from(firebase.auth().currentUser.getIdToken());
        }),
        mergeMap((token:string)=>{
            this.router.navigate(['/home']);
            return [{type:authaction.SIGNUP},
                    {type:authaction.GETTOKEN,payload:token}];
        })
    );

    @Effect()
    authSignIn= this.action$.pipe(
        ofType(authaction.TRY_SIGNIN),
        map((action: authaction.try_signin)=>{
            return action.payload;
        }),
        switchMap((authData:{username:string, password:string})=>{
            return from(firebase.auth().signInWithEmailAndPassword(authData.username,authData.password));
        }),
        switchMap(()=>{
            return from(firebase.auth().currentUser.getIdToken())
        }),
        mergeMap((token:string)=>{
            this.router.navigate(['/home']);
            return [{type:authaction.SIGNIN},
                    {type:authaction.GETTOKEN,payload:token}];
        })
    );

    @Effect({dispatch:false})
    authLogout=this.action$.pipe(
        ofType(authaction.LOGOUT),
        tap(()=>{
            this.router.navigate(['/signin'])
        })
    )

    

    constructor(private action$:Actions, private router:Router){}
}