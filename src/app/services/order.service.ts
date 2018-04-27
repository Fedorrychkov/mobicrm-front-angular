import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';

import { Endpoint }        from '../enums/endpoint.enum';
import { RestService }     from './rest.service';
import { StorageService }  from './storage.service';
import { CompanyService } from '.';

@Injectable()
export class OrderService {

  constructor(
    private router: Router,
    private restService: RestService,
    private storageService: StorageService,
    private companyService: CompanyService
  ) { }

  /**
   * get orders list by company id
   * @param id company id
   */
  getOrders(id?: string): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.ORDER_LIST, {id: id || this.companyService.companyId})
        .then(data => {
          res(data);
        }, err => {
          rej(err);
        });
    });
  }

}
