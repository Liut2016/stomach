import {Route, Routes} from '@angular/router';
import { HypertensionOverviewComponent} from '@app/survey/hypertension-overview/hypertension-overview.component';
import { HypertensionComponent} from '@app/survey/hypertension/hypertension.component';
import { DiabetesOverviewComponent} from '@app/survey/diabetes-overview/diabetes.overview.component';
import { DiabetesComponent} from '@app/survey/diabetes/diabetes.component';
import { ReportComponent} from '@app/survey/report/report.component';
import { DiagnosisComponent} from '@app/survey/diagnosis/diagnosis.component';
import { TreatementComponent} from '@app/survey/treatement/treatement.component';
import { MammaryFormComponent } from '@app/survey/mammary/mammary-form/mammary-form.component';

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
      },
        {
          path: 'mammary',
            component: MammaryFormComponent
        }
    ]
  }
];
