import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,  Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGGuard implements CanActivate {
  constructor( private authService : AuthenticationService, public router: Router) { }
  canActivate() {
      if(this.authService.isLoggedIn()){
        return true;
      }
      window.alert('Access Denied, You Need to LogIn');
      this.router.navigate(['/login']);
      return false;
  }
  
}
