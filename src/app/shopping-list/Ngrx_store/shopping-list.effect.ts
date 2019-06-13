import { Effect , Actions, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as fromshoppingListAction from './shopping-list.action';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Ingrident } from 'src/app/shared/Ingrident.model';
import { Store } from '@ngrx/store';
import * as fromapp from '../../store/app.reducer';

@Injectable()
export class shoppingListEffects{
    @Effect()
    fetchhoppinglist = this.action$.pipe(
        ofType(fromshoppingListAction.FETCH_INGREDIENT),
        switchMap((action:fromshoppingListAction.fetchingredint)=>{
            return this.httpclient.get<Ingrident[]>('https://ng-recipe-book-1921d.firebaseio.com/shoppinglist.json');
        }),
        map((ingredent)=>{
            // console.log('shopping effect',ingredent)
            return{
            
                type:fromshoppingListAction.SET_INGREDIENT,
                payload:ingredent
            }
        })
    );

    @Effect({dispatch:false})
    saveShoppingList=this.action$.pipe(
        ofType(fromshoppingListAction.SAVE_INGREDIENT),
        withLatestFrom(this.store.select('ShoppingList')),
        switchMap(([action,state])=>{
            console.log(state.ingridents)
            return this.httpclient.put('https://ng-recipe-book-1921d.firebaseio.com/shoppinglist.json',state.ingridents);
        })
    )

    
    constructor(private action$:Actions, private httpclient:HttpClient, private store:Store<fromapp.AppState>){}
}