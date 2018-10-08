import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoMaterialModule} from '@app/demo-material-module';
import { FollowRoutes} from '@app/follow/follow.routing';

import { FollowUpHypertensionOverviewComponent } from '@app/follow/follow-up-hypertension-overview/follow-up-hypertension-overview.component';
import { FollowUpHypertensionSingleviewComponent} from '@app/follow/follow-up-hypertension-singleview/follow-up-hypertension-singleview.component';
import { FollowUpHypertensionComponent, DialogOverviewFollowHyperDialogComponent} from
  '@app/follow/follow-up-hypertension/follow-up-hypertension.component';

import { FollowUpDiabetesOverviewComponent} from '@app/follow/follow-up-diabetes-overview/follow-up-diabetes-overview.component';
import { FollowUpDiabetesSingleviewComponent } from '@app/follow/follow-up-diabetes-singleview/follow-up-diabetes-singleview.component';
import { FollowUpDiabetesComponent, DialogOverviewFollowDiabetesDialogComponent} from '@app/follow/follow-up-diabetes/follow-up-diabetes.component';
import { GeneralRadioComponent} from '@app/follow/shared/general-radio/general-radio.component';
import { GeneralInputComponent} from '@app/follow/shared/general-input/general-input.component';
import { GeneralTableComponent} from '@app/follow/shared/general-table/general-table.component';
import { GeneralSelectorComponent} from '@app/follow/shared/general-selector/general-selector.component';
import { GeneralCheckboxComponent} from '@app/follow/shared/general-checkbox/general-checkbox.component';
import { GeneralDateComponent} from '@app/follow/shared/general-date/general-date.component';
import { GeneralDateYearComponent} from '@app/follow/shared/general-date-year/general-date-year.component';
import { GeneralDateYearMonthComponent} from '@app/follow/shared/general-date-year-month/general-date-year-month.component';
import { GeneralCardGroupComponent} from '@app/follow/shared/general-card-group/general-card-group.component';
import { GeneralAddressComponent} from '@app/follow/shared/general-address/general-address.component';
import { FileUploadComponent} from '@app/follow/shared/file-upload/file-upload.component';
import { DynamicRowTableComponent} from '@app/follow/shared/dynamic-row-table/dynamic-row-table.component';

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
