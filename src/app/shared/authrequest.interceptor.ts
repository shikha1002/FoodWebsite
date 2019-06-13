import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as fromauth from '../auth/store/auth.reducer';

@Injectable()
export class authInterceptor implements HttpInterceptor{

    constructor(private authservice:AuthService,private store:Store<fromApp.AppState>){}

    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        console.log('Interceptor:',req);
        // const copiedReq=req.clone({params: req.params.set('auth',this.authservice.getToken())})
        // return next.handle(copiedReq);
        return this.store.select('Auth')
        .take(1)
        .switchMap(
            (authstate: fromauth.State)=>{
                const copiedReq=req.clone({params: req.params.set('auth',authstate.token)});
                return next.handle(copiedReq);
            }
        )
    }
}