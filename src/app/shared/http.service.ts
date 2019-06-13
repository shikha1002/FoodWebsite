import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

import { Recipe } from '../recipes/recipe.model';
import { recipeListService } from './Recipelist.service';
import { shoppingListService } from './shoppinglist.service';
import { AuthService } from '../auth/auth.service';
import { Ingrident } from './Ingrident.model';


@Injectable()
export class HttpService{

    constructor(private httpclient:HttpClient,private recipservice:recipeListService,private shoppingservice:shoppingListService,private authservice:AuthService){}

    saveRecipeList(data:Recipe[]){
        // // const header=new HttpHeaders().set('authantication','qwwewert')
        // const token= this.authservice.getToken()
        // return this.httpclient.put('https://ng-recipe-book-1921d.firebaseio.com/recipy.json',data,{
        //     observe:'body',//property name has to change to events(if want to request event) and response(if want full response)
        //     params: new HttpParams().set('auth',token)
        //     // headers:header
        // });

        const req= new HttpRequest('PUT','https://ng-recipe-book-1921d.firebaseio.com/recipy.json',data,{
            reportProgress:true
        })
        return this.httpclient.request(req);
    }
           
    fetchRecipeList(){

        // const token= this.authservice.getToken()

        // this.httpclient.get<Recipe[]>('https://ng-recipe-book-1921d.firebaseio.com/recipy.json?auth='+token)
        this.httpclient.get<Recipe[]>('https://ng-recipe-book-1921d.firebaseio.com/recipy.json',{
            observe:'body', // by default body but for full reponse give 'response'
            responseType:'json'  //arraybuffer or blob
        })
        .map(
            (recipes)=>{
                // console.log(recipes)
                // const data:Recipe[]=recipes.json()
                for(const item of recipes){
                    if(!item['ingredient']){
                        // console.log(item)
                        item['ingredient']=[]
                    }
                }
                return recipes
                // return []
        })
        .subscribe(
            (response:Recipe[])=>{
                this.recipservice.setRecies(response);
            }
        );
    }

    saveShoppingList(){
        // const token= this.authservice.getToken()
        return this.httpclient.put('https://ng-recipe-book-1921d.firebaseio.com/shoppinglist.json',this.shoppingservice.getIngrrident());

    }

    fetchShoppingList(){
        // const token= this.authservice.getToken()
        return this.httpclient.get<Ingrident[]>('https://ng-recipe-book-1921d.firebaseio.com/shoppinglist.json');
    }
}