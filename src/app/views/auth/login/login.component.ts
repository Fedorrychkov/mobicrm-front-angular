import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

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
    public authService: AuthService
  ) { }
  
  auth(data) {
    this.isLoading = true;
    this.errorMessage = '';
    const login = data.login;
    const password = data.password;
    this.authService.login(login, password)
      .then((data) => {
        this.isLoading = false;
        if (data.status !== 200) {
          this.errorMessage = data.body.textError;
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
