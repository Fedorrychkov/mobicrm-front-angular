import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventService, AuthService, CompanyService, OrderService } from '../../services';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer-form',
  templateUrl: './new-customer-form.component.html',
  styleUrls: ['./new-customer-form.component.scss']
})
export class NewCustomerFormComponent implements OnInit {

  public newCustomerForm: FormGroup;
  public first_name: string;
  public last_name: string;
  public phone: string;
  public email: string;
  public address: string;
  public errorMessage: string;
  public isLoading = false;
  public id: string;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public eventService: EventService,
    public orderService:OrderService,
    public router: Router,
    public dialogRef: MatDialogRef<NewCustomerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  onClose(): void {
    this.dialogRef.close();
  }

  createCustomer(data) {
    console.log(data);
    // this.orderService.createOrder(data)
    //   .then( (data) => {
    //     // this.router.navigate([`companies/${data.id}/dashboard`]);
    //     // this.dialogRef.close();
    //   });
  }
  ngOnInit() {
    this.newCustomerForm = this.fb.group({
      first_name: [this.first_name],
      last_name: [this.last_name],
      phone: [this.phone],
      email: [this.email],
      address: [this.address],
    });
  }

}
