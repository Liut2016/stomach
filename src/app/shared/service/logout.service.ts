import { Injectable } from '@angular/core';
import { HttpForNowService } from '../../shared/service/http-for-now.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';
import { LocalStorageService } from 'ngx-store';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private httpService: HttpForNowService, private localStorage: LocalStorageService, private router: Router,
  private settings: SettingsService) {
  }

  logout() {
    this.httpService.logout().then(res => {
      console.log(res);
      this.localStorage.remove('token');
      this.settings.user = undefined;
      this.router.navigate(['/authentication/login']);
    });
  }
}
