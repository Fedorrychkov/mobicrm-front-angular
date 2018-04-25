import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders.routing';

@NgModule({
  imports: [
    OrdersRoutingModule,
    CommonModule
  ],
  declarations: [ OrdersComponent ]
})
export class OrdersModule { }
