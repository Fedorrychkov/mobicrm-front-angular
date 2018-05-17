import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { 
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSelectModule,
  MatMenuModule,
  MatTooltipModule,
} from '@angular/material';

const APP_MATERIAL = [
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSelectModule,
  MatMenuModule,
  MatTooltipModule,
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
  DirectorService,
  AuthGuard,
  UserService,
  GeolocationService,
  AddressMapService,
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
  DirectorService,
  AuthGuard,
  UserService,
  GeolocationService,
  AddressMapService,
];

import {
  FullLayoutComponent,
  AuthLayoutComponent
} from './containers';

import {
  AppHeaderComponent,
  AppAsideComponent,
  AppSidebarComponent,
  AppFooterComponent,
  // NavigationComponent
} from './components';

const APP_COMPONENT = [
  AppHeaderComponent,
  AppSidebarComponent,
  AppAsideComponent,
  AppFooterComponent,
  // NavigationComponent
];

import { 
  LogoComponent,
  NotificationComponent,
  NewCompanyFormComponent,
  NewOrderFormComponent,
  NewCustomerFormComponent,
  NewEmployeeFormComponent,
  UserComponent,
  UpdateOrderFormComponent,
  OrderStatusIndicatorComponent,
} from './shared';

const APP_SHARED = [
  LogoComponent,
  NotificationComponent,
  NewCompanyFormComponent,
  NewOrderFormComponent,
  NewCustomerFormComponent,
  NewEmployeeFormComponent,
  UserComponent,
  UpdateOrderFormComponent,
  OrderStatusIndicatorComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    AuthLayoutComponent,
    ...APP_COMPONENT,
    ...APP_SHARED,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyDPi7juo6FysXcVc5rqXR9Sdb6g0zZZvdA',
      libraries: ['places']
    }),
    ...APP_MATERIAL
  ],
  providers: [
    ...APP_SERVICES,
  ],
  entryComponents: [
    NewCompanyFormComponent,
    NewOrderFormComponent,
    NewCustomerFormComponent,
    NewEmployeeFormComponent,
    UpdateOrderFormComponent,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
