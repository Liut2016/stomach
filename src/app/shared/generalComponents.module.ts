import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '@app/demo-material-module';
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
import { GeneralInputConditionComponent } from '@app/survey/shared/general-input-condition/general-input-condition.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DemoMaterialModule
    ],
    declarations: [
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
        DynamicRowTableComponent,
        GeneralInputConditionComponent
    ],
    exports: [
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
        DynamicRowTableComponent,
        GeneralInputConditionComponent
    ]
})

export class GeneralComponentsModule {}
