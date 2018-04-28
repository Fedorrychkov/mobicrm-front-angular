import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Endpoint } from '../enums/endpoint.enum';
import { CompanyService } from './company.service';
import { StorageService } from './storage.service';
import { RestService } from './rest.service';

@Injectable()
export class CustomerService {

  constructor(
    private router: Router,
    private restService: RestService,
    private storageService: StorageService,
    private companyService: CompanyService
  ) { }
  
  /**
   * get list of customers by company id 
   * @param id company id
   */
  getCustomers(id?: string): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.CUSTOMER_LIST, {id: id || this.companyService.companyId})
        .then( data => {
          res(data);
        }, err => {
          rej(err);
        });
    });
  }

  createCustomer(req): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.CUSTOMER_CREATE, {
        company_id: req.company_id || this.companyService.companyId,
        first_name: req.first_name,
        last_name: req.last_name,
        phone: req.phone,
        email: req.email,
        address: req.address,
        avatar: '',
        status: 'NEW',
      }).then( data => {
        res(data);
      }, err => {
        rej(err);
      });
    });
  }
}
