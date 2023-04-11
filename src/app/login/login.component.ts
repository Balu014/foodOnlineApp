import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../servic/authentication.service';
// import * as AOS from 'aos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string='';
  password: string='';
 
  campaigntype: any;

 


  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {

    // AOS.init();

    if(window.location.pathname=="/login"){
      this.campaigntype = 1
   }
   if(window.location.pathname=="/register"){
     this.campaigntype = 2
    }
    else if(window.location.pathname=="/forgotPassword"){
     this.campaigntype = 3
  }
  }
  login(){
    if(this.email == ''){
      alert('Please Enter Email')
      return;
    }
    if(this.password == ''){
      alert('Please Enter Email')
      return;
    }
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
    
  }

  register(){
    if(this.email == ''){
      alert('Please Enter Email')
      return;
    }
    if(this.password == ''){
      alert('Please Enter Email')
      return;
    }
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  forgotPass(){
    this.auth.forgotPassword(this.email);
    this.email=""
  }
  goggleSignIn(){
    this.auth.googleSignIn()
  }
  
  
}


