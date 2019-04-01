import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationRoutes } from '@app/configuration/configuration.routing';
import { ExportComponent } from './export/export.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DemoMaterialModule} from '@app/demo-material-module';
import {SharedModule} from '@app/shared/shared.module';
import { ExportDialogComponent } from './export-dialog/export-dialog.component';
import { DeleteDialog } from '@app/configuration/export/export.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ConfigurationRoutes),
    FormsModule,
    DemoMaterialModule,
    SharedModule,
    ReactiveFormsModule,
   
  ],
  declarations: [ExportComponent, ExportDialogComponent,DeleteDialog],
  entryComponents: [ExportDialogComponent,ExportComponent,DeleteDialog]
})
export class ConfigurationModule { }
