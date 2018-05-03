import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UpdateOrderFormComponent } from '../../../../../../shared';
import { IOrders, IResOrders, IOrder } from '../../../../../../interfaces/orders';
import { CustomerService, OrderService } from '../../../../../../services';
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  public _orders: IResOrders;
  public isLoaded = false;
  public orderList;

  // public displayedColumns = ['phone', 'name', 'created'];

  @Input()
  /**
   * get list of companies
   */
  get orders() {
    return this._orders;
  }

  /**
   * set list of companies
   * @param list list of companies
   */
  set orders(list: IResOrders) {
    this._orders = list;
    this.isLoaded = true;
  }
  constructor(
    private customerService: CustomerService,
    private orderService: OrderService,
    public dialog: MatDialog
  ) { }
  
  updateStatus(item: IOrder) {
    // const status = "OLD"
    // this.orderService.updateOrder({id: id, status: status})
    //   .then( data => {
    //     console.log(data);
    //     this._orders.body.forEach((item: IOrders, index) => {
    //       if (item.order.id === id) item.order.status = status;
    //     });
    //   });
    let dialogRef = this.dialog.open(UpdateOrderFormComponent, {
      width: '600px',
      data: {order: item}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }


}
