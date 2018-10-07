import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { AuthGuardService as AuthGuard } from './shared/service/auth-guard.service';
import { SettingComponent } from './setting/setting.component';

export const AppRoutes: Routes = [
  {
  path: '',
  component: FullComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    redirectTo: '/authentication/login',
    pathMatch: 'full',
  },
  //  {
  //   path: 'apps',
  //   loadChildren: './apps/apps.module#AppsModule',
  //   canActivate: [RoleGuard],
  //   data: {
  //     expectedRoles: ['admin', 'community', 'doctor']
  //   }
  // }
  {
    path: 'survey',
    loadChildren: './survey/survey.module#SurveyModule'
  },
  {
    path: 'follow',
    loadChildren: './follow/follow.module#FollowModule'
  },
  {
    path: 'personnel',
    loadChildren: './personnel/personnel.module#PersonnelModule'
  },
  {
    path: 'feedback',
    loadChildren: './feedback/feedback.module#FeedbackModule'
  },
  {
    path: 'setting',
    component: SettingComponent
  }
    // {
    //   path: 'follow',
    //   loadChildren: './follow/follow.module#FollowModule'
    // }
  ]
}, {
  path: '',
  component: AppBlankComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }]
},
{
  path: '**',
  redirectTo: 'authentication/404'
},
];
