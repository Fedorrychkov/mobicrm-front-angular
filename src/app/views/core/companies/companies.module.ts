import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatTableModule, MatProgressSpinnerModule, MatIconModule, MatTabsModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AgmCoreModule } from '@agm/core';

import { СompaniesComponent } from './companies.component';
import { СompaniesRoutingModule } from './companies.routing';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { CompanyComponent } from './company/company.component';
import { OrdersComponent } from './company/orders/orders.component';
import { DashboardComponent } from './company/dashboard/dashboard.component';
import { CustomersComponent } from './company/customers/customers.component';
import { EmployeesComponent } from './company/employees/employees.component';
import { NewOrderComponent } from './company/orders/new-order/new-order.component';
import { OrderItemComponent } from './company/orders/order-item/order-item.component';
import { OrdersListComponent } from './company/orders/orders-list/orders-list.component';
import { CustomerItemComponent } from './company/customers/customer-item/customer-item.component';
import { CustomerListComponent } from './company/customers/customer-list/customer-list.component';
import { NewCustomerComponent } from './company/customers/new-customer/new-customer.component';
import { NewEmployeeComponent } from './company/employees/new-employee/new-employee.component';
import { EmployeeItemComponent } from './company/employees/employee-item/employee-item.component';
import { EmployeeListComponent } from './company/employees/employee-list/employee-list.component';
import { DashboardTotalComponent, GgmapsComponent, ChartjsComponent, LineChartComponent } from '../../../shared';
import { AddressMapService, GeolocationService } from '../../../services';
import { EmployeeProfileComponent } from './company/employees/employee-item/employee-profile/employee-profile.component';
import { EmployeeOrdersComponent } from './company/employees/employee-item/employee-orders/employee-orders.component';
import { NavigationComponent } from '../../../components';

const APP_MATERIAL = [
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatIconModule,
  MatTabsModule,
]


@NgModule({
  imports: [
    СompaniesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ...APP_MATERIAL,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyDPi7juo6FysXcVc5rqXR9Sdb6g0zZZvdA',
      libraries: ['places']
    })
  ],
  providers: [
    AddressMapService,
    GeolocationService,
  ],
  declarations: [ 
    СompaniesComponent,
    CompaniesListComponent,
    NewCompanyComponent,
    CompanyComponent,
    OrdersComponent,
    DashboardComponent,
    CustomersComponent,
    EmployeesComponent,
    NewOrderComponent,
    OrderItemComponent,
    OrdersListComponent,
    CustomerItemComponent,
    CustomerListComponent,
    NewCustomerComponent,
    NewEmployeeComponent,
    EmployeeItemComponent,
    EmployeeListComponent,
    DashboardTotalComponent,
    GgmapsComponent,
    ChartjsComponent,
    LineChartComponent,
    EmployeeProfileComponent,
    EmployeeOrdersComponent,
    NavigationComponent
  ]
})
export class CompaniesModule { }
