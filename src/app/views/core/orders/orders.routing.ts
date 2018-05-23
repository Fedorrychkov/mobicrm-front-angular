import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { OrderItemComponent } from './order-item/order-item.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: ':id', component: OrderItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
