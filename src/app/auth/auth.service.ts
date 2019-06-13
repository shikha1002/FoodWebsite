import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromapp from '../store/app.reducer';
import * as fromAuthAction from '../auth/store/auth.action';

@Injectable()
export class AuthService{

    // token:string;

    constructor(private router:Router, private store:Store<fromapp.AppState>){}

    getSignUp(email:string,password:string){
        // console.log('inside getsignup');
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(
            user=> {
                this.store.dispatch(new fromAuthAction.signup())
                this.router.navigate(['/home']);
                firebase.auth().currentUser.getIdToken().then(
                   (tk:string)=> {
                       this.store.dispatch(new fromAuthAction.gettoken(tk))
                    //    this.token=tk
                    }
                )
            }
        )
        .catch(
            error=>console.log(error)
        );
    }

    getSignIn(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            response=>{
                this.store.dispatch(new fromAuthAction.signin());
                this.router.navigate(['/home']);
                firebase.auth().currentUser.getIdToken().then(
                   (tk:string)=> {
                       this.store.dispatch(new fromAuthAction.gettoken(tk))
                    //    this.token=tk
                    }
                )
            }
        )
        .catch(
            error=>console.log(error)
        )
    }

    // getToken(){
    //     firebase.auth().currentUser.getIdToken()
    //     .then(
    //         (tk:string)=>this.token=tk
    //     )

    //     return this.token;
    // }

    // isAutheticated(){
    //     return this.token!=null;
    // }

    logOut(){
        firebase.auth().signOut();
        // this.token=null;
        // this.store.dispatch(new fromAuthAction.logout());
        // this.router.navigate(['/signin']);
    }

}