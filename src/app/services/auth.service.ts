import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';

import { Endpoint }        from '../enums/endpoint.enum';
import { RestService }     from './rest.service';
import { StorageService }  from './storage.service';

@Injectable()
export class AuthService {
  
  private _userId: Number;
  private _userRole: string;
  private _authToken: string;
  
  /**
   * get user id
   */
  get userId() {return this._userId}

  /**
   * set user id
   * @param id user id
   */
  set userId(id: Number) {this._userId = id}

  /**
   * get user role number
   */
  get userRole() {return this._userRole || this.storageService.get('mobicrm.user_role')}

  /**
   * set user role number
   * @param role number of role
   */
  set userRole(role: string) {this._userRole = role; this.storageService.set('mobicrm.user_role', role)}
  
  /**
   */
  get authToken() {return this._authToken}

  /**
   * @param token 
   */
  set authToken(token: string) {this._authToken = token}


  constructor(
    private router:Router,
    private restService:RestService,
    private storageService:StorageService
  ) { }
  
  /**
   * login method
   * @param login user login
   * @param password user password
   */
  login(login: String, password: String): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.USER_AUTH, { login: login, password: password})
        .then( (data) => {
          if (data.token) {
            this.storageService.set('mobicrm.auth_token', data.token);
            this.storageService.set('mobicrm.user_id', data.body.id);
            this.storageService.set('mobicrm.user_role', data.body.role);
            this.userId = data.body.id;
            this.userRole = data.body.role;
            this.authToken = data.token;
            this.router.navigate(['companies']);  
          }
          res(data);
        }, (err) => {
          rej(err);
      });
    })
  }

  /**
   * signup method for director
   * @param req director fields request
   */
  signup(req): Promise<any> {
    return new Promise((res, rej) => {
      this.restService.get(Endpoint.DIRECTOR_SIGNUP, {
        ...req
      }).then( data => {
        res(data);
      }, err => {
        rej(err);
      })
    })
  }
  /**
   * logout method, cleare localstorage and navigate to /auth
   */
  logout() {
    this.storageService.clear();
    this.router.navigate(['/auth']);
  }

}
