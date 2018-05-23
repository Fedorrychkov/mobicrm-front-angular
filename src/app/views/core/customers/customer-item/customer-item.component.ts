import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../../../interfaces/customer';
import { ActivatedRoute } from '@angular/router';
import { EventService, CompanyService, CustomerService } from '../../../../services';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit {
  private id: string;
  public customer: ICustomer;
  public isLoaded = false;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private companyService: CompanyService,
    private customerService: CustomerService
  ) { }
  
  getCustomer() {
    this.customerService.getCustomer(this.id)
      .then( res => {
        this.customer = res.body;
        this.isLoaded = true;
        console.log(res);
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.eventService.broadcast('app-header-back', {link: `customers`});
    this.getCustomer();
  }
}
