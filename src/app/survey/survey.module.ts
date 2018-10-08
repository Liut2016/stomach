import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
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

import { GeneralRadioComponent} from '@app/survey/shared/general-radio/general-radio.component';
import { GeneralInputComponent} from '@app/survey/shared/general-input/general-input.component';
import { GeneralTableComponent} from '@app/survey/shared/general-table/general-table.component';
import { GeneralSelectorComponent} from '@app/survey/shared/general-selector/general-selector.component';
import { GeneralCheckboxComponent} from '@app/survey/shared/general-checkbox/general-checkbox.component';
import { GeneralDateComponent} from '@app/survey/shared/general-date/general-date.component';
import { GeneralDateYearComponent} from '@app/survey/shared/general-date-year/general-date-year.component';
import { GeneralDateYearMonthComponent} from '@app/survey/shared/general-date-year-month/general-date-year-month.component';
import { GeneralCardGroupComponent} from '@app/survey/shared/general-card-group/general-card-group.component';
import { GeneralAddressComponent} from '@app/survey/shared/general-address/general-address.component';
import { FileUploadComponent} from '@app/survey/shared/file-upload/file-upload.component';
import { DynamicRowTableComponent} from '@app/survey/shared/dynamic-row-table/dynamic-row-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SurveyRoutes),
    MatInputModule,
    NgxDatatableModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
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
    GeneralRadioComponent,
    GeneralInputComponent,
    GeneralTableComponent,
    GeneralSelectorComponent,
    GeneralCheckboxComponent,
    GeneralDateComponent,
    GeneralDateYearComponent,
    GeneralDateYearMonthComponent,
    GeneralCardGroupComponent,
    GeneralAddressComponent,
    FileUploadComponent,
    DynamicRowTableComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent,
    DialogDiabetesComponent,
    DialogHypertensionGradingComponent
  ],
})

export class SurveyModule {}
