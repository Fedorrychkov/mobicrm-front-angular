import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';

import { Endpoint }        from '../enums/endpoint.enum';
import { RestService }     from './rest.service';
import { StorageService }  from './storage.service';

@Injectable()
export class AuthService {

  constructor(
    public router:Router,
    public restService:RestService,
    public storageService:StorageService
  ) { }
  
  login(login: String, password: String): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.DIRECTOR_AUTH, { login: login, password: password})
        .then( (data) => {
          this.storageService.set( 'mobicrm.auth_token', data.token );
          this.router.navigate(['dashboard']);
          res(data);
        }, (err) => {
          rej(err);
      });
    })
  }

}
