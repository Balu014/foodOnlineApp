import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardTsService implements CanActivate {

  constructor( private authService : AuthenticationService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean{
    if(this.authService.isLoggedIn !==true){
      window.alert('Access Denied, You Need to LogIn');
      this.router.navigate(['/login']);
    }
    return true;
  }




}
