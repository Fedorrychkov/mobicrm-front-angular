import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileSettingsComponent } from './profile-settings.component';
import { ProfileSettingsRoutingModule } from './profile-settings.routing';
import { ProfileCommonComponent } from './profile-common/profile-common.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    ProfileSettingsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [ 
    ProfileSettingsComponent,
    ProfileCommonComponent
  ]
})
export class ProfileSettingsModule { }
