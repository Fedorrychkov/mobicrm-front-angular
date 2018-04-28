import { Component, OnInit, Input } from '@angular/core';
import { ICustomers } from '../../../../../../interfaces/customer';
// import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public _customers: ICustomers;
  public isLoaded = false;

  public displayedColumns = ['phone', 'name', 'created'];

  @Input()
  /**
   * get list of companies
   */
  get customers() {
    return this._customers;
  }

  /**
   * set list of companies
   * @param list list of companies
   */
  set customers(list: ICustomers) {
    this._customers = list;
    this.isLoaded = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
