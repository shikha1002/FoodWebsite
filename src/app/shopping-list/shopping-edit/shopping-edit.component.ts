import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, OnDestroy } from '@angular/core';

import { Ingrident } from 'src/app/shared/Ingrident.model';
import { shoppingListService } from 'src/app/shared/shoppinglist.service';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../Ngrx_store/shopping-list.action';
import * as fromapp from '../../store/app.reducer';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  //  @ViewChild('ingredintAmount') ingredentAmountref: ElementRef;
   @ViewChild('f') addingridentform:FormGroup;
  IngredientDetails:Ingrident;
  subcription:Subscription;
  editMode=false;
  // editindex:number;
  ingridentEdit:Ingrident;

  constructor(private shoppingservice:shoppingListService,private store:Store<fromapp.AppState>) { }

  // addIngredient(ingrename:HTMLInputElement){
  //   this.IngredientDetails={name:ingrename.value, amount:Number(this.ingredentAmountref.nativeElement.value)};
  //   this.shoppingservice.addIngredients(this.IngredientDetails);
  // } 

  addIngredient(){
    this.IngredientDetails={name:this.addingridentform.value.name, amount:this.addingridentform.value.amount};
    if(this.editMode){
      // this.shoppingservice.updateIngrident(this.editindex,this.IngredientDetails);
      this.store.dispatch(new ShoppingListActions.updateIngredent(this.IngredientDetails))
      this.addingridentform.reset();
      this.editMode=false;
    }else{
      // this.shoppingservice.addIngredients(this.IngredientDetails);
      this.store.dispatch(new ShoppingListActions.addIngrident(this.IngredientDetails));
      this.editMode=false;
      this.addingridentform.reset();
    }
    
  }   

  ngOnInit() {

    this.subcription=this.store.select('ShoppingList').subscribe(
      (data)=>{
        if(data.editedIngredientindex>-1){
          this.ingridentEdit=data.editedIngredient;
          this.editMode=true;
          this.addingridentform.setValue({
            name:this.ingridentEdit.name,
            amount:this.ingridentEdit.amount
          });
        }else{
          this.editMode=false;
        }
      }
    )

    // this.subcription= this.shoppingservice.startediting.subscribe(
    //   (index:number)=>{
    //     this.editMode=true;
    //     this.editindex=index;
    //     this.ingridentEdit=this.shoppingservice.getIngrident(index);
    //     this.addingridentform.setValue({
    //       name:this.ingridentEdit.name,
    //       amount:this.ingridentEdit.amount
    //     });
    //   }
    // );
  }

  onClear(){
    this.addingridentform.reset();
    this.editMode=false;
  }

  onDelete(){
    // this.shoppingservice.deleteIngrident(this.editindex);
    this.store.dispatch(new ShoppingListActions.deleteIngredent());
    this.onClear();
  }

  ngOnDestroy(){
    this.store.dispatch(new ShoppingListActions.stopedit());
    this.subcription.unsubscribe();
  }

}
