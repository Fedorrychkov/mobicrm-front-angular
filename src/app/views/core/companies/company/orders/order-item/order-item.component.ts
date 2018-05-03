import { Component, OnInit } from '@angular/core';
import { EventService, CompanyService } from '../../../../../../services';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  private id: string;
  constructor(
    private eventService: EventService,
    private companyService: CompanyService
  ) { }
  
  getOrder() {
    this.eventService.broadcast('app-header-back', {link: `companies/${this.id}/orders`});
  }

  ngOnInit() {
    this.id = this.companyService.companyId;
    this.getOrder();
  }

}
