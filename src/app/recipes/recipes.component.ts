import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Recipe } from './recipe.model';
import { recipeListService } from '../shared/Recipelist.service';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  //recipeDisplayDetails:Recipe;

  constructor(private recipelistservice:recipeListService,private route:ActivatedRoute) {}
   

  ngOnInit() {

    // this.recipelistservice.recipeselected.subscribe(
    //   (recipes:Recipe)=>{
    //     this.recipeDisplayDetails=recipes
    //   })
  }

}
