import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees.routing';

@NgModule({
  imports: [
    EmployeesRoutingModule,
    CommonModule
  ],
  declarations: [ EmployeesComponent ]
})
export class EmployeesModule { }
