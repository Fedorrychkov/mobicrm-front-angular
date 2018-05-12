import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Авторизация'
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'Регистрация'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
