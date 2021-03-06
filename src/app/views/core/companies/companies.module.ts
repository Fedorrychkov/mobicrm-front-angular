import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule,
         MatButtonModule,
         MatTableModule,
         MatProgressSpinnerModule,
         MatIconModule,
         MatTabsModule,
         MatInputModule,
         MatSelectModule,
         MatFormFieldModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';

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
import { DashboardTotalComponent, ChartjsComponent, LineChartComponent, } from '../../../shared';
import { AddressMapService, GeolocationService } from '../../../services';
import { EmployeeProfileComponent } from './company/employees/employee-item/employee-profile/employee-profile.component';
import { EmployeeOrdersComponent } from './company/employees/employee-item/employee-orders/employee-orders.component';
import { EmployeeSettingsComponent } from './company/employees/employee-item/employee-settings/employee-settings.component';
import { SettingsComponent } from './company/settings/settings.component';
import { NavigationComponent } from '../../../components';
import { CommonInfoComponent } from './company/settings/common-info/common-info.component';
import { SharedModule } from '../../../shared/shared.module';

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
    СompaniesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ...APP_MATERIAL,
    ChartsModule,
    SharedModule,
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
    ChartjsComponent,
    LineChartComponent,
    EmployeeProfileComponent,
    EmployeeOrdersComponent,
    EmployeeSettingsComponent,
    NavigationComponent,
    SettingsComponent,
    CommonInfoComponent,
  ]
})
export class CompaniesModule { }
