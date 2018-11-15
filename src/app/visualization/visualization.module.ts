import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataPanelComponent } from './data-panel/data-panel.component';
import { EncodingPanelComponent } from './encoding-panel/encoding-panel.component';
import { PlotPanelComponent } from './plot-panel/plot-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DataPanelComponent, EncodingPanelComponent, PlotPanelComponent]
})
export class VisualizationModule { }
