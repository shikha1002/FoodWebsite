import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from '../core/home/home.component';

const  authroute:Routes=[
    {path:'signup',component:SignUpComponent},
    {path:'signin',component:SignInComponent},
    {path:'home',component:HomeComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(authroute)
    ],
    exports:[RouterModule]
})
export class AuthRouteModule{}