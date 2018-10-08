import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonnelComponent } from '@app/personnel/personnel/personnel.component';
import { PersonnelRoutes } from '@app/personnel/personnel.routing';
import { DemoMaterialModule } from '@app/demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementDialogComponent } from '@app/personnel/management-dialog/management-dialog.component';

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
