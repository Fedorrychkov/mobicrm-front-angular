import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { СompaniesComponent } from './companies.component';
import { СompaniesRoutingModule } from './companies.routing';

@NgModule({
  imports: [
    СompaniesRoutingModule,
    CommonModule
  ],
  declarations: [ СompaniesComponent ]
})
export class CompaniesModule { }
