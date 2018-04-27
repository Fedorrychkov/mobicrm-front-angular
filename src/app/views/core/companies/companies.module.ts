import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { СompaniesComponent } from './companies.component';
import { СompaniesRoutingModule } from './companies.routing';
import { CompaniesListComponent } from './companies-list/companies-list.component';


const APP_MATERIAL = [
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [
    СompaniesRoutingModule,
    CommonModule,
    ...APP_MATERIAL
  ],
  declarations: [ 
    СompaniesComponent,
    CompaniesListComponent ]
})
export class CompaniesModule { }
