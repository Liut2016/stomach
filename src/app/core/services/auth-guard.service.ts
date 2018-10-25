import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { SettingsService } from '@app/core/services/settings.service';
// import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
// import { LocalStorageService } from 'ngx-store';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router, public settings: SettingsService) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (!this.settings.user) {
      console.log(this.settings.user);
      return this.settings.initUser().then(() => {
        if (!this.checkToken()) {
          return false;
        }
        if (!this.checkRoles(route)) {
          return false;
        }
        console.log(this.settings.user);
        return true;
      });
    } else {
      if (!this.checkToken()) {
        return false;
      }
      if (!this.checkRoles(route)) {
        return false;
      }
      return true;
    }
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log(token);
      this.router.navigate(['authentication/login']);
      return false;
    }
    return true;
  }

  checkRoles(route) {
    const expectedRoles = route.data.expectedRoles;
    if (expectedRoles && expectedRoles.indexOf(this.settings.user.role) === -1) {
      console.log(this.settings.user.role, expectedRoles);
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
