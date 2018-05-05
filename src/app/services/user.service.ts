import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Endpoint } from '../enums/endpoint.enum';
import { CompanyService } from './company.service';
import { RestService }from './rest.service';
import { StorageService } from './storage.service';

@Injectable()
export class UserService {

  constructor(
    private router: Router,
    private restService: RestService,
    private storageService: StorageService
  ) { }

  /**
   * get roles
   */
  getRoles(): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.USER_ROLES)
        .then( data => {
          res(data);
        }, err => {
          rej(err);
        });
    });
  }
}
