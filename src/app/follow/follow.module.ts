import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoMaterialModule} from '../demo-material-module';
import { FollowRoutes} from './follow.routing';

import { FollowUpHypertensionOverviewComponent } from './follow-up-hypertension-overview/follow-up-hypertension-overview.component';
import { FollowUpHypertensionSingleviewComponent} from './follow-up-hypertension-singleview/follow-up-hypertension-singleview.component';
import { FollowUpHypertensionComponent, DialogOverviewFollowHyperDialogComponent} from
  './follow-up-hypertension/follow-up-hypertension.component';

import { FollowUpDiabetesOverviewComponent} from './follow-up-diabetes-overview/follow-up-diabetes-overview.component';
import { FollowUpDiabetesSingleviewComponent } from './follow-up-diabetes-singleview/follow-up-diabetes-singleview.component';
import { FollowUpDiabetesComponent, DialogOverviewFollowDiabetesDialogComponent} from './follow-up-diabetes/follow-up-diabetes.component';
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
    RouterModule.forChild(FollowRoutes),
    MatInputModule,
    NgxDatatableModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FollowUpHypertensionOverviewComponent,
    FollowUpHypertensionSingleviewComponent,
    FollowUpHypertensionComponent,
    DialogOverviewFollowHyperDialogComponent,
    FollowUpDiabetesOverviewComponent,
    FollowUpDiabetesSingleviewComponent,
    FollowUpDiabetesComponent,
    DialogOverviewFollowDiabetesDialogComponent,
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
    DialogOverviewFollowHyperDialogComponent,
    DialogOverviewFollowDiabetesDialogComponent
  ],
})

export class FollowModule {}
