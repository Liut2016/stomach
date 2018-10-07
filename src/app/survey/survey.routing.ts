import {Route, Routes} from '@angular/router';
import { HypertensionOverviewComponent} from './hypertension-overview/hypertension-overview.component';
import { HypertensionComponent} from './hypertension/hypertension.component';
import { DiabetesOverviewComponent} from './diabetes-overview/diabetes.overview.component';
import { DiabetesComponent} from './diabetes/diabetes.component';
import { ReportComponent} from './report/report.component';
import { DiagnosisComponent} from './diagnosis/diagnosis.component';
import { TreatementComponent} from './treatement/treatement.component';

export const SurveyRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'hypertensionMS',
        component: HypertensionOverviewComponent
      },
      {
        path: 'hypertension',
        component: HypertensionComponent
      },
      {
        path: 'hypertension/:PID',
        component: HypertensionComponent
      },
      {
        path: 'diabetesMS',
        component: DiabetesOverviewComponent
      },
      {
        path: 'diabetes',
        component: DiabetesComponent
      },
      {
        path: 'diabetes/:PID',
        component: DiabetesComponent
      },
      {
        path: 'reportMS',
        component: ReportComponent
      },
      {
        path: 'diagnosisMS',
        component: DiagnosisComponent
      },
      {
        path: 'treatementMS',
        component: TreatementComponent
      }
    ]
  }
];
