import {NgModule} from '@angular/core'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeRouteModule } from './recipe.route';
import { ShareModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { recipeReducer } from './store/recipe.reducer';
import { EffectsModule } from '@ngrx/effects';
import { recipeEffect } from './store/recipe.effect';



@NgModule({

    declarations:[
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent,
        RecipesComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RecipeRouteModule,
        ShareModule,
        StoreModule.forFeature('recipes',recipeReducer),
        EffectsModule.forFeature([recipeEffect])
    ]
})
export class RecipeModule{}