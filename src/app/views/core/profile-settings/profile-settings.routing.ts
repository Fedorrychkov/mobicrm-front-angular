import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ProfileSettingsComponent } from './profile-settings.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingsComponent,
    data: {
      title: 'Профиль'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileSettingsRoutingModule {}
