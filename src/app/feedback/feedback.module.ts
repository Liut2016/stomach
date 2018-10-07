import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent, DialogDataExampleDialogComponent } from './feedback.component';
import { Routes, RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DemoMaterialModule } from '../demo-material-module';

const FeedbackRoutes: Routes = [
  {
    path: '',
    component: FeedbackComponent
  }
];

@NgModule({
  imports: [
    // BrowserModule,
    CommonModule,
    QuillModule,
    DemoMaterialModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(FeedbackRoutes)
  ],
  declarations: [FeedbackComponent, DialogDataExampleDialogComponent],
  entryComponents: [DialogDataExampleDialogComponent]
})
export class FeedbackModule { }
