import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestService, StorageService, CompanyService } from '.';
import { Endpoint } from '../enums/endpoint.enum';

@Injectable()
export class EmployeeService {

  constructor(
    private router: Router,
    private restService: RestService,
    private storageService: StorageService,
    private companyService: CompanyService
  ) { }
  
  /**
   * get list of employee by company id 
   * @param id company id
   */
  getEmployees(id?: string): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.EMPLOYEE_LIST, {id: id || this.companyService.companyId})
        .then( data => {
          res(data);
        }, err => {
          rej(err);
        });
    });
  }
}