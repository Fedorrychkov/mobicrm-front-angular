import { Component, OnInit } from '@angular/core';
import { IOrder, IOrders } from '../../../../interfaces/orders';
import { OrderService, CompanyService, EventService } from '../../../../services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  private id: string;
  public isEditMode = false;
  public isLoaded = false;
  public order: IOrders;
  public orderCoords: any = {
    latitude: 0,
    longitude: 0
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private companyService: CompanyService,
    private orderService: OrderService
  ) { }
  
  getOrder() {
    this.orderService.getOrder(this.id)
      .then( res => {
        this.order = res.body;
        this.isLoaded = true;
        let order: IOrder = res.body.order
        this.orderCoords.longitude = parseFloat(order.longitude);
        this.orderCoords.latitude = parseFloat(order.latitude);
      });
  }
  
  gotoCustomer() {
    this.router.navigate([`customers/${this.order.order.customer_id}`]);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.eventService.broadcast('app-header-back', {link: `orders`});
    this.getOrder();
  }
}
