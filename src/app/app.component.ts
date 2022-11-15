
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "./services/firebase.service";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


//more code here

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
title = 'firebase-angular-auth';
isSignedIn = false;
loginForm !: FormGroup;
submitted = false;
hide = true;

visible:boolean = true;
changetype:boolean = true;

email = new FormControl('', [
  Validators.required,
  Validators.minLength(5)
]);

password = new FormControl('', [Validators.required]);

constructor(public firebaseService: FirebaseService, private formBuilder: FormBuilder, private router:Router){}
ngOnInit(){
this.loginForm = this.formBuilder.group({
  email: ['', Validators.required, Validators.email],
  password: ['', Validators.required],
})

    if(localStorage.getItem('user')!==null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
  }
  
  async onSignup(email: string, password: string){
    await this.firebaseService.signup(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn=true
    this.router.navigate(['home']);
  }

  async onSignin(email: string, password: string){
    await this.firebaseService.signin(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn=true
    this.router.navigate(['home']);
  }

  handleLogout(){
  this.isSignedIn = false
  }

  onSubmit(){
    this.submitted = true
    if (this.loginForm.invalid) {
      return
    }
    alert("Success")
  }

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
