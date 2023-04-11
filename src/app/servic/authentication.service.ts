import { Injectable } from '@angular/core';
import { AngularFireAuth } from'@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { GoogleAuthProvider}from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData:any;

  // main = localStorage.setItem('userToken', 'null')
  

  constructor( private fireAuth : AngularFireAuth, private router: Router, ) { }

  // Login
  login(email:string, password:string){
   
      this.fireAuth.signInWithEmailAndPassword(email, password).then( res =>{
        localStorage.setItem('userToken','true');
        
        if(res.user?.emailVerified == true){
          this.router.navigate(['/home']);
          // this.main=localStorage.setItem('userToken','true')
        } else {
          this.router.navigate(['/verification']);
          console.log(res.user)
        };

      },err =>{
        alert(err.message);
      })
    
   
  }

  // Checks wheather user Loged in  or not

  isLoggedIn(){
    return !!localStorage.getItem('userToken')
  }

  // Register
  register(email:string, password:string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then( res =>{
      alert('Registration is Successful');
      this.router.navigate(['/login']);
      this.sendEmailforVerification(res.user)
      
    }, err =>{
      alert(err.message);
      this.router.navigate(['/regsiter'])
    })
  }

  // signout
  logout(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('userToken');
      this.router.navigate(['/login']);
    }, err =>{
      alert(err.message)
    })
  }

  // Forgot Password
  forgotPassword(email:string){
    this.fireAuth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/verification']);
    },err =>{
      alert("Something went wrong")
    })
  }
  
  // Email Verigication
  sendEmailforVerification(user:any){
    user.sendEmailVerification().then((res:any) =>{
      this.router.navigate(['/verification']);
    },(err:any) =>{
      alert("Something went wrong")
    })
  }

  googleSignIn(){
    return this.fireAuth.signInWithPopup( new GoogleAuthProvider).then( res =>{
      this.router.navigate(['/home'])
      localStorage.setItem('userToken',JSON.stringify(res.user?.uid));
    }, err =>{
      alert(err.message)
    })
  }
}
