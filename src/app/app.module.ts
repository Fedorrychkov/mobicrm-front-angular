import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

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
]

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
  NotificationComponent
} from './shared';

const APP_SHARED = [
  LogoComponent,
  NotificationComponent
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
    FormsModule,
    HttpModule
  ],
  providers: [
    ...APP_SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
