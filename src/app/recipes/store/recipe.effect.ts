import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient, HttpRequest } from '@angular/common/http'; 

import * as fromrecipeaction from '../store/recipe.action';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import * as fromrecipereducer from '../store/recipe.reducer';


@Injectable()
export class recipeEffect{

    @Effect()
    recipeFetch= this.action$.pipe(
        ofType(fromrecipeaction.FETCH_RECIPE),
        switchMap((action:fromrecipeaction.fetchRecipe)=>{
            return this.httpclient.get<Recipe[]>('https://ng-recipe-book-1921d.firebaseio.com/recipy.json',{
                observe:'body', // by default body but for full reponse give 'response'
                responseType:'json'  //arraybuffer or blob
            })     
        }),
        map(
            (recipes)=>{
                // console.log(recipes)
                // const data:Recipe[]=recipes.json()
                for(const item of recipes){
                    if(!item['ingredient']){
                        // console.log(item)
                        item['ingredient']=[]
                    }
                }
                return {
                    type:fromrecipeaction.SET_RECIPE,
                    payload:recipes 
                }
                // return []
        })

    );

    @Effect({dispatch:false})
    recipeStore= this.action$.pipe(
        ofType(fromrecipeaction.STORE_RECIPE),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([action,state])=>{
            const req= new HttpRequest('PUT','https://ng-recipe-book-1921d.firebaseio.com/recipy.json',state.recipes,{
                reportProgress:true
            })
            return this.httpclient.request(req);
        })
    );


    constructor(private action$:Actions, private httpclient:HttpClient, private store:Store<fromrecipereducer.featureState>){}
}