import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventService, AuthService, CompanyService, OrderService } from '../../services';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order-form',
  templateUrl: './new-order-form.component.html',
  styleUrls: ['./new-order-form.component.scss']
})
export class NewOrderFormComponent implements OnInit{
  public newOrderForm: FormGroup;
  public name: string;
  public address: string;
  public description: string;
  public customerPhone: string[];
  public errorMessage: string;
  public isLoading = false;
  public id: string;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public eventService: EventService,
    public orderService:OrderService,
    public router: Router,
    public dialogRef: MatDialogRef<NewOrderFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  onClose(): void {
    this.dialogRef.close();
  }

  createOrder(data) {
    console.log(data);
    // this.orderService.createOrder(data)
    //   .then( (data) => {
    //     // this.router.navigate([`companies/${data.id}/dashboard`]);
    //     // this.dialogRef.close();
    //   });
  }
  ngOnInit() {
    this.newOrderForm = this.fb.group({
      name: [this.name],
      description: [this.description],
      address: [this.address],
      customerPhone: [this.customerPhone]
    });
  }

}

// {
// 	"company_id": 1,
// 	"name": "Test Order",
// 	"address": "г. Казань ул. Кремлёвская д. 35 кв 38",
// 	"longitude": "55.792414",
// 	"latitude": "49.120081",
// 	"description": "Заказчик хочет провести замер окон",
// 	"status": "NEW",
// 	"customer": {
// 		"first_name": "RyR",
// 		"phone": "+723121120121",
// 		"email": "ffffff@ff.ru"
// 	}
// }