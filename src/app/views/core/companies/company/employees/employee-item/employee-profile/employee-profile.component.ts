import { Component, OnInit } from '@angular/core';
import { EmployeeService, UserService, CompanyService } from '../../../../../../../services';
import { IUser } from '../../../../../../../interfaces/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {
  public isLoaded: boolean = false;
  public isEditMode: boolean = false;
  public profile: IUser;
  public currency: string;
  
  public id: number;
  public first_name: string;
  public last_name: string;
  public login: string;
  public email: string;
  public phone: string;
  public status: string;
  public role: string;
  public company_id: number;
  public rate_per_month: number = 0;
  public rate_per_order: number = 0;

  public roleList: any[];
  public statusList: any[];
  public currencyList: any[];

  public updateProfileForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private userService: UserService,
    private companyService: CompanyService,
    private employeeService: EmployeeService
  ) { }
  
  getEmployee(id: string) {
    this.employeeService.getEmployee(id)
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
        this.role = res.role;
        this.status = res.status;
        this.rate_per_order = res.rate_per_order;
        this.rate_per_month = res.rate_per_month || 0;
        this.company_id = res.company_id;
        this.isLoaded = true;
      });
    this.companyService.getCompany()
      .then( res => {
        this.currency = res.body.currency || this.companyService.currency;
      });
  }

  updateprofile(data, valid: boolean) {
    if (!valid) return;
    if (!data.company_id) data.company_id = this.company_id;
    if (!data.id) data.id = this.id;
    this.employeeService.updateEmployee(data)
      .then( res => {
        console.log(res);
        this.isLoaded = false;
        this.isEditMode = false;
        this.getEmployee(this.employeeService.employeeId);
      }) 
  }

  ngOnInit() {
    this.currencyList = [
      {value: 'RUB', name: 'руб.'}
    ];
    this.statusList = [
      {value: 'ACTIVE', name: 'Активный'},
      {value: 'DEACTIVE', name: 'Не активный'}
    ];
    this.roleList = [
      {id: '2', name: 'Ст. менеджер'},
      {id: '3', name: 'Менеджер'},
      {id: '4', name: 'Монтажник'},
    ];
    this.getEmployee(this.employeeService.employeeId);
    this.updateProfileForm = this.fb.group({
      first_name: [this.first_name, [Validators.maxLength(60)]],
      last_name: [this.last_name, [Validators.maxLength(60)]],
      login: [this.login, [Validators.required, Validators.maxLength(60)]],
      email: [this.email, [Validators.required, Validators.email, Validators.maxLength(100)]],
      phone: [this.phone, [Validators.required, Validators.maxLength(60)]],
      role: [this.role, [Validators.required]],
      status: [this.status],
      rate_per_month: [this.rate_per_month, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      rate_per_order: [this.rate_per_order, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      id: [this.id],
      company_id: [this.company_id]
    });
  }

}
