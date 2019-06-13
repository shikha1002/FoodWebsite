import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
      apiKey:'AIzaSyBoetJCzEvoNZ1C0DPhTvEDXt93yX3Rs0k',
      authDomain:'ng-recipe-book-1921d.firebaseapp.com'
    });
  }  

  // featureLoaded:string;

  // displayFeatures(feature: string){
  //   this.featureLoaded=feature;
  // }
  
}
