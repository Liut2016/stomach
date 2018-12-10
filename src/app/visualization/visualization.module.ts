import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '@app/demo-material-module';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TreeModule } from 'angular-tree-component';

import { ViewPaneComponent } from './view-pane/view-pane.component';
import { PlotPaneComponent } from './plot-pane/plot-pane.component';
import { DataPaneComponent } from './data-pane/data-pane.component';
import { MainComponent } from './main/main.component';
import { DimensionReductionComponent } from './dimension-reduction/dimension-reduction.component';
import { TreeComponent } from './tree/tree.component';

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
    DragDropModule,
    TreeModule.forRoot()
  ],
  declarations: [
    ViewPaneComponent,
    PlotPaneComponent,
    DataPaneComponent,
    MainComponent,
    DimensionReductionComponent,
    TreeComponent
]
})
export class VisualizationModule { }
