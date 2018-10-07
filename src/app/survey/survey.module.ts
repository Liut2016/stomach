import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoMaterialModule} from '../demo-material-module';
import { SurveyRoutes} from './survey.routing';

import { HypertensionOverviewComponent} from './hypertension-overview/hypertension-overview.component';
import { HypertensionComponent, DialogOverviewExampleDialogComponent } from './hypertension/hypertension.component';

import { DiabetesOverviewComponent} from './diabetes-overview/diabetes.overview.component';
import { DiabetesComponent, DialogDiabetesComponent} from './diabetes/diabetes.component';

import { ReportComponent} from './report/report.component';
import { DiagnosisComponent, DialogHypertensionGradingComponent} from './diagnosis/diagnosis.component';
import { TreatementComponent} from './treatement/treatement.component';

import { GeneralRadioComponent} from './shared/general-radio/general-radio.component';
import { GeneralInputComponent} from './shared/general-input/general-input.component';
import { GeneralTableComponent} from './shared/general-table/general-table.component';
import { GeneralSelectorComponent} from './shared/general-selector/general-selector.component';
import { GeneralCheckboxComponent} from './shared/general-checkbox/general-checkbox.component';
import { GeneralDateComponent} from './shared/general-date/general-date.component';
import { GeneralDateYearComponent} from './shared/general-date-year/general-date-year.component';
import { GeneralDateYearMonthComponent} from './shared/general-date-year-month/general-date-year-month.component';
import { GeneralCardGroupComponent} from './shared/general-card-group/general-card-group.component';
import { GeneralAddressComponent} from './shared/general-address/general-address.component';
import { FileUploadComponent} from './shared/file-upload/file-upload.component';
import { DynamicRowTableComponent} from './shared/dynamic-row-table/dynamic-row-table.component';

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
