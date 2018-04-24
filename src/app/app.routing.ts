import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Import Containers
import {
    AuthLayoutComponent,
    FullLayoutComponent
  } from './containers';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'auth',
      component: AuthLayoutComponent,
      loadChildren: './views/auth/auth.module#AuthModule',
    },
    {
      path: 'dashboard',
      component: FullLayoutComponent,
      loadChildren: './views/core/dashboard/dashboard.module#DashboardModule',
    },
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
  
