import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../../services';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .then(data => {
        console.log(data);
      });
  }

}
