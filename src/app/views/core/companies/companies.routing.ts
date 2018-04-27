import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { СompaniesComponent } from './companies.component';
import { CompanyComponent } from './company/company.component';
import { OrdersComponent } from './company/orders/orders.component';
import { CustomersComponent } from './company/customers/customers.component';
import { EmployeesComponent } from './company/employees/employees.component';
import { DashboardComponent } from './company/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: СompaniesComponent,
    data: {
      title: 'Компании'
    },
  },
  { path: ':id', component: CompanyComponent, children: [
    { path: 'orders', component: OrdersComponent, },
    { path: 'customers', component: CustomersComponent, },
    { path: 'employees', component: EmployeesComponent, },
    { path: 'dashboard', component: DashboardComponent, },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class СompaniesRoutingModule {}
