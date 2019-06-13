import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './core/header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { SignUpComponent } from './auth/sign-up/sign-up.component';
// import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthGaurdService } from './auth/authGuard.service';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';



const approute: Routes=[
    {path:'' , redirectTo:'/signin', pathMatch:'full'},
    {path:'recipes',loadChildren:'./recipes/recipe.module#RecipeModule'},//loadchildren is for lazyloading
    {path:'shoppinglist' ,component:ShoppingListComponent,canActivate:[AuthGaurdService]},
    {path:'**',component:PageNotFoundComponent}
]  

@NgModule({
    imports:[
        RouterModule.forRoot(approute, {preloadingStrategy: PreloadAllModules})
    ],
    exports:[RouterModule] 
})

export class AppRouteModule{

}