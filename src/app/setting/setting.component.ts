import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@app/core/services/settings.service';
import { HttpForNowService } from '@app/core/services/http-for-now.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  public passwords = {
    oldPassword: {
      hide: true,
      value: ''
    },
    newPassword1: {
      hide: true,
      value: ''
    },
    newPassword2: {
      hide: true,
      value: ''
    }
  };
  themes = ['danger', 'green', 'blue', 'dark'];
  themesDict = {
    danger: '红色',
    green: '绿色',
    blue: '蓝色',
    dark: '黑色'
  };
  selectedTheme;
  changePasswordForm: FormGroup;
  constructor(public settings: SettingsService, public httpService: HttpForNowService, public router: Router,
     public fb: FormBuilder) {
  }

  ngOnInit() {
    this.selectedTheme = this.settings.theme.selectedTheme;
    // console.log(this.selectedTheme);
    this.changePasswordForm = this.fb.group({
      'old_password': [null, Validators.required],
      'new_password': [null, Validators.required],
      'confirm_new_password': [null, [Validators.required, this.passwordMatch]]
  });
  }

  selectTheme(e) {
    console.log(e);
    this.settings.theme.blue = false;
    this.settings.theme.danger = false;
    this.settings.theme.dark = false;
    this.settings.theme.green = false;
    this.settings.theme[e.value] = true;
    this.settings.theme.selectedTheme = e.value;
  }

  passwordMatch(control: AbstractControl) {
    const paswd = control.root.get('new_password');
    console.log(paswd, control);
    if (paswd && control.value !== paswd.value) {
     return {
         passwordMatch: false
     };
    }
    return null;
  }

  changePassword() {
    if (this.passwords.newPassword1.value === this.passwords.newPassword2.value) {
      this.httpService.changePassword(this.passwords.oldPassword.value, this.passwords.newPassword1.value).then(res => {
        console.log(res);
        this.router.navigate(['/authentication/login']);
      });
    } else {
      // TODO change the alert to formcontrol
      // alert('两个新密码不匹配');
    }
  }

  saveThemeSettings() {
    this.httpService.changeSystemSettings(this.settings.theme).then(res => {
      console.log(res);
    });
  }

}
