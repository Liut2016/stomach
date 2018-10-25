import { Injectable } from '@angular/core';
import { HttpForNowService } from '@app/core/services/http-for-now.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { SettingsService } from '@app/core/services/settings.service';
// import { LocalStorageService } from 'ngx-store';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private httpService: HttpForNowService, private router: Router,
  private settings: SettingsService) {
  }

  logout() {
    this.httpService.logout().then(res => {
      console.log(res);
      localStorage.removeItem('token');
      this.settings.user = undefined;
      this.router.navigate(['/authentication/login']);
    });
  }
}
