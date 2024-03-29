import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGaurdService } from '../auth/authGuard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const reciperoute:Routes=[
    {path:'' ,component:RecipesComponent, children:[
        {path:'',component:RecipeStartComponent},
        {path:'new',component:RecipeEditComponent, canActivate:[AuthGaurdService]},
        {path:':id',component:RecipeDetailComponent},
        {path:':id/edit',component:RecipeEditComponent}
    ],canActivate:[AuthGaurdService]}
]

@NgModule({
    imports:[
        RouterModule.forChild(reciperoute)
    ],
    exports:[RouterModule]
})
export class RecipeRouteModule{

}