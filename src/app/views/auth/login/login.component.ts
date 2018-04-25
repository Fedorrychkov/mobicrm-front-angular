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

  constructor(
    public fb: FormBuilder,
    public authService: AuthService
  ) { }
  
  auth(data) {
    const login = data.login;
    const password = data.password;
    this.authService.login(login, password)
      .then((data) => {
        console.log(data);
      });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: [this.login],
      password: [this.password] 
    });
  }

}
