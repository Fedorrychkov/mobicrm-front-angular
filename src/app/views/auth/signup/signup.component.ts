import { Component, OnInit } from '@angular/core';
import { EventService, AuthService } from '../../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public login: string;
  public password: string;
  public first_name: string;
  public last_name: string;
  public phone: string;
  public email: string;
  public errorMessage: string;
  public isLoading = false;
  public passwordShow = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private eventService: EventService
  ) { }

  showPassword() {
    this.passwordShow = !this.passwordShow;
  }

  signup(data, valid) {
    if (!valid) return;
    data.login = data.login.toLowerCase();
    data.email = data.email.toLowerCase();
    this.authService.signup(data)
      .then( res => {
        console.log(res);
        if (res.status === 400) {
          this.errorMessage = res.body.textError;
          this.eventService.broadcast('notification', {type: 'error', message: this.errorMessage});
          return;
        }
        if(res.status === 201) {
          this.eventService.broadcast('notification', {type: 'success', message: 'Ваш аккаунт создан!'});
          setTimeout(() => {
            this.router.navigate(['/auth']);
          }, 3000);
        }
      });
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      login: [this.login, Validators.required],
      password: [this.password, Validators.required],
      first_name: [this.first_name ],
      last_name: [this.last_name ],
      phone: [this.phone ],
      email: [this.email, Validators.required]
    });
  }

}
