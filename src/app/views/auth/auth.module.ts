import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    AuthRoutingModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ 
    AuthComponent,
    LoginComponent,
    SignupComponent 
  ]
})
export class AuthModule { }
