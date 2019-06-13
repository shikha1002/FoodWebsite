import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as fromapp from '../../store/app.reducer';
import * as authaction from '../store/auth.action';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @ViewChild('f') signinform:NgForm;

  constructor(private authservice:AuthService, private store:Store<fromapp.AppState> ) { }

  ngOnInit() {
  }

  onSubmit(){
    // console.log(this.signinform);
    const email=this.signinform.value.emailaddress;
    const password=this.signinform.value.password;
    // this.authservice.getSignIn(email,password);
    this.store.dispatch(new authaction.try_signin({username:email,password:password}));
    // alert('user signin successfully');
    
  }

}
