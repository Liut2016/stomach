import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '@app/demo-material-module';
import { SharedModule } from '@app/shared/shared.module';
import { StomachRoutes } from '@app/stomach/stomach.routing';
import { StomachFormComponent } from '@app/stomach/stomach-form/stomach-form.component';
import { StomachOverviewComponent } from '@app/stomach/stomach-overview/stomach-overview.component';
import { StomachFilterComponent } from './stomach-filter/stomach-filter.component';
import { MyPipePipe } from '@app/shared/pipe/html-pipe';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(StomachRoutes),
        FormsModule,
        ReactiveFormsModule,
        DemoMaterialModule,
        SharedModule
    ],
    declarations: [StomachFormComponent, StomachOverviewComponent, StomachFilterComponent, MyPipePipe],
})

export class StomachModule { }
