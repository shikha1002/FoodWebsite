import { Component, OnInit,EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { recipeListService } from 'src/app/shared/Recipelist.service';
import { Subscription } from 'rxjs';
import {Observable} from 'rxjs/Observable';
import * as fromrecipereducer from '../store/recipe.reducer';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit ,OnDestroy{
 
  // recipes:Recipe[]
  recipeState:Observable<fromrecipereducer.State>;
  recipysubscription:Subscription;

  constructor(private recipelistservice:recipeListService,
     private router:Router,private route:ActivatedRoute, private store:Store<fromrecipereducer.featureState>) { }

  ngOnInit() {
    this.recipeState= this.store.select('recipes');
    // this.recipes=this.recipelistservice.getRecipe();
    // this.recipysubscription= this.recipelistservice.selectedRecipe.subscribe(
    //   (recipe:Recipe[])=>{
    //     this.recipes=recipe;
    //   }
    // );
  }

  ngOnDestroy(){
    // this.recipysubscription.unsubscribe();
  }

  getNewRecipes(){
    // this.router.navigate(['recipes','new']);
    this.router.navigate(['new'],{relativeTo:this.route});
  }

}
