import { Component, OnInit } from '@angular/core';
import { OrderService, EventService, CustomerService, CompanyService } from '../../../../../services';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  private companyId: string;
  public orders: any;
  public isLoaded = false;

  constructor(
    private customerService: CustomerService,
    private eventService: EventService,
    private companyService: CompanyService,
    private orderService: OrderService
  ) { }

  getOrders() {
    this.orderService.getOrders(this.companyId)
      .then( data => {
        console.log(data);
        this.orders = data;
        this.isLoaded = true;
      });
  }
  ngOnInit() {
    this.companyId = this.companyService.companyId;
    this.getOrders();
    this.eventService.on('order-list-update').subscribe( () => {
      this.getOrders();
    });
  }

}
