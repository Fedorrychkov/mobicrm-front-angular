import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { OneplaceComponent } from './ggmaps/oneplace/oneplace.component';
import { AgmCoreModule } from '@agm/core';


import { 
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule } from '@angular/material';

const APP_MATERIAL = [
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
]
@NgModule({
  imports: [
    ...APP_MATERIAL,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyDPi7juo6FysXcVc5rqXR9Sdb6g0zZZvdA',
      libraries: ['places']
    }),
  ],
  declarations: [
    OneplaceComponent,
  ],
  exports: [
    OneplaceComponent,
    ...APP_MATERIAL,
  ]
})
export class SharedModule { }
