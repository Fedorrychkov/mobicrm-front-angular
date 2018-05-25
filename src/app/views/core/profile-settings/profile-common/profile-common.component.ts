import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../../interfaces/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService, CompanyService } from '../../../../services';

@Component({
  selector: 'app-profile-common',
  templateUrl: './profile-common.component.html',
  styleUrls: ['./profile-common.component.scss']
})
export class ProfileCommonComponent implements OnInit {
  public isLoaded: boolean = false;
  public isEditMode: boolean = false;
  public profile: IUser;
  public currencyList: any[];
  public currency: string;
  
  public id: number;
  public first_name: string;
  public last_name: string;
  public login: string;
  public email: string;
  public phone: string;
  public status: string;
  public role: string;

  public updateProfileForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private userService: UserService,
    private companyService: CompanyService
  ) { }
  
  getProfile() {
    this.currencyList = [
      {value: 'RUB', name: 'руб.'}
    ];

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
        this.isLoaded = true;
      });
    this.companyService.getCompany()
      .then( res => {
        this.currency = res.body.currency || this.companyService.currency;
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
      id: [this.id]
    });
  }

}
