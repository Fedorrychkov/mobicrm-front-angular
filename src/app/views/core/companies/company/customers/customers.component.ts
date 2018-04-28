import { Component, OnInit } from '@angular/core';
import { CustomerService, EventService, CompanyService } from '../../../../../services';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  private companyId: string;

  constructor(
    private customerService: CustomerService,
    private eventService: EventService,
    private companyService: CompanyService
  ) { }
  getCustomers() {
    this.customerService.getCustomers(this.companyId)
      .then( data => {
        console.log('customers -->', data);
      });
  }
  ngOnInit() {
    this.companyId = this.companyService.companyId;
    this.getCustomers();
    this.eventService.on('customer-list-update').subscribe( () => {
      this.getCustomers();
    });
  }

}
