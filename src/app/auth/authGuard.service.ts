import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromapp from '../store/app.reducer';
import * as fromauth from '../auth/store/auth.reducer';


@Injectable()
export class AuthGaurdService implements CanActivate{

    constructor(private authservice:AuthService, private router:Router,private store: Store<fromapp.AppState>){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        // if(this.authservice.isAutheticated()){
        //     return true;
        // }
        // else{
        //     this.router.navigate(['/']);
        // } 
        return this.store.select('Auth')
        .take(1)
        .map((authstate: fromauth.State)=>{
            if(authstate.authentication){
                return true;
            }else{
                this.router.navigate(['/']);
            }
        })
    }
}

