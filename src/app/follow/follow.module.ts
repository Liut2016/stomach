import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoMaterialModule} from '@app/demo-material-module';
import { FollowRoutes} from '@app/follow/follow.routing';

import { FollowUpHypertensionOverviewComponent } from '@app/follow/follow-up-hypertension-overview/follow-up-hypertension-overview.component';
import { FollowUpHypertensionSingleviewComponent} from '@app/follow/follow-up-hypertension-singleview/follow-up-hypertension-singleview.component';
import { FollowUpHypertensionComponent, DialogOverviewFollowHyperDialogComponent} from
  '@app/follow/follow-up-hypertension/follow-up-hypertension.component';

import { FollowUpDiabetesOverviewComponent} from '@app/follow/follow-up-diabetes-overview/follow-up-diabetes-overview.component';
import { FollowUpDiabetesSingleviewComponent } from '@app/follow/follow-up-diabetes-singleview/follow-up-diabetes-singleview.component';
import { FollowUpDiabetesComponent, DialogOverviewFollowDiabetesDialogComponent} from '@app/follow/follow-up-diabetes/follow-up-diabetes.component';
import {GeneralComponentsModule} from '@app/shared/generalComponents.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FollowRoutes),
    MatInputModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralComponentsModule
  ],
  declarations: [
    FollowUpHypertensionOverviewComponent,
    FollowUpHypertensionSingleviewComponent,
    FollowUpHypertensionComponent,
    DialogOverviewFollowHyperDialogComponent,
    FollowUpDiabetesOverviewComponent,
    FollowUpDiabetesSingleviewComponent,
    FollowUpDiabetesComponent,
    DialogOverviewFollowDiabetesDialogComponent,
  ],
  entryComponents: [
    DialogOverviewFollowHyperDialogComponent,
    DialogOverviewFollowDiabetesDialogComponent
  ],
})

export class FollowModule {}
