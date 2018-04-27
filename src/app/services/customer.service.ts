import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestService, StorageService, CompanyService } from '.';
import { Endpoint } from '../enums/endpoint.enum';

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
}
