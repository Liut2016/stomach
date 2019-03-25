import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationRoutes } from '@app/configuration/configuration.routing';
import { ExportComponent } from './export/export.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DemoMaterialModule} from '@app/demo-material-module';
import {SharedModule} from '@app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ConfigurationRoutes),
    FormsModule,
    DemoMaterialModule,
    SharedModule
  ],
  declarations: [ExportComponent]
})
export class ConfigurationModule { }
