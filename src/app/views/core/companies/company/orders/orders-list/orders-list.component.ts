import { Component, OnInit, Input } from '@angular/core';
import { IOrders } from '../../../../../../interfaces/orders';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  public _orders: IOrders;
  public isLoaded = false;

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
  set orders(list: IOrders) {
    this._orders = list;
    this.isLoaded = true;
  }
  constructor() { }

  ngOnInit() {
  }


}
