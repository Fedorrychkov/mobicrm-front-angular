import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { UpdateOrderFormComponent } from '../../../../shared';
import { IOrder, IResOrders } from '../../../../interfaces/orders';
import { OrderService, CustomerService } from '../../../../services';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

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
