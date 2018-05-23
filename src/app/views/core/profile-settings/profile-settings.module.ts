import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSettingsComponent } from './profile-settings.component';
import { ProfileSettingsRoutingModule } from './profile-settings.routing';
import { ProfileCommonComponent } from './profile-common/profile-common.component';

@NgModule({
  imports: [
    ProfileSettingsRoutingModule,
    CommonModule
  ],
  declarations: [ ProfileSettingsComponent, ProfileCommonComponent ]
})
export class ProfileSettingsModule { }
