import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '@app/demo-material-module';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ViewPaneComponent } from './view-pane/view-pane.component';
import { PlotPaneComponent } from './plot-pane/plot-pane.component';
import { DataPaneComponent } from './data-pane/data-pane.component';
import { EncodingPaneComponent } from './encoding-pane/encoding-pane.component';
import { MainComponent } from './main/main.component';

export const visRoutes: Routes = [
  { path: '', component: MainComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(visRoutes),
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule
  ],
  declarations: [ViewPaneComponent, PlotPaneComponent, DataPaneComponent, EncodingPaneComponent, MainComponent]
})
export class VisualizationModule { }
