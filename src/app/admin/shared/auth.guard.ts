import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private rout: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any {
        // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
        console.log(this.auth.isAuthenticated());
        
      if(this.auth.isAuthenticated()){
        return true;
      } else{
        this.auth.logout();
        this.rout.navigate(['/admin', 'login']);
      }
  }
  
}
