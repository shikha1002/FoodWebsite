import { Recipe } from '../recipe.model';
import { Ingrident } from 'src/app/shared/Ingrident.model';
import * as recipeaction from '../store/recipe.action';
import * as fromapp from '../../store/app.reducer';

export interface featureState extends fromapp.AppState{
    recipes:State;
}

export interface State{
    recipes:Recipe[];
}

const initialState:State={
    recipes:[
        new Recipe('A test Recipe',
        'this is a sample data',
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg',
        [new Ingrident('potato',2),new Ingrident('cheese',4)]),
        
        new Recipe('secound recipe',
        'this is so yummi',
        'https://www.telegraph.co.uk/content/dam/books/2015/12/03/hamburger_trans_NvBQzQNjv4BqrV7QQ0P2G4eEGNIJGn9sH1jHVOhDMPUBkSn57yPXuDk.jpg?imwidth=450',
        [new Ingrident('Bread',2),new Ingrident('Sauce',2)])
      ]
}

export function recipeReducer(state=initialState, action:recipeaction.RecipeAction){
    switch(action.type){
        case(recipeaction.SET_RECIPE):
            return{
                ...state,
                recipes:[...action.payload]
            };
        case (recipeaction.ADD_RECIPE):
            return{
                ...state,
                recipes:[...state.recipes,action.payload]
            };
        case (recipeaction.UPDATE_RECIPE):
            const recipelist=state.recipes[action.payload.index];
            const updatedrecipe={
                ...recipelist,
                ...action.payload.newrecipe
            };
            const newrecipelist=[...state.recipes];
            newrecipelist[action.payload.index]=updatedrecipe;
            return{
                ...state,
                recipes:newrecipelist
            };
        case(recipeaction.DELETE_RECIPE):
            const oldrecipelist=[...state.recipes];
            oldrecipelist.splice(action.payload,1);
            return{
                ...state,
                recipes:oldrecipelist
            };
        default:
            return state;

    }
}