import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders.routing';
import { OrderListComponent } from './order-list/order-list.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderItemComponent } from './order-item/order-item.component';

import { 
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatIconModule,
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule } from '@angular/material';


const APP_MATERIAL = [
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatIconModule,
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
]
@NgModule({
  imports: [
    OrdersRoutingModule,
    CommonModule,
    ...APP_MATERIAL,
  ],
  declarations: [ 
    OrdersComponent,
    OrderListComponent,
    NewOrderComponent,
    OrderItemComponent,
  ]
})
export class OrdersModule { }
