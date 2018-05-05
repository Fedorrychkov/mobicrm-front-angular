import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventService, AuthService, CompanyService, OrderService, EmployeeService, DirectorService } from '../../services';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.scss']
})
export class NewEmployeeFormComponent implements OnInit {
  public director: any;
  public passwordShow = false;
  public newEmployeeForm: FormGroup;
  public login: string;
  public password: string;
  public role: string;
  public status: string;
  public first_name: string;
  public last_name: string;
  public phone: string;
  public email: string;
  public address: string;
  public errorMessage: string;
  public isLoading = false;
  public id: string;

  public roleList: any[];

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public eventService: EventService,
    public employeeService: EmployeeService,
    private directorService: DirectorService,
    public router: Router,
    public dialogRef: MatDialogRef<NewEmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  onClose(): void {
    this.dialogRef.close();
  }
  
  showPassword() {
    this.passwordShow = !this.passwordShow;
  }

  createEmployee(data, valid: boolean) {
    if(!valid) return;
    data.login = data.login + '@' + this.director.login;
    this.employeeService.createEmployee(data)
      .then( res => {
        this.eventService.broadcast('notification', {type: 'success', message: 'Новый сотрудник создан!'});
        this.dialogRef.close();
        this.eventService.broadcast('employee-list-update');
      });
  }
  ngOnInit() {
    this.roleList = [
      {id: '2', name: 'Ст. менеджер'},
      {id: '3', name: 'Менеджер'},
      {id: '4', name: 'Монтажник'},
    ];
    this.director = this.directorService.director;
    this.newEmployeeForm = this.fb.group({
      login: [this.login, [ Validators.required]],
      password: [this.password, [ Validators.required]],
      role: [this.role, [ Validators.required]],
      status: [this.status],
      first_name: [this.first_name],
      last_name: [this.last_name],
      phone: [this.phone, [ Validators.required]],
      email: [this.email, [ Validators.required, Validators.email]],
      address: [this.address],
    });
  }

}
