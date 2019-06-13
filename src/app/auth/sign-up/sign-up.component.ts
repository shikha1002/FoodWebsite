import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromapp from '../../store/app.reducer';
import * as fromauthaction from '../../auth/store/auth.action';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('f') signupform:NgForm;

  constructor(private authservice:AuthService, private store:Store<fromapp.AppState>) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.signupform);
    const email=this.signupform.value.emailaddress;
    const password=this.signupform.value.password;
    // this.authservice.getSignUp(email,password);
    this.store.dispatch(new fromauthaction.try_signup({username:email,password:password}));
    // alert('user added successfully');
    
  }

}
