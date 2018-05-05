import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Endpoint } from '../enums/endpoint.enum';
import { CompanyService } from './company.service';
import { RestService }from './rest.service';
import { StorageService } from './storage.service';

@Injectable()
export class DirectorService {
  private _director: any[];
  get director() {return this._director}
  set director(director: any) {this._director = director}

  constructor(
    private router: Router,
    private restService: RestService,
    private storageService: StorageService
  ) { }

  /**
   * get director info
   */
  getDirector(): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.DIRECTOR_GET)
        .then( data => {
          this.director = data.body;
          res(data);
        }, err => {
          rej(err);
        });
    });
  }
}
