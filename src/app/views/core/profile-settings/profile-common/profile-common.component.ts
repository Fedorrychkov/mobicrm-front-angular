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
  public company_id: number;
  public first_name: string;
  public last_name: string;
  public login: string;
  public email: string;
  public phone: string;
  public status: string;
  public role: string;

  public roleList: any[];

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
    this.roleList = [
      {id: '1', name: 'Директор'},
      {id: '2', name: 'Ст. менеджер'},
      {id: '3', name: 'Менеджер'},
      {id: '4', name: 'Монтажник'},
    ];
    this.userService.getUser()
      .then( res => {
        this.profile = res.body;
        console.log(res.body);
        return res.body;
      }).then( res => {
        this.id = res.id
        this.company_id = res.company_id;
        this.first_name = res.first_name;
        this.last_name = res.last_name;
        this.email = res.email;
        this.login = res.login;
        this.phone = res.phone;
        this.role = res.role;
        this.isLoaded = true;
      });
    this.companyService.getCompany()
      .then( res => {
        this.currency = res.body.currency || this.companyService.currency;
      });
  }

  updateprofile(req, valid: boolean) {
    if(!valid) return;
    if(!req.id) req.id = this.id;
    if(!req.company_id) req.company_id = this.company_id;
    this.userService.updateUser(req)
      .then( res => {
        console.log(res);
        this.isLoaded = false;
        this.isEditMode = false;
        this.getProfile();
      }) 
  }

  ngOnInit() {
    this.getProfile();
    this.updateProfileForm = this.fb.group({
      first_name: [this.first_name ],
      last_name: [this.last_name ],
      login: [this.login, [Validators.required]],
      email: [this.email, [Validators.required, Validators.email]],
      phone: [this.phone, [Validators.required]],
      status: [this.status],
      id: [this.id],
      company_id: [this.company_id]
    });
  }

}
