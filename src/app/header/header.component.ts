import { Component,Inject, OnInit ,Renderer2} from '@angular/core';
import { CartService } from '../servic/cart.service'
// @ts-ignore
import Typewriter from 't-writer.js';
import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from '../servic/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  theme: Theme ="light-theme";

  cartItems: number = 0;
 
  isMode = true;
  constructor(private cart : CartService, private auth: AuthenticationService, @Inject(DOCUMENT) private document : Document, private renderer : Renderer2) {
    // getting (no:of items selected) from cart service
    this.cart.cartSubject.subscribe((data)=>{
      this.cartItems = data
    });
   }

  ngOnInit(): void {
    this.initializeTheme()
    this.cartValue()

   
  }
  initializeTheme=(): void =>
  this.renderer.addClass(this.document.body, this.theme)

dayicon(){
  this.isMode = true;

} 
darkicon(){
  this.isMode = false;
}

switchTheme(){
  this.document.body.classList.replace(this.theme, this.theme ==='light-theme'?(this.theme ='dark-theme'):(this.theme = 'light-theme'))
}  

cartValue(){
  if(localStorage.getItem("localcart") != null){
    var cartCount = JSON.parse(localStorage.getItem("localcart")|| '{}');
    this.cartItems = cartCount.length;
  }
}

logOut(){
 this.auth.logout()
}



}
export type Theme ='light-theme' | 'dark-theme';