import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {Response} from '@angular/http';
import { Ingrident } from '../shared/Ingrident.model';
import { shoppingListService } from '../shared/shoppinglist.service';
import { HttpService } from '../shared/http.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromapp from '../store/app.reducer';
import * as shoppingListAction from './Ngrx_store/shopping-list.action';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

//  ingridents: Ingrident[]
 shoppingListState:Observable<{ingridents:Ingrident[]}>;
 private ingrSubscribtion:Subscription;


  constructor(private shoppingservice:shoppingListService,private httpservice:HttpService,private store:Store<fromapp.AppState>) {}

  ngOnInit() {
    // console.log('shopinglist ngonit');
    //this.ingridents=this.shoppingservice.getIngrrident();
    this.shoppingListState=this.store.select('ShoppingList');
    // this.ingrSubscribtion=  this.shoppingservice.ingredient.subscribe(
    //   (ingre:Ingrident[])=>{this.ingridents=ingre}
    // );
  }

  ngOnDestroy(){
    // this.ingrSubscribtion.unsubscribe();
  }

  OnEditingIngredent(index:number){
    // this.shoppingservice.startediting.next(index);
    this.store.dispatch(new shoppingListAction.editIngredent(index));
  }

  onSaveShoppingList(){
    // this.httpservice.saveShoppingList().subscribe(
    //   (data)=>console.log(data)
    // );
    this.store.dispatch(new shoppingListAction.saveingredient());
  }

  onfetchShoppingList(){
    // this.httpservice.fetchShoppingList().subscribe(
    //   (response)=>{
    //     // //const data=response.json();
    //     //this.ingridents=response;
    //   }
    // )
    this.store.dispatch(new shoppingListAction.fetchingredint());
  }

}
