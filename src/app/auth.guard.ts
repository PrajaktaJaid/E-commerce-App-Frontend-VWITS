import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // This method should be automatically executed for secured routes
    //If this method returns true then route is accessibile otherwies not accessible
    //Check if user is logged in return true else return false
    console.log('In Auth Guard');
    return true;
  }
}
