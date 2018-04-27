import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';

import { Endpoint }        from '../enums/endpoint.enum';
import { RestService }     from './rest.service';
import { StorageService }  from './storage.service';

@Injectable()
export class CompanyService {
  private _companyId: Number;

  get companyId() {return this._companyId}
  set companyId(id: Number) {this._companyId = id}

  constructor(
    public router:Router,
    public restService:RestService,
    public storageService:StorageService
  ) { }

  /**
   * get list of company
   */
  getCompanies(): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.DIRECTOR_COMPANIES, {})
        .then( data => {
          res(data);
        }, err =>{
          rej(err);
        });
    });
  }

  /**
   * get company info by id
   * @param id company identificator
   */
  getCompany(id: Number): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.COMPANY_GET, {id: id})
        .then( data => {
          res(data);
        }, err =>{
          rej(err);
        });
    });
  }

  /**
   * 
   * @param req object - name, description and etc.
   */
  createCompany(req): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.COMPANY_CREATE, {
        name: req.name,
        description: req.description,
        tags: req.tags,
        address: req.address
      })
        .then( data => {
          res(data);
        }, err => {
          rej(err);
        });
    });
  }

  /**
   * 
   * @param req object - name, description and etc.
   */
  updateCompany(...req): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.COMPANY_UPDATE, {...req})
        .then( data => {
          res(data);
        }, err => {
          rej(err);
        });
    });
  }
}
