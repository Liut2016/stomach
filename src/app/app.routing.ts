import { Routes } from '@angular/router';

import { FullComponent } from '@app/layouts/full/full.component';
import { AppBlankComponent } from '@app/layouts/blank/blank.component';
import { AuthGuardService as AuthGuard } from '@app/core/services/auth-guard.service';
import { SettingComponent } from '@app/setting/setting.component';

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
  {
    path: 'personnel',
    loadChildren: './personnel/personnel.module#PersonnelModule'
  },
  {
    path: 'stomach',
    loadChildren: './stomach/stomach.module#StomachModule'
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
       path: 'components_list',
       loadChildren: './generalComponents/generalComponents.module#GeneralComponentsListModule'
  },
    {
      path: 'vis',
      loadChildren: './visualization/visualization.module#VisualizationModule'
    }
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
