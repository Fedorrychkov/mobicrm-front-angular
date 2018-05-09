import { Component, OnInit } from '@angular/core';
import { EventService, CompanyService, OrderService } from '../../../../../../services';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from '../../../../../../interfaces/orders';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  private id: string;
  public isLoaded = false;
  public order: IOrder;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private companyService: CompanyService,
    private orderService: OrderService
  ) { }
  
  getOrder() {
    this.orderService.getOrder(this.id)
      .then( res => {
        this.order = res.body;
        this.isLoaded = true;
        console.log(res);
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.eventService.broadcast('app-header-back', {link: `companies/${this.companyService.companyId}/orders`});
    this.getOrder();
  }

}
