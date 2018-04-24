import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule
  ],
  declarations: [ AuthComponent ]
})
export class AuthModule { }
