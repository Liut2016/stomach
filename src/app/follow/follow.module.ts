import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoMaterialModule} from '@app/demo-material-module';
import { FollowRoutes} from '@app/follow/follow.routing';
import {SharedModule} from '@app/shared/shared.module';
import { FollowUpMammaryComponent } from './follow-up-mammary/follow-up-mammary.component';
import { FollowUpMammaryOverviewComponent } from './follow-up-mammary-overview/follow-up-mammary-overview.component';
import { FollowUpMammarySingleviewComponent } from './follow-up-mammary-singleview/follow-up-mammary-singleview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FollowRoutes),
    MatInputModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    FollowUpMammaryComponent,
    FollowUpMammaryOverviewComponent,
    FollowUpMammarySingleviewComponent,
  ],
  entryComponents: [
  ],
})

export class FollowModule {}
