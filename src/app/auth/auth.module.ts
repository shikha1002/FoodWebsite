import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { AuthRouteModule } from './auth-Router.Module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        SignInComponent,
        SignUpComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        AuthRouteModule
    ]
})
export class AuthModule{}