import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { 
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatIconModule,
} from '@angular/material';

const APP_MATERIAL = [
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatIconModule,
];

import {
  RestService,
  AuthService,
  StorageService,
  EventService,
  CompanyService,
  OrderService,
  CustomerService,
  EmployeeService,
  DirectorService
} from './services';

const APP_SERVICES = [
  RestService,
  AuthService,
  StorageService,
  EventService,
  CompanyService,
  OrderService,
  CustomerService,
  EmployeeService,
  DirectorService
];

import {
  FullLayoutComponent,
  AuthLayoutComponent
} from './containers';

import {
  AppHeaderComponent,
  AppAsideComponent,
  AppSidebarComponent,
  AppFooterComponent
} from './components';

const APP_COMPONENT = [
  AppHeaderComponent,
  AppSidebarComponent,
  AppAsideComponent,
  AppFooterComponent
];

import { 
  LogoComponent,
  NotificationComponent,
  NewCompanyFormComponent,
  NewOrderFormComponent,
  NewCustomerFormComponent,
  NewEmployeeFormComponent,
  UserComponent,
} from './shared';

const APP_SHARED = [
  LogoComponent,
  NotificationComponent,
  NewCompanyFormComponent,
  NewOrderFormComponent,
  NewCustomerFormComponent,
  NewEmployeeFormComponent,
  UserComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    AuthLayoutComponent,
    ...APP_COMPONENT,
    ...APP_SHARED,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    ...APP_MATERIAL
  ],
  providers: [
    ...APP_SERVICES
  ],
  entryComponents: [
    NewCompanyFormComponent,
    NewOrderFormComponent,
    NewCustomerFormComponent,
    NewEmployeeFormComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
