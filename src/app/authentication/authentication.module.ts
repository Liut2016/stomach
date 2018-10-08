import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatInputModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthenticationRoutes } from '@app/authentication/authentication.routing';
import { ErrorComponent } from '@app/authentication/error/error.component';
import { ForgotComponent } from '@app/authentication/forgot/forgot.component';
import { LockscreenComponent } from '@app/authentication/lockscreen/lockscreen.component';
import { LoginComponent } from '@app/authentication/login/login.component';
import { RegisterComponent } from '@app/authentication/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ErrorComponent,
    ForgotComponent,
    LockscreenComponent,
    LoginComponent,
    RegisterComponent
  ]
})

export class AuthenticationModule {}
