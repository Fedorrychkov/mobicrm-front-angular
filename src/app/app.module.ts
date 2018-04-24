import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

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

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    AuthLayoutComponent,
    ...APP_COMPONENT
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
