import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenService} from "../service/token.service";

@Injectable({
  providedIn: 'root'
})
export class CheckGuard implements CanActivate {
  EMPLOYMENT = 'ROLE_EMPLOYMENT';

  constructor(private tokenService: TokenService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('token ==> ', this.tokenService.getToken())
    if (this.tokenService.getToken()) {
      console.log('Role ==>', this.tokenService.getRole())
      if (this.tokenService.getRole() == this.EMPLOYMENT) {
        return true;
      } else {
        return this.router.navigate(['/home'])
      }

    } else {
      return this.router.navigate([
        '/login'
      ])
    }

  }

}
