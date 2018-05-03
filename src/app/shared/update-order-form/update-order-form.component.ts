import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventService, CustomerService, OrderService } from '../../services';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IOrder, IOrders } from '../../interfaces/orders';

@Component({
  selector: 'app-update-order-form',
  templateUrl: './update-order-form.component.html',
  styleUrls: ['./update-order-form.component.scss']
})
export class UpdateOrderFormComponent implements OnInit {
  
  public updateOrderForm: FormGroup;
  public order: IOrders;
  public status: string;
  public statusList: any[];

  constructor(
    public fb: FormBuilder,
    public eventService: EventService,
    public customerService: CustomerService,
    public orderService: OrderService,
    public router: Router,
    public dialogRef: MatDialogRef<UpdateOrderFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  
    onNoClick(): void {
      this.dialogRef.close();
    }
    
    onClose(): void {
      this.dialogRef.close();
    }
  
    updateOrder(req, valid: boolean) {
      // if(!valid) return;
      console.log(req);
      this.orderService.updateOrder({id: this.order.order.id, ...req})
        .then( res => {
          console.log(res);
          res.status === 400 ? 
            this.eventService.broadcast('notification', {type: 'error', message: res.body.errorText})
            : this.dialogRef.close();
          this.eventService.broadcast('order-list-update');
        }); // TODO: Нужно уменьшить количество обращений на сервер, сделать обновление статуса заказа без перезагрузки данных.
    }
    ngOnInit() {
      this.order = this.data.order;
      this.status = this.data.order.order.status;
      this.statusList = [
        {value: 'OLD', name: 'Устаревший'}, 
        {value: 'NEW', name: 'Новый заказ'},
        {value: 'IN PROGRESS', name: 'В процессе'},
        {value: 'DONE', name: 'Завершено'}
      ];
      console.log(this.data.order, this.status);
      this.updateOrderForm = this.fb.group({
        status: [this.status],
        // last_name: [this.last_name],
        // phone: [this.phone, [ Validators.required]],
        // email: [this.email, [ Validators.email]],
        // address: [this.address, [ Validators.required]],
      });
    }

}
