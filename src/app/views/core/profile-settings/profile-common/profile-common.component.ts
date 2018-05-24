import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../../interfaces/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../services';

@Component({
  selector: 'app-profile-common',
  templateUrl: './profile-common.component.html',
  styleUrls: ['./profile-common.component.scss']
})
export class ProfileCommonComponent implements OnInit {
  public isLoaded: boolean = false;
  public isEditMode: boolean = false;
  public profile: IUser;
  
  public id: number;
  public first_name: string;
  public last_name: string;
  public login: string;
  public email: string;
  public phone: string;
  public status: string;
  public role: string;
  public rate_per_order: string;
  public rate_per_month: string;

  public updateProfileForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private userService: UserService
  ) { }
  
  getProfile() {
    this.userService.getUser()
      .then( res => {
        this.profile = res.body;
        console.log(res.body);
        return res.body;
      }).then( res => {
        this.id = res.id
        this.first_name = res.first_name;
        this.last_name = res.last_name;
        this.email = res.email;
        this.login = res.login;
        this.phone = res.phone;
        this.rate_per_order = res.rate_per_order;
        this.rate_per_month = res.rate_per_month;
        this.isLoaded = true;
      });
  }

  ngOnInit() {
    this.getProfile();
    this.updateProfileForm = this.fb.group({
      first_name: [this.first_name ],
      last_name: [this.last_name ],
      login: [this.login, [Validators.required]],
      email: [this.email, [Validators.required]],
      phone: [this.phone],
      status: [this.status],
      role: [this.role],
      rate_per_month: [this.rate_per_month ],
      rate_per_order: [this.rate_per_order],
      id: [this.id]
    });
  }

}
