import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ShareModule } from '../shared/shared.module';
import { AppRouteModule } from '../app.routing';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { shoppingListService } from '../shared/shoppinglist.service';
import { recipeListService } from '../shared/Recipelist.service';
import { HttpService } from '../shared/http.service';
import { AuthService } from '../auth/auth.service';
import { AuthGaurdService } from '../auth/authGuard.service';
import { authInterceptor } from '../shared/authrequest.interceptor';
import { responseInterceptor } from '../shared/response.interceptor';


@NgModule({ 
    declarations:[
        HomeComponent,
        HeaderComponent,
        PageNotFoundComponent
    ],
    imports:[
        ShareModule,
        AppRouteModule,
        CommonModule
    ],
    exports:[
        HeaderComponent,
        AppRouteModule
    ],
    providers: [shoppingListService,recipeListService,HttpService,AuthService,AuthGaurdService,
    {provide:HTTP_INTERCEPTORS,useClass:authInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:responseInterceptor,multi:true}]
})
export class CoreModule{}