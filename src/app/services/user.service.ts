import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Endpoint } from '../enums/endpoint.enum';
import { CompanyService } from './company.service';
import { RestService }from './rest.service';
import { StorageService } from './storage.service';

@Injectable()
export class UserService {

  public director = 1;
  public seniorManager = 2;
  public manager = 3;
  public worker = 4;

  private _user: any[];
  get user() {return this._user}
  set user(user: any) {this._user = user}

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

  /**
   * get user info
   */
  getUser(): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.USER_INFO)
        .then( data => {
          this.user = data.body;
          res(data);
        }, err => {
          rej(err);
        });
    });
  }
}
