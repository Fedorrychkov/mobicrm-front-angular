import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders.routing';
import { OrderListComponent } from './order-list/order-list.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  imports: [
    OrdersRoutingModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [ 
    OrdersComponent,
    OrderListComponent,
    NewOrderComponent,
    OrderItemComponent,
  ]
})
export class OrdersModule { }
