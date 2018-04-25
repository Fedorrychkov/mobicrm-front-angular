import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

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
    public fb: FormBuilder
  ) { }
  
  auth(data) {
    const login = data.login;
    const password = data.password;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: [this.login],
      password: [this.password] 
    });
  }

}
