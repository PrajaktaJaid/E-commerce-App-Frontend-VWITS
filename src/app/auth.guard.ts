import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      // This method is automatically executed for secured routes
      // if this method returns true route is accessible otherwise its not accessible.
      // check if user is loggedin return true else return false
      console.log("In auth guard");
    return true;
  }
  
}
