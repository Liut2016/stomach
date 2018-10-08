import { Injectable } from '@angular/core';
import { RoleConfiguration } from '@app/shared/config-items/authority-items';
import { AuthorityService } from '@app/core/services/med-lib/authority.service';
import { log } from 'util';

import { users, User } from '@app/core/services/mock-data';
import { HttpForNowService } from '@app/core/services/http-for-now.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // public user = {
  //   name: 'admin',
  //   role: 'admin',
  //   mail: 'mail@test.com',
  //   supervisor: 'none',
  //   mobilePhoneNumber: '18792778933',
  //   id: '000'
  // };
  user: User;
  token;
  public theme = {
    dir: 'ltr',
    green: false,
    blue: true,
    dark: false,
    minisidebar: false,
    boxed: false,
    danger: false,
    showHide: false,
    defaultColor: false,
    selectedTheme: 'blue'
  };
  getUser;
  unreadEmailNumber: number;
  public roleCfg = RoleConfiguration;
  constructor(public authService: AuthorityService, public httpService: HttpForNowService) {
  }

  initSettings() {
    this.initRoleCfg();
    this.initUser();
  }

  initRoleCfg() {
    // console.log(this.roleCfg);
    this.authService.registRoles(this.roleCfg.roles);
    this.authService.registFunctions(this.roleCfg.functions, this.roleCfg.functionsForRoles);
    for (const v of Object.keys(this.roleCfg.interactions)) {
      this.authService.registInteraction(v, this.roleCfg.interactions[v]);
    }
  }

  initUser() {
    return this.httpService.getUser().then(u => {
      console.log(u);
      this.user = {
        ...this.user,
        id: u.username,
        mobilePhoneNumber: u.phone_number,
        supervisor: u.supervisor,
        role: u.role,
        name: u.full_name,
        mail: u.email,
        community: u.community,
        idNumber: u.id_card,
      };
      if (Object.keys(u.system_theme).length > 0) {
        this.theme = u.system_theme;
      }

      this.httpService.checkUnread(this.user.id).then(res => {
        // console.log(res);
        this.unreadEmailNumber = res.Count_unread;
      });
    });
  }

}
