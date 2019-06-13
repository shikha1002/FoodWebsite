import { EventEmitter } from '@angular/core';
import {Ingrident} from './Ingrident.model';
import { Subject } from 'rxjs';

export class shoppingListService{

    // ingredient=new EventEmitter<Ingrident[]>();
    ingredient=new Subject<Ingrident[]>();
    startediting=new Subject<number>();

    private ingridents: Ingrident[]=[
        // new Ingrident('Tomatoes',10),
        // new Ingrident('Apple',5),
        // new Ingrident('Orange',5)
      ];
    
      addIngredients(ingridentdetail:Ingrident){
        this.ingridents.push(ingridentdetail);
        // this.ingredient.emit(this.ingridents.slice());
        this.ingredient.next(this.ingridents.slice());
      }

      getIngrrident(){
          return this.ingridents.slice();
      }

      getIngrident(index:number){
        return this.ingridents[index];
      }

      updateIngrident(index:number,newingredent:Ingrident){
        this.ingridents[index]=newingredent;
        return this.ingredient.next(this.ingridents.slice());
      }

      deleteIngrident(index:number){
        this.ingridents.splice(index,1);
        return this.ingredient.next(this.ingridents.slice());
      }


}