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
        {value: 'REPEATED_CALL', name: 'Повторный звонок'},
        {value: 'NEW', name: 'Новый заказ'},
        {value: 'CUSTOMER_THINK', name: 'Клиент думает'},
        {value: 'TEST_DRIVE', name: 'Тестовый выезд'},
        {value: 'INSTALLATION', name: 'Монтаж/Настройка'},
        {value: 'DAMAGE', name: 'Повреждение'},
        {value: 'DONE', name: 'Завершено'},
        {value: 'NOT_RELEVANT', name: 'Не выполнимый'},
      ];
      this.updateOrderForm = this.fb.group({
        status: [this.status],
      });
    }

}
