import { ActionReducerMap } from '@ngrx/store';

import * as fromshoppinglist from '../shopping-list/Ngrx_store/Shopping-list.reducers';
import * as fromauth from '../auth/store/auth.reducer';


export interface AppState{
    ShoppingList:fromshoppinglist.state,
    Auth:fromauth.State
}

export const reducers:ActionReducerMap<AppState>={
    ShoppingList: fromshoppinglist.shoppingListReducer,
    Auth:fromauth.authReducers
}