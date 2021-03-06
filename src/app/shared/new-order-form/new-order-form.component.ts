import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventService, AuthService, CompanyService, OrderService, CustomerService, GeolocationService, AddressMapService } from '../../services';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICustomer } from '../../interfaces/customer';
import { IOrder } from '../../interfaces/orders';

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
  public customerPhone: string;
  public customerFName: string;
  public customerLName: string;
  public customerEmail: string;
  public customerAddress: string;
  public errorMessage: string;
  public isLoading = false;
  public id: string;
  public fillCustomer = false;
  public isNewCustomer = false;
  public latitude: string;
  public longitude: string;
  public price: number = 0;

  public customer: ICustomer = {
    id: '',
    company_id: '',
    phone: '',
    first_name: '',
    last_name: '',
    address: ''
  };
  public order: IOrder = {
    name: '',
    address: '',
    description: '',
    status: 'NEW',
    customer: this.customer
  };

  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private eventService: EventService,
    private orderService: OrderService,
    private customerService: CustomerService,
    private router: Router,
    private geolocationService: GeolocationService,
    private addressMapService: AddressMapService,
    public dialogRef: MatDialogRef<NewOrderFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  onClose(): void {
    this.dialogRef.close();
  }

  createOrder(req, valid: boolean) { // TODO: Дописать возможность выбора исполнителя. Исполнитель может быть назначен сразу или позже
    if(!valid) return;
    req.company_id = this.data.company_id;
    if (!req.price) req.price = 0;
    const newReq = this.fillCreateRequest(req);
    newReq.longitude = this.longitude;
    newReq.latitude = this.latitude;
    this.orderService.createOrder(newReq)
      .then( (data) => {
        data.status === 400 ? 
          this.eventService.broadcast('notification', {type: 'error', message: data.body.errorText})
          : this.dialogRef.close();
        this.eventService.broadcast('notification', {type: 'success', message: 'Новый заказ создан!'});
        this.eventService.broadcast('order-list-update');
      });
  }
  
  getAddresses(event) {
    console.log(this.address);
    this.geolocationService.getCoordsByString(this.address)
      .then( res => {
        console.log(res);
          this.addressMapService.getCoordsByPlaceId(res[0].id)
            .then( (coords: any) => {
              console.log(coords);
              this.longitude = coords.lng
              this.latitude = coords.lat;
            });
      });
  }

  copyAddress() {
    this.address = this.customerAddress;
  }

  checkCustomer(req) {
    if (!this.customerPhone) {
      this.removeCustomerFields();
      return;
    }
    this.eventService.broadcast('notification', {type: 'warning', message: 'Ведется поиск клиента по телефону'});
    this.customerService.checkCustomer(req.customerPhone)
      .then( res => {
        this.fillCustomer = true;
        if (res.status === 200) {
          this.eventService.broadcast('notification', {type: 'success', message: 'Такой клиент есть!'});
          this.isNewCustomer = false;
          this.fillCustomerFields(res.body);
          return;
        }
        this.isNewCustomer = true;
        this.eventService.broadcast('notification', {type: 'success', message: 'О! Новый клиент? Отлично!'});
      });
  }
  
  fillCreateRequest(req): IOrder {
    let newReq = this.order;
    newReq.name = this.name;
    newReq.address = this.address;
    newReq.description = this.description;
    newReq.customer.phone = this.customerPhone;
    newReq.customer.first_name = this.customerFName;
    newReq.customer.last_name = this.customerLName;
    newReq.customer.email = this.customerEmail;
    newReq.customer.address = this.customerAddress;
    return newReq;
  }

  fillCustomerFields(res: ICustomer) {
    this.customerAddress = res.address;
    this.customerEmail = res.email;
    this.customerFName = res.first_name;
    this.customerLName = res.last_name;
    this.address = res.address;
  }
  
  removeCustomerFields() {
    this.customerAddress = '';
    this.customerEmail = '';
    this.customerFName = '';
    this.customerLName = '';
  }

  ngOnInit() {
    this.newOrderForm = this.fb.group({
      name: [this.name, [ Validators.required]],
      description: [this.description],
      address: [this.address, [ Validators.required]],
      customerPhone: [this.customerPhone, [ Validators.required]],
      customerFName: [this.customerFName],
      customerLName: [this.customerLName],
      customerEmail: [this.customerEmail],
      customerAddress: [this.customerAddress, [ Validators.required]],
      price: [this.price, [Validators.required]],
    });
  }

}
