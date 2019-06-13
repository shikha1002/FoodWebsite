import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { recipeListService } from 'src/app/shared/Recipelist.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

 @Input() element:Recipe;
 @Input() index:number;
 
  constructor(private router:Router) { }

  // getSelected(){
  //   //this.recipesSelected.emit();
  //   this.recipelistservice.recipeselected.emit(this.element);
  // }

  ngOnInit() {
    
  }


}
