import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonnelComponent } from './personnel/personnel.component';
import { PersonnelRoutes } from './personnel.routing';
import { DemoMaterialModule } from '../demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementDialogComponent } from './management-dialog/management-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(PersonnelRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PersonnelComponent, ManagementDialogComponent],
  entryComponents: [ManagementDialogComponent]
})
export class PersonnelModule { }
