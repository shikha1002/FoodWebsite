import * as Shoplistaction from './shopping-list.action';
import { Ingrident } from '../../shared/Ingrident.model';

export interface state{
    ingridents:Ingrident[],
    editedIngredient:Ingrident,
    editedIngredientindex:number
}

const initialState: state={
    ingridents:[
        new Ingrident('Tomatoes',10),
        new Ingrident('Apple',5),
        new Ingrident('Orange',5)
      ],
    editedIngredient:null,
    editedIngredientindex:-1
}

export function shoppingListReducer(state=initialState, action:Shoplistaction.ShoppingListActions){
    
    switch (action.type){

        case Shoplistaction.ADD_INGREDIENT: 
            return {
                ...state,
                ingridents:[...state.ingridents,action.payload]
            };

        case Shoplistaction.UPDATE_INGREDIENT:
            const ingredient=state.ingridents[state.editedIngredientindex];
            const updatedingredient={
                ...ingredient,
                ...action.payload
            }
            const listingredients=[...state.ingridents]
            listingredients[state.editedIngredientindex]=updatedingredient
            return{
                ...state,
                ingridents:listingredients,
                editedIngredient:null,
                editedIngredientindex:-1
            };
        
        case Shoplistaction.DELETE_INGREDIENT:
            const finalingredient=[...state.ingridents]
            finalingredient.splice(state.editedIngredientindex,1);
            return{
                ...state,
                ingridents:finalingredient,
                editedIngredient:null,
                editedIngredientindex:-1
            };
        
        case Shoplistaction.EDIT_INGREDIENT:
            const editingredent={...state.ingridents[action.payload]}
            return{
                ...state,
                editedIngredient:editingredent,
                editedIngredientindex:action.payload
            };
        case Shoplistaction.STOP_EDIT:
            return{
                ...state,
                editedIngredient:null,
                editedIngredientindex:-1
            };

        case Shoplistaction.SET_INGREDIENT:
                return {
                    ...state,
                    ingridents:[...action.payload]
                };
        default:
            return state;
    }
}