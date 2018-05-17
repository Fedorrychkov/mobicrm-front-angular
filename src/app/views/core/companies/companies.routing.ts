import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { СompaniesComponent } from './companies.component';
import { CompanyComponent } from './company/company.component';
import { OrdersComponent } from './company/orders/orders.component';
import { CustomersComponent } from './company/customers/customers.component';
import { EmployeesComponent } from './company/employees/employees.component';
import { DashboardComponent } from './company/dashboard/dashboard.component';
import { OrderItemComponent } from './company/orders/order-item/order-item.component';
import { EmployeeItemComponent } from './company/employees/employee-item/employee-item.component';
import { EmployeeProfileComponent } from './company/employees/employee-item/employee-profile/employee-profile.component';
import { EmployeeOrdersComponent } from './company/employees/employee-item/employee-orders/employee-orders.component';
import { CustomerItemComponent } from './company/customers/customer-item/customer-item.component';
import { EmployeeSettingsComponent } from './company/employees/employee-item/employee-settings/employee-settings.component';
import { SettingsComponent } from './company/settings/settings.component';
import { CommonInfoComponent } from './company/settings/common-info/common-info.component';

const routes: Routes = [
  {
    path: '',
    component: СompaniesComponent,
    data: {
      title: 'Компании'
    },
  },
  { path: ':id', component: CompanyComponent, children: [
    { path: 'orders', component: OrdersComponent },
    { path: 'customers', component: CustomersComponent, },
    { path: 'employees', component: EmployeesComponent, },
    { path: 'employees/:id', component: EmployeeItemComponent, children: [
      {path: 'profile', component: EmployeeProfileComponent },
      {path: 'orders', component: EmployeeOrdersComponent },
      {path: 'settings', component: EmployeeSettingsComponent },
    ]},
    { path: 'dashboard', component: DashboardComponent, },
    { path: 'settings', component: SettingsComponent, children: [
      {path: 'common', component: CommonInfoComponent}
    ]},
    { path: 'orders/:id', component: OrderItemComponent },
    { path: 'customers/:id', component: CustomerItemComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class СompaniesRoutingModule {}
