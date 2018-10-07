import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LogoutService } from '../../../shared/service/logout.service';
import { SettingsService } from '../../../shared/service/settings.service';
import { roleDict } from '../../../shared/config-items/static-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  role2labelDict = {
    doctor: 'info',
    patient: 'success',
    community: 'warning',
    super: 'danger'
  };
  roleDict = roleDict;
    public config: PerfectScrollbarConfigInterface = {};
  constructor(public logout: LogoutService, public setting: SettingsService) {
    console.log(this.setting);
  }
}
