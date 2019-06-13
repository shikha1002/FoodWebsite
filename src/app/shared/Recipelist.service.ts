import { Recipe } from '../recipes/recipe.model';
// import { EventEmitter } from '@angular/core';
import { Ingrident } from './Ingrident.model';
import { Subject } from 'rxjs/Subject';

export class recipeListService{

    selectedRecipe=new Subject<Recipe[]>();

    private recipes:Recipe[]=[
        new Recipe('A test Recipe',
        'this is a sample data',
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg',
        [new Ingrident('potato',2),new Ingrident('cheese',4)]),
        
        new Recipe('secound recipe',
        'this is so yummi',
        'https://www.telegraph.co.uk/content/dam/books/2015/12/03/hamburger_trans_NvBQzQNjv4BqrV7QQ0P2G4eEGNIJGn9sH1jHVOhDMPUBkSn57yPXuDk.jpg?imwidth=450',
        [new Ingrident('Bread',2),new Ingrident('Sauce',2)])
      ];

    getRecipe(){
        return this.recipes.slice();
    }
      
    getSelectedRecipe(index:number){
        return this.recipes[index];
    }
    // recipeselected=new EventEmitter<Recipe>();

    addIngrident(newrecipy:Recipe){
        this.recipes.push(newrecipy);
        this.selectedRecipe.next(this.recipes.slice());
    }

    updateIngrident(index:number,newrecipy:Recipe){
        this.recipes[index]=newrecipy
        this.selectedRecipe.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.selectedRecipe.next(this.recipes.slice());
    }

    setRecies(recipe:Recipe[]){
        this.recipes=recipe;
        this.selectedRecipe.next(this.recipes.slice());
    }


}