import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
