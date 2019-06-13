import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
// import {HeaderComponent} from './core/header/header.component';
// import {RecipesComponent} from './recipes/recipes.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { dropDownDirective } from './shared/dropdown.directive';
import { shoppingListService } from './shared/shoppinglist.service';
import { AppRouteModule } from './app.routing';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { recipeListService } from './shared/Recipelist.service';
import { HttpService } from './shared/http.service';
import { Http, HttpModule } from '@angular/http';
// import { SignUpComponent } from './auth/sign-up/sign-up.component';
// import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthService } from './auth/auth.service';
import { AuthGaurdService } from './auth/authGuard.service';
// import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { RecipeModule } from './recipes/recipe.module';
import { ShareModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopinglist.module';
import { AuthModule } from './auth/auth.module';
// import { HomeComponent } from './core/home/home.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import {reducers} from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { AuthEffects } from './auth/store/auth.effects';
import { environment } from '../environments/environment';
import { shoppingListEffects } from './shopping-list/Ngrx_store/shopping-list.effect';
  // import { from } from 'rxjs';
// import {RouterModule,Routes} from '@angular/router';

// const appRoutes: Routes=[
//   {path:'app-recipes', component:RecipesComponent},
//   {path:'app-shopping-list',component:ShoppingListComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    // ShoppingListComponent,
    // ShoppingEditComponent,
    // dropDownDirective,
    // RecipeStartComponent,
    // RecipeEditComponent,
    // SignUpComponent,
    // SignInComponent,
    // PageNotFoundComponent,
    // HomeComponent
  ],
  imports: [

    // RouterModule.forRoot(
    //   appRoutes,
    //   {enableTracing:true}
    // ),

    BrowserModule.withServerTransition({appId:"my-app"}),
    // FormsModule,
    // ReactiveFormsModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    // RecipeModule,
    // AppRouteModule,
    // HttpModule,
    HttpClientModule,
    ShareModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects,shoppingListEffects]),
    StoreRouterConnectingModule,
    !environment.production? StoreDevtoolsModule.instrument():[]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
