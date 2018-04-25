import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers.routing';

@NgModule({
  imports: [
    CustomersRoutingModule,
    CommonModule
  ],
  declarations: [ CustomersComponent ]
})
export class CustomersModule { }
