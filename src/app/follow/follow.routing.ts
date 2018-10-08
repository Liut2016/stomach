import {Route, Routes} from '@angular/router';
import { FollowUpHypertensionOverviewComponent
  } from '@app/follow/follow-up-hypertension-overview/follow-up-hypertension-overview.component';
import { FollowUpHypertensionSingleviewComponent
  } from '@app/follow/follow-up-hypertension-singleview/follow-up-hypertension-singleview.component';
import { FollowUpHypertensionComponent
  } from '@app/follow/follow-up-hypertension/follow-up-hypertension.component';
import { FollowUpDiabetesOverviewComponent
  } from '@app/follow/follow-up-diabetes-overview/follow-up-diabetes-overview.component';
import { FollowUpDiabetesSingleviewComponent
  } from '@app/follow/follow-up-diabetes-singleview/follow-up-diabetes-singleview.component';
import { FollowUpDiabetesComponent} from '@app/follow/follow-up-diabetes/follow-up-diabetes.component';

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
        path: 'hypertensionFollowOverview',
        component: FollowUpHypertensionOverviewComponent
      },
      {
        path: 'hypertensionFollowSingleview/:PID',
        component: FollowUpHypertensionSingleviewComponent
      },
      // {
      //   path: 'hypertensionFollow',
      //   component: FollowUpHypertensionComponent
      // },
      {
        path: 'hypertensionFollow/:param',
        component: FollowUpHypertensionComponent
      },
      // {
      //   path: 'diabetesMS',
      //   component: DiabetesOverviewComponent
      // },
      // {
      //   path: 'diabetes',
      //   component: DiabetesComponent
      // },
      // {
      //   path: 'diabetes/:PID',
      //   component: DiabetesComponent
      // },
      {
        path: 'diabetesFollowOverview',
        component: FollowUpDiabetesOverviewComponent
      },
      {
        path: 'diabetesFollowSingleview/:PID',
        component: FollowUpDiabetesSingleviewComponent
      },
      {
        path: 'diabetesFollow/:param',
        component: FollowUpDiabetesComponent
      }
    ]
  }
];
