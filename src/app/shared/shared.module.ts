import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '@app/demo-material-module';
import { MenuItems } from '@app/shared/config-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from '@app/shared/accordion';

import { GeneralRadioComponent} from '@app/shared/general-components/general-radio/general-radio.component';
import { GeneralInputComponent} from '@app/shared/general-components/general-input/general-input.component';
import { GeneralTableComponent} from '@app/shared/general-components/general-table/general-table.component';
import { GeneralSelectorComponent} from '@app/shared/general-components/general-selector/general-selector.component';
import { GeneralCheckboxComponent} from '@app/shared/general-components/general-checkbox/general-checkbox.component';
import { GeneralDateComponent} from '@app/shared/general-components/general-date/general-date.component';
import { GeneralDateYearComponent} from '@app/shared/general-components/general-date-year/general-date-year.component';
import { GeneralDateYearMonthComponent} from '@app/shared/general-components/general-date-year-month/general-date-year-month.component';
import { GeneralCardGroupComponent} from '@app/shared/general-components/general-card-group/general-card-group.component';
import { GeneralAddressComponent} from '@app/shared/general-components/general-address/general-address.component';
import { FileUploadComponent} from '@app/shared/general-components/file-upload/file-upload.component';
import { DynamicRowTableComponent} from '@app/shared/general-components/dynamic-row-table/dynamic-row-table.component';
import { GeneralInputConditionComponent } from '@app/shared/general-components/general-input-condition/general-input-condition.component';
import { GeneralSelectComponent } from '@app/shared/general-components/general-select/general-select.component';
import { GeneralExpansionPanelComponent } from '@app/shared/general-components/general-expansion-panel/general-expansion-panel.component';
import { GeneralStepperComponent } from './general-components/general-stepper/general-stepper.component';
import {GeneralClassifiedListsComponent} from '@app/shared/general-components/general-classified-lists/general-classified-lists.component';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,

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
    GeneralInputConditionComponent,
    GeneralSelectComponent,
    GeneralExpansionPanelComponent,
    GeneralStepperComponent,
    GeneralClassifiedListsComponent
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,

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
    GeneralInputConditionComponent,
    GeneralSelectComponent,
    GeneralExpansionPanelComponent,
    GeneralStepperComponent,
    GeneralClassifiedListsComponent
   ],
  providers: [ MenuItems ]
})
export class SharedModule { }






