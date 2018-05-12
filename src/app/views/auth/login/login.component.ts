import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService, EventService } from '../../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public login: String;
  public password: String;
  public errorMessage: String;
  public isLoading = false;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public eventService: EventService
  ) { }
  
  auth(data) {
    data.login = data.login.toLowerCase();
    this.isLoading = true;
    this.errorMessage = '';
    const login = data.login;
    const password = data.password;
    this.authService.login(login, password)
      .then((data) => {
        this.isLoading = false;
        this.eventService.broadcast('notification', {type: 'success', message: 'Вы успешно авторизовались!'});
      }).catch( err => {
        if (err.status === 400) {
          this.errorMessage = 'Логин или пароль не верны!';
          this.eventService.broadcast('notification', {type: 'error', message: this.errorMessage});
        }
      });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: [this.login],
      password: [this.password] 
    });
  }

}
