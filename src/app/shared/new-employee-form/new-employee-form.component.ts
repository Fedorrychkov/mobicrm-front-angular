import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventService, AuthService, CompanyService, OrderService, EmployeeService } from '../../services';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.scss']
})
export class NewEmployeeFormComponent implements OnInit {

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
    public router: Router,
    public dialogRef: MatDialogRef<NewEmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  onClose(): void {
    this.dialogRef.close();
  }

  createEmployee(data) {
    console.log(data);
    // this.orderService.createOrder(data)
    //   .then( (data) => {
    //     // this.router.navigate([`companies/${data.id}/dashboard`]);
    //     // this.dialogRef.close();
    //   });
  }
  ngOnInit() {
    this.roleList = [
      {value: '2', name: 'Ст. менеджер'},
      {value: '3', name: 'Менеджер'},
      {value: '4', name: 'Монтажник'},
    ];
    this.newEmployeeForm = this.fb.group({
      login: [this.login],
      password: [this.password],
      role: [this.role],
      status: [this.status],
      first_name: [this.first_name],
      last_name: [this.last_name],
      phone: [this.phone],
      email: [this.email],
      address: [this.address],
    });
  }

}
