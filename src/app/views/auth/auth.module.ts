import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule
  ],
  declarations: [ 
    AuthComponent,
    LoginComponent,
    SignupComponent 
  ]
})
export class AuthModule { }
