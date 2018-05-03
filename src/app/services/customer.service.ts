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

  /**
   * 
   * @param req is request like IOrder interface
   */
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

  /**
   * 
   * @param phone is phone number of customer
   */
  checkCustomer(phone: string): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.CUSTOMER_PHONE, {
        id: this.companyService.companyId,
        phone: phone
      }).then( data => {
          res(data);
        }, err => {
          rej(err);
        });
    });
  }


  /**
   * get customer by company id 
   * @param customerId customer id
   * @param id company id
   */
  getCustomer(customerId: string, id?: string): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.CUSTOMER_GET, {
        id: id || this.companyService.companyId,
        customerId: customerId
      }).then( data => {
          res(data);
        }, err => {
          rej(err);
        });
    });
  }

}
