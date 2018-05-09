import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';

import { Endpoint }        from '../enums/endpoint.enum';
import { RestService }     from './rest.service';
import { StorageService }  from './storage.service';

@Injectable()
export class CompanyService {
  private _companyId: string;

  /**
   * Get company id from variable or storageService
   */
  get companyId() {return this._companyId || this.storageService.get('mobicrm.company_id')}

  /**
   * Set company id in variable or and storage service
   */
  set companyId(id: string) {
    this.storageService.set('mobicrm.company_id', id);
    this._companyId = id;
  }

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
  getCompany(id?: string): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.COMPANY_GET, {id: id || this.companyId})
        .then( data => {
          this.companyId = data.body.id;
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
