import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '@app/demo-material-module';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TreeModule } from 'angular-tree-component';
import { NguCarouselModule } from '@app/shared/modules/carousel';

import { ViewPaneComponent } from '@app/visualization/view-pane/view-pane.component';
import { PlotPaneComponent } from '@app/visualization/plot-pane/plot-pane.component';
import { DataPaneComponent, FileDatabase} from '@app/visualization/data-pane/data-pane.component';
import { MainComponent, MainComponentDialogComponent, FilterDiagComponent } from '@app/visualization/main/main.component';
import { DimensionReductionComponent } from '@app/visualization/dimension-reduction/dimension-reduction.component';
import { RecommendListComponent } from '@app/visualization/recommend-list/recommend-list.component';
import { TableComponent } from './table/table.component';

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
    TreeModule.forRoot(),
    NguCarouselModule
  ],
  declarations: [
    ViewPaneComponent,
    PlotPaneComponent,
    DataPaneComponent,
    MainComponent,
    DimensionReductionComponent,
    MainComponentDialogComponent,
    RecommendListComponent,
    TableComponent,
    FilterDiagComponent
],
  entryComponents: [MainComponentDialogComponent, FilterDiagComponent],
  providers: [FileDatabase]
})
export class VisualizationModule { }
