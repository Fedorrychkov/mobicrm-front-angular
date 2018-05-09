import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Endpoint } from '../enums/endpoint.enum';
import { CompanyService } from './company.service';
import { RestService }from './rest.service';
import { StorageService } from './storage.service';

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

  /**
   * create new employee
   * @param req look at employee interface
   */
  createEmployee(req): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.EMPLOYEE_CREATE, {
        company_id: this.companyService.companyId,
        ...req
      }).then( data => {
        res(data);
      }, err => {
        rej(err);
      })
    })
  }

  /**
   * get one employee by id
   * @param id employeeId
   */
  getEmployee(id: string): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.EMPLOYEE_GET, {
        id: this.companyService.companyId,
        employeeId: id
      }).then( data => {
        res(data);
      }, err => {
        rej(err);
      })
    })
  }
}