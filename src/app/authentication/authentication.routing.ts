import { Routes } from '@angular/router';

import { ErrorComponent } from '@app/authentication/error/error.component';
import { ForgotComponent } from '@app/authentication/forgot/forgot.component';
import { LockscreenComponent } from '@app/authentication/lockscreen/lockscreen.component';
import { LoginComponent } from '@app/authentication/login/login.component';
import { RegisterComponent } from '@app/authentication/register/register.component';
export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '404',
      component: ErrorComponent
    }, {
      path: 'forgot',
      component: ForgotComponent
    }, {
      path: 'lockscreen',
      component: LockscreenComponent
    }, {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'register',
      component: RegisterComponent
    }]
  }
];
