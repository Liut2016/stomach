import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpForNowService } from '@app/core/services/http-for-now.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { SettingsService } from '@app/core/services/settings.service';
import { LocalStorageService } from 'ngx-store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private httpService: HttpForNowService,
    private localStorage: LocalStorageService, private settings: SettingsService) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  // onSubmit() {
  //   this.router.navigate ( [ '/dashboards/dashboard1' ] );
  // }

  login() {
    this.httpService.login(this.form.value.uname, this.form.value.password).then(res => {
      console.log(res);
      this.httpService.setToken(res.TOKEN);
      if (res.TOKEN) {
        this.httpService.getUser().then(u => {
          console.log(u);
          this.settings.user = {
            ...this.settings.user,
            id: u.username,
            mobilePhoneNumber: u.phone_number,
            supervisor: u.supervisor,
            role: u.role,
            name: u.full_name,
            mail: u.email
          };
        });
        this.localStorage.set('token', res.TOKEN);
        this.settings.initSettings();
        this.router.navigate(['/survey/hypertensionMS']);
      }
    });
  }

}
