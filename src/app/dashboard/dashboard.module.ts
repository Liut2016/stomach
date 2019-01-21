import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '@app/demo-material-module';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';

export const dashboardRoutes: Routes = [
  { path: '', component: DashboardIndexComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleChartsModule.forRoot('AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY')
  ],
  declarations: [DashboardIndexComponent]
})
export class DashboardModule { }
