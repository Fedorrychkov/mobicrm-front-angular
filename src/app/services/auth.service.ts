import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';

import { Endpoint }        from '../enums/endpoint.enum';
import { RestService }     from './rest.service';
import { StorageService }  from './storage.service';

@Injectable()
export class AuthService {
  
  private _userId: Number;
  private _userRole: Number;
  
  get userId() {return this._userId}
  set userId(id: Number) {this._userId = id}

  get userRole() {return this._userRole}
  set userRole(role: Number) {this._userRole = role}

  constructor(
    public router:Router,
    public restService:RestService,
    public storageService:StorageService
  ) { }
  
  login(login: String, password: String): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.DIRECTOR_AUTH, { login: login, password: password})
        .then( (data) => {
          if (data.token) {
            this.storageService.set('mobicrm.auth_token', data.token);
            this.storageService.set('mobicrm.user_id', data.body.id);
            this.storageService.set('mobicrm.user_role', data.body.role);
            this.userId = data.body.id;
            this.userRole = data.body.role;
            this.router.navigate(['dashboard']);  
          }
          res(data);
        }, (err) => {
          rej(err);
      });
    })
  }

  logout() {
    this.storageService.clear();
    this.router.navigate(['/auth']);
  }

}
