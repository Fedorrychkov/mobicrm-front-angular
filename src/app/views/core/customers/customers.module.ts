import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers.routing';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CustomersRoutingModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [ CustomersComponent, NewCustomerComponent, CustomerListComponent, CustomerItemComponent ]
})
export class CustomersModule { }
