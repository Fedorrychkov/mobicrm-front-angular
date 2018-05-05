import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
    AuthLayoutComponent,
    FullLayoutComponent
  } from './containers';
import { AuthGuard } from './services/auth.guard';

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
      canActivate: [ AuthGuard ]
    },
    {
      path: 'companies',
      component: FullLayoutComponent,
      loadChildren: './views/core/companies/companies.module#CompaniesModule',
      canActivate: [ AuthGuard ]
    },
    {
      path: 'employees',
      component: FullLayoutComponent,
      loadChildren: './views/core/employees/employees.module#EmployeesModule',
      canActivate: [ AuthGuard ]
    },
    {
      path: 'customers',
      component: FullLayoutComponent,
      loadChildren: './views/core/customers/customers.module#CustomersModule',
      canActivate: [ AuthGuard ]
    },
    {
      path: 'orders',
      component: FullLayoutComponent,
      loadChildren: './views/core/orders/orders.module#OrdersModule',
      canActivate: [ AuthGuard ]
    },
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
  
