import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
 class IsAuthGuard{
  constructor(private userService:UserService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

   // if(this.userService.currentUser.token)return true;
    // {this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}})
     // return false;}
     return true;
    }
  }
export const AuthGuard:CanActivateFn=(route:ActivatedRouteSnapshot,state:RouterStateSnapshot ):boolean=>{
  return inject(IsAuthGuard).canActivate(route,state)

}




