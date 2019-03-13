import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutes } from '@app/app.routing';
import { AppComponent } from '@app/app.component';


import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from '@app/layouts/full/full.component';
import { AppBlankComponent } from '@app/layouts/blank/blank.component';
import { AppHeaderComponent } from '@app/layouts/full/header/header.component';
import { AppSidebarComponent } from '@app/layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule} from '@app/demo-material-module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { localStorageProviders } from '@ngx-pwa/local-storage';
import { SharedModule } from '@app/shared/shared.module';
import { SpinnerComponent } from '@app/shared/spinner.component';

import { CoreModule } from '@app/core/core.module';
import { HttpModule } from '@angular/http';
import { SettingComponent } from '@app/setting/setting.component';

import { LocalStorage } from '@app/shared/local.storage';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MarkdownModule } from 'ngx-markdown';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppBlankComponent,
    AppSidebarComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    PerfectScrollbarModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    CoreModule,
    HttpModule,
    ReactiveFormsModule,
    DragDropModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    LocalStorage,
    // localStorageProviders({prefix: 'dr-chronic'}),
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }, {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
