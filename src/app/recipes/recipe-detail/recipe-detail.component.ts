import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as shoppingListAction from '../../shopping-list/Ngrx_store/shopping-list.action';
import { Recipe } from '../recipe.model';
import { Ingrident } from 'src/app/shared/Ingrident.model';
import { shoppingListService } from 'src/app/shared/shoppinglist.service';
import { recipeListService } from 'src/app/shared/Recipelist.service';
import { Store } from '@ngrx/store';
import * as fromapp from '../../store/app.reducer';
import { Observable } from 'rxjs/Observable';
import * as fromrecipereducer from '../store/recipe.reducer';
import * as fromrecipeaction from '../store/recipe.action';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe:Recipe;
  // recipe:Recipe;
  recipeState: Observable<fromrecipereducer.State>;
  ingre:Ingrident[];
  id:number;
  constructor(private shopinglistService:shoppingListService, private route:ActivatedRoute,
    private recipeservice:recipeListService,private router:Router,private store:Store<fromrecipereducer.featureState>){}

  ngOnInit() {
     this.route.params.subscribe(
       (param:Params)=> {
         this.id=+param['id']
        //  this.recipe= this.recipeservice.getSelectedRecipe(this.id);
        this.recipeState=this.store.select('recipes');
       }
     );
  }

  addToShoppingList(){
    // this.ingre=this.recipe.ingredient;
    this.store.select('recipes').take(1).subscribe((recipestate:fromrecipereducer.State)=>{
        this.ingre=recipestate.recipes[this.id].ingredient;
    })

    for(let i=0;i<this.ingre.length;i++)
    {
      // this.shopinglistService.addIngredients(this.ingre[i]);
      this.store.dispatch(new shoppingListAction.addIngrident(this.ingre[i]))
    } 
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

  onDelete(){
    // this.recipeservice.deleteRecipe(this.id);
    this.store.dispatch(new fromrecipeaction.deleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
