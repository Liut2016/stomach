import {Route, Routes} from '@angular/router';
import { MammaryOverviewComponent} from '@app/survey/mammary-overview/mammary-overview.component';
import { MammaryComponent} from '@app/survey/mammary/mammary.component';
import { ReportComponent} from '@app/survey/report/report.component';
import { DiagnosisComponent} from '@app/survey/diagnosis/diagnosis.component';
import { TreatementComponent} from '@app/survey/treatement/treatement.component';


export const SurveyRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mammaryMS',
        component: MammaryOverviewComponent
      },
      {
        path: 'mammary',
        component: MammaryComponent
      },
      {
        path: 'mammary/:PID',
        component: MammaryComponent
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
    ]
  }
];
