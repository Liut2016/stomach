import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '@app/demo-material-module';
import { GeneralComponentsModule } from '@app/shared/generalComponents.module';
import { GeneralComponentsRoutes} from '@app/generalComponents/generalComponents.routing';
import { GeneralComponentsListComponent } from '@app/generalComponents/general-components-list/general-components-list.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GeneralComponentsRoutes),
        FormsModule,
        ReactiveFormsModule,
        DemoMaterialModule,
        GeneralComponentsModule
    ],
    declarations: [GeneralComponentsListComponent],
})

export class GeneralComponentsListModule { }
