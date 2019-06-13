import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { recipeListService } from '../../shared/Recipelist.service';
import { Recipe } from '../../recipes/recipe.model';
import { HttpService } from '../../shared/http.service';
import {Response} from '@angular/http'
import { AuthService } from '../../auth/auth.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import * as fromapp from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromauth from '../../auth/store/auth.reducer';
import { Router } from '@angular/router';
import * as fromauthaction from '../../auth/store/auth.action';
import * as fromrecipeaction from '../../recipes/store/recipe.action';


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent implements OnInit{

    authState:Observable<fromauth.State>;

    constructor(private recipeservice:recipeListService,private httpserviceref:HttpService,
                private authservice:AuthService,private store:Store<fromapp.AppState>, private router:Router){}
    recipe:Recipe[];
    // @Output() featureSelected=new EventEmitter<string>();

    // onSelectFeature(feature: string){
    //     this.featureSelected.emit(feature);
    // }

    ngOnInit(){
        this.authState=this.store.select('Auth');
    }

    onSaveRecipeList(){
    //    this.recipe= this.recipeservice.getRecipe();
    //    this.httpserviceref.saveRecipeList(this.recipe).subscribe(
    //     //    (data:HttpEvent<Object>)=>
    //     //         console.log(data.type===HttpEventType.Sent)
    //     (data)=>
    //             console.log(data)
    //    );
    this.store.dispatch(new fromrecipeaction.storeRecipe());
    }

    onFetchRecipeList(){
        // this.httpserviceref.fetchRecipeList()
        this.store.dispatch(new fromrecipeaction.fetchRecipe());
    }

    onLogOut(){
        // this.authservice.logOut();
        this.store.dispatch(new fromauthaction.logout());
        
    }

    // onIsAutheticated(){
    //     return this.authservice.isAutheticated();
    // }
}