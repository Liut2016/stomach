import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '@app/demo-material-module';
import { SharedModule } from '@app/shared/shared.module';
import { GeneralComponentsRoutes} from '@app/generalComponents/generalComponents.routing';
import { GeneralComponentsListComponent } from '@app/generalComponents/general-components-list/general-components-list.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GeneralComponentsRoutes),
        FormsModule,
        ReactiveFormsModule,
        DemoMaterialModule,
        SharedModule,
        NgxJsonViewerModule
    ],
    declarations: [GeneralComponentsListComponent],
})

export class GeneralComponentsListModule { }
