import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  role: string = "";

  constructor(private router: Router, private service: UsersService) {
    this.service.getAuthState().subscribe(user => {

      if (user) {
        this.service.getUser(user.uid).subscribe(userInfo => {
          this.role = userInfo.role;
        });
      }

      else this.role = "guest";

    });
  }

  delay(ms: number) {
    const start = Date.now();
    for (let i = 0; i < 1e7; i++) {
      if ((Date.now() - start) > ms) {
        break;
      }
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.delay(100);

    if(state.url == "/admin") {
      if(this.role != "admin") this.router.navigate(['/home']);
    }

    if(state.url == "/manager") {
      if(this.role != "admin" && this.role != "manager") this.router.navigate(['/home']);
    }

    if(state.url == "/register") {
      if(this.role != "guest") this.router.navigate(['/home']);
    }

    if(state.url == "/login") {
      if(this.role != "guest") this.router.navigate(['/home']);
    }

    if(state.url.substring(0, 5) == "/trip") {
      if(this.role == "guest") this.router.navigate(['/home']);
    }

    return true;
    
  }
}
