import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: ':id', component: CustomerItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
