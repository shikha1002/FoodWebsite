import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { recipeListService } from 'src/app/shared/Recipelist.service';
import { Recipe } from '../recipe.model';
import { Ingrident } from 'src/app/shared/Ingrident.model';
import {Store} from '@ngrx/store';
import * as fromrecipereducer from '../store/recipe.reducer';
import * as fromrecipeaction from '../store/recipe.action';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
   id:number;
  editMode=false;
  recipeForm:FormGroup;

  constructor(private router:Router, private route:ActivatedRoute, private recipeService:recipeListService,
    private store:Store<fromrecipereducer.featureState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params)=>{
        this.id=+param['id']
        this.editMode=param['id']!=null?true:false;
        console.log(this.editMode);
        this.intiForm();
      }
    );
    // this.router.navigate(['recipes',this.id,'edit'])
  }

  private intiForm(){
    let recipename='';
    let recipeimagepath='';
    let recipdescription='';
    let recipeIngrident=new FormArray([]);

    if(this.editMode){
      // const recipe= this.recipeService.getSelectedRecipe(this.id);
      this.store.select('recipes').take(1).subscribe((recipestate:fromrecipereducer.State)=>{
        const recipe= recipestate.recipes[this.id];
        recipename=recipe.name;
        recipeimagepath=recipe.imagePath;
        recipdescription=recipe.description;
        if(recipe.ingredient){
          for (let ingre of recipe.ingredient){
            recipeIngrident.push( 
              new FormGroup({
                'name':new FormControl(ingre.name,Validators.required),
                'amount':new FormControl(ingre.amount,[
                  Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
              })
            );
          }
        }
      })
    }

    this.recipeForm=new FormGroup({
      'name':new FormControl(recipename,Validators.required),
      'imagepath':new FormControl(recipeimagepath,Validators.required),
      'description':new FormControl(recipdescription,Validators.required),
      'ingredient':recipeIngrident
    });
  }

  onSubmit(){

    let takeIngrident:Ingrident[]=[];

    for(let i of this.getControls()){
      takeIngrident.push(i.value);
    }

    const recipe=new Recipe(this.recipeForm.get('name').value,this.recipeForm.get('description').value,
    this.recipeForm.get('imagepath').value,takeIngrident)
    if(this.editMode){
      // this.recipeService.updateIngrident(this.id,recipe);
      this.store.dispatch(new fromrecipeaction.updateRecipe({index:this.id,newrecipe:recipe}));
    }else{
      // this.recipeService.addIngrident(recipe);
      this.store.dispatch(new fromrecipeaction.addRecipe(recipe));
    }

    this.onCancel();
  } 

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredient')).controls;
  }

  AddIngredent(){
    
    (<FormArray>this.recipeForm.get('ingredient')).controls.push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[
          Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  
  onDeleteIngrident(index:number){
    (<FormArray>this.recipeForm.get('ingredient')).removeAt(index);
  }

}
