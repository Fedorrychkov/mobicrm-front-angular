import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';

import { Endpoint }        from '../enums/endpoint.enum';
import { RestService }     from './rest.service';
import { StorageService }  from './storage.service';
import { CompanyService } from './company.service';

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
  
  /**
   * 
   * @param res object
   */
  createOrder(req): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.ORDER_CREATE, {
        company_id: req.company_id || this.companyService.companyId,
        name: req.name,
        address: req.address,
        longitude: req.longitude,
        latitude: req.latitude,
        email: req.email,
        description: req.description,
        status: req.status || 'NEW',
        customer: {
          first_name: req.customer.first_name,
          last_name: req.customer.last_name,
          phone: req.customer.phone,
          address: req.customer.address
        }
      }).then( data => {
        res(data);
      }, err => {
        rej(err);
      });
    });
  }

  /**
   * 
   * @param req object
   */
  updateOrder(req): Promise<any> {
    return new Promise((res, rej)=> {
      this.restService.get(Endpoint.ORDER_UPDATE, {
        company_id: this.companyService.companyId,
        ...req,
      }).then( data => {
        res(data);
      }, err => {
        rej(err);
      });
    });
  }

  /**
   * get one order by id
   * @param id orderId
   */
  getOrder(id: string): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.ORDER_GET, {
        id: this.companyService.companyId,
        orderId: id
      }).then( data => {
        res(data);
      }, err => {
        rej(err);
      })
    })
  }

}
