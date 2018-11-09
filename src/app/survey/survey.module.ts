import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoMaterialModule} from '@app/demo-material-module';
import { SurveyRoutes} from '@app/survey/survey.routing';

import { HypertensionOverviewComponent} from '@app/survey/hypertension-overview/hypertension-overview.component';
import { HypertensionComponent, DialogOverviewExampleDialogComponent } from '@app/survey/hypertension/hypertension.component';

import { DiabetesOverviewComponent} from '@app/survey/diabetes-overview/diabetes.overview.component';
import { DiabetesComponent, DialogDiabetesComponent} from '@app/survey/diabetes/diabetes.component';

import { ReportComponent} from '@app/survey/report/report.component';
import { DiagnosisComponent, DialogHypertensionGradingComponent} from '@app/survey/diagnosis/diagnosis.component';
import { TreatementComponent} from '@app/survey/treatement/treatement.component';


import { SharedModule} from '@app/shared/shared.module';


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
    HypertensionOverviewComponent,
    HypertensionComponent,
    DialogOverviewExampleDialogComponent,
    DiabetesOverviewComponent,
    DiabetesComponent,
    DialogDiabetesComponent,
    ReportComponent,
    DiagnosisComponent,
    DialogHypertensionGradingComponent,
    TreatementComponent,
  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent,
    DialogDiabetesComponent,
    DialogHypertensionGradingComponent
  ]
})

export class SurveyModule {}
