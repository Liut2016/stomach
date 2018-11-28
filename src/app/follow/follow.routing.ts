import {Route, Routes} from '@angular/router';
import { FollowUpMammaryOverviewComponent
  } from '@app/follow/follow-up-mammary-overview/follow-up-mammary-overview.component';
import { FollowUpMammarySingleviewComponent
  } from '@app/follow/follow-up-mammary-singleview/follow-up-mammary-singleview.component';
import { FollowUpMammaryComponent
  } from '@app/follow/follow-up-mammary/follow-up-mammary.component';

export const FollowRoutes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'hypertensionMS',
      //   component: HypertensionOverviewComponent
      // },
      // {
      //   path: 'hypertension',
      //   component: HypertensionComponent
      // },
      // {
      //   path: 'hypertension/:PID',
      //   component: HypertensionComponent
      // },
      {
        path: 'mammaryFollowOverview',
        component: FollowUpMammaryOverviewComponent
      },
      {
        path: 'mammaryFollowSingleview/:PID',
        component: FollowUpMammarySingleviewComponent
      },
      {
        path: 'mammaryFollow/:param',
        component: FollowUpMammaryComponent
      },
    ]
  }
];
