import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoMaterialModule} from '@app/demo-material-module';
import { SurveyRoutes} from '@app/survey/survey.routing';

import { ReportComponent} from '@app/survey/report/report.component';
import { DiagnosisComponent, DialogHypertensionGradingComponent} from '@app/survey/diagnosis/diagnosis.component';
import { TreatementComponent} from '@app/survey/treatement/treatement.component';


import { SharedModule} from '@app/shared/shared.module';
import { MammaryComponent } from './mammary/mammary.component';
import { MammaryOverviewComponent } from './mammary-overview/mammary-overview.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SurveyRoutes),
    MatInputModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    ReportComponent,
    DiagnosisComponent,
    DialogHypertensionGradingComponent,
    TreatementComponent,
    MammaryComponent,
    MammaryOverviewComponent,
  ],
  entryComponents: [
    DialogHypertensionGradingComponent
  ]
})

export class SurveyModule {}
