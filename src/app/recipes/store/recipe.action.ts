import {Action} from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPE='SET_RECIPE';
export const ADD_RECIPE='ADD_RECIPE';
export const UPDATE_RECIPE='UPDATE_RECIPE';
export const DELETE_RECIPE='DELETE_RECIPE';
export const FETCH_RECIPE='FETCH_RECIPE';
export const STORE_RECIPE='STORE_RECIPE';

export class setRecipe implements Action{
    readonly type=SET_RECIPE;

    constructor(public payload:Recipe[]){}
}

export class addRecipe implements Action{
    readonly type=ADD_RECIPE;

    constructor(public payload:Recipe){}
}

export class updateRecipe implements Action{
    readonly type=UPDATE_RECIPE;

    constructor(public payload:{index:number,newrecipe:Recipe}){}
}

export class deleteRecipe implements Action{
    readonly type=DELETE_RECIPE;

    constructor(public payload:number){}
}

export class fetchRecipe implements Action{
    readonly type=FETCH_RECIPE;
}

export class storeRecipe implements Action{
    readonly type=STORE_RECIPE;
}
export type RecipeAction=setRecipe|addRecipe|deleteRecipe|updateRecipe|fetchRecipe|storeRecipe;
