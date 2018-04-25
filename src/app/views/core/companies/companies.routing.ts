import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { СompaniesComponent } from './companies.component';

const routes: Routes = [
  {
    path: '',
    component: СompaniesComponent,
    data: {
      title: 'Клиенты'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class СompaniesRoutingModule {}
