import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const APP_MATERIAL = [
  MatDialogModule,
  MatInputModule,
  MatButtonModule
];

import {
  RestService,
  AuthService,
  StorageService,
  EventService,
  CompanyService
} from './services';

const APP_SERVICES = [
  RestService,
  AuthService,
  StorageService,
  EventService,
  CompanyService
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
  NewCompanyFormComponent
} from './shared';

const APP_SHARED = [
  LogoComponent,
  NotificationComponent,
  NewCompanyFormComponent
];

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    AuthLayoutComponent,
    ...APP_COMPONENT,
    ...APP_SHARED
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
    NewCompanyFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
