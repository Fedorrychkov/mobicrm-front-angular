import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSettingsComponent } from './profile-settings.component';
import { ProfileSettingsRoutingModule } from './profile-settings.routing';

@NgModule({
  imports: [
    ProfileSettingsRoutingModule,
    CommonModule
  ],
  declarations: [ ProfileSettingsComponent ]
})
export class ProfileSettingsModule { }
