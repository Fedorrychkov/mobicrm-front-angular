import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { СompaniesComponent } from './companies.component';
import { СompaniesRoutingModule } from './companies.routing';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { CompanyComponent } from './company/company.component';
import { OrdersComponent } from './company/orders/orders.component';

const APP_MATERIAL = [
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [
    СompaniesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ...APP_MATERIAL
  ],
  declarations: [ 
    СompaniesComponent,
    CompaniesListComponent,
    NewCompanyComponent,
    CompanyComponent,
    OrdersComponent,
  ]
})
export class CompaniesModule { }
