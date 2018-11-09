import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '@app/demo-material-module';
import { SharedModule } from '@app/shared/shared.module';
import { MammaryFormComponent } from './mammary-form/mammary-form.component';
import { MammaryRoutes } from '@app/mammary/mammary.routing';
import { MammaryOverviewComponent } from './mammary-overview/mammary-overview.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MammaryRoutes),
        FormsModule,
        ReactiveFormsModule,
        DemoMaterialModule,
        SharedModule
    ],
    declarations: [MammaryFormComponent, MammaryOverviewComponent],
})

export class MammaryModule { }
