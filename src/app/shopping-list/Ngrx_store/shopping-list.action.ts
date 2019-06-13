import { Action } from '@ngrx/store';
import { Ingrident } from 'src/app/shared/Ingrident.model';

export const ADD_INGREDIENT='ADD_INGREDIENT';
export const EDIT_INGREDIENT='EDIT_INGREDIENT';
export const STOP_EDIT='STOP_EDIT';
export const UPDATE_INGREDIENT='UPDATE_INGREDIENT';
export const DELETE_INGREDIENT='DELETE_INGREDIENT';
export const SAVE_INGREDIENT='SAVE_INGREDIENT';
export const FETCH_INGREDIENT='FETCH_INGREDIENT';
export const SET_INGREDIENT='SET_INGREDIENT';

export class addIngrident implements Action{
    
    readonly type=ADD_INGREDIENT;
    constructor(public payload:Ingrident){}

}

export class setIngrident implements Action{
    
    readonly type=SET_INGREDIENT;
    constructor(public payload:Ingrident[]){}

}

export class updateIngredent implements Action{
    readonly type=UPDATE_INGREDIENT;
    constructor(public payload:Ingrident){}
}

export class deleteIngredent implements Action{
    readonly type=DELETE_INGREDIENT;
    // constructor(public payload:number){}
}

export class editIngredent implements Action{
    readonly type=EDIT_INGREDIENT;
    constructor(public payload:number){}
}

export class stopedit implements Action{
    readonly type=STOP_EDIT; 
}

export class fetchingredint implements Action{
    readonly type=FETCH_INGREDIENT; 
}

export class saveingredient implements Action{
    readonly type=SAVE_INGREDIENT; 
}

export type ShoppingListActions=addIngrident |updateIngredent|deleteIngredent|editIngredent|stopedit|fetchingredint|saveingredient|setIngrident;