import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
      if (this.authService.isLoggedIn !== true) {
        window.alert('Access Denied, Login is Required to Access This Page!');
        this.router.navigate(['sign-in']);
      }
    return true;
  }
  
  constructor(public authService: AuthService, public router: Router) {}



}
