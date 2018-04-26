import { Injectable } from '@angular/core';
import { Http,
         Headers,
         Response,
         RequestOptions } from '@angular/http';
import { environment } from './../../environments/environment';
import { Endpoint } from '../enums/endpoint.enum';
import { KeyVal, RequestParams } from '../interfaces/rest';

@Injectable()
export class RestService {
  public apiUrl: string;

  public serialize(obj, prefix?: any) {
    const str = [];
    for (const p in obj) {
        if (obj.hasOwnProperty(p)) {
            const k = prefix ? prefix : p, v = obj[p];
            str.push(typeof v === 'object' ?
                                    this.serialize(v, k) :
                                    `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
        }
    }
    return str.join('&');
}

  constructor(
    public http: Http
  ) {
    this.apiUrl = environment.apiUrl;
  }

  request<T>(params: RequestParams, endpoint: Endpoint): Promise<Response> {
    return new Promise<Response>((res, rej) => {
      if(!environment.production) {
        var date:any = new Date();
        var start:string = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        console.log(`${start}: Request [${params.method}] ${params.url}`);
        console.log(params);
      }
      this.http.request(params.url, {
        method: params.method,
        headers: params.headers,
        body: params.body,
      })
      .subscribe((data: Response) => {
        if (data.status === 204 && data.text() === '') {
          res();
        } else {
          try {
            if (data.text() !== 'OK') {
                if ( /^application\/vnd\./.test(data.headers.get('content-type')) ) {
                    res(data);
                } else {
                    res(JSON.parse(data.text()));
                }
              } else {
                  res();
              }
            } catch (e) {
              rej(e);
            }
          }
        }, (err) => {
          rej(err);
      });
    });
  }
  get<T>(endpoint: Endpoint, data?: any, headers?: KeyVal[]): Promise<any> {
    const reqParams = this.paramsByEndpoint(endpoint);
    if (headers) {
      headers.forEach((h) => {
        if (reqParams.headers.has(h.key)) {
          reqParams.headers.set(h.key, h.val);
        } else {
          reqParams.headers.append(h.key, h.val);
        }
      });
    }
    const results = [];
    const re = /{([^}]+)}/g;
    let text;

    while (text = re.exec(reqParams.url)) {
        results.push(text[1]);
    }

    for (let i = 0; i < results.length; i++) {
        if (data[results[i]]) {
            reqParams.url = reqParams.url.replace(`{${results[i]}}`, data[results[i]]);
        } else {
            reqParams.url = reqParams.url.replace(`/{${results[i]}}`, '');
        }
    }

    if (data) {
        results.forEach( (item) => {
            if (data.hasOwnProperty(item)) {
                delete data[item];
            }
        });

        this.paramsBody(reqParams, data);
    }

    return this.request<T>(reqParams, endpoint);
  }
  paramsBody( params: RequestParams, data: any ): RequestParams {
    if ( ['get', 'delete'].indexOf(params.method) !== -1 ) {
        const str = this.serialize(data);
        if (str) {
            params.url = `${params.url}?${str}`;
        }
    } else {
        params.body = JSON.stringify(data);
    }
    return params;
  }
  paramsByEndpoint( endpoint: Endpoint ): RequestParams {
    let params: RequestParams;
    const headers: Headers = new Headers();

    switch (endpoint) {
      case Endpoint.DIRECTOR_AUTH:
        params = {
            url: 'director/login',
            method: 'post'
        };
        break;
      case Endpoint.DIRECTOR_SIGNUP:
        params = {
            url: 'director',
            method: 'post'
        };
        break;
      case Endpoint.DIRECTOR_UPDATE:
          params = {
              url: 'director',
              method: 'put'
          };
          break;
      case Endpoint.DIRECTOR_COMPANIES:
          params = {
              url: 'director/companies',
              method: 'get'
          };
          break;
      case Endpoint.COMPANY_CREATE:
          params = {
              url: 'company',
              method: 'post'
          };
          break;
      case Endpoint.COMPANY_UPDATE:
          params = {
              url: 'company',
              method: 'put'
          };
          break;
      case Endpoint.COMPANY_GET:
          params = {
              url: 'company/:id',
              method: 'get'
          };
          break;
      case Endpoint.ORDER_CREATE:
          params = {
              url: 'company/orders',
              method: 'post'
          };
          break;
      case Endpoint.ORDER_UPDATE:
          params = {
              url: 'company/orders',
              method: 'put'
          };
          break;
      case Endpoint.ORDER_LIST:
          params = {
              url: 'company/:id/orders',
              method: 'get'
          };
          break;
      case Endpoint.ORDER_GET:
          params = {
              url: 'company/:id/orders/:orderId',
              method: 'get'
          };
          break;
      case Endpoint.CUSTOMER_CREATE:
          params = {
              url: 'company/customers',
              method: 'post'
          };
          break;
      case Endpoint.CUSTOMER_UPDATE:
          params = {
              url: 'company/customers',
              method: 'put'
          };
          break;
      case Endpoint.CUSTOMER_LIST:
          params = {
              url: 'company/:id/customers',
              method: 'get'
          };
          break;
      case Endpoint.CUSTOMER_PHONE:
          params = {
              url: 'company/:id/customers/phone/:phone',
              method: 'get'
          };
          break;
      case Endpoint.CUSTOMER_GET:
          params = {
              url: 'company/:id/customers/:customerId',
              method: 'get'
          };
          break;
      case Endpoint.EMPLOYEE_CREATE:
          params = {
              url: 'company/employees',
              method: 'post'
          };
          break;
      case Endpoint.EMPLOYEE_UPDATE:
          params = {
              url: 'company/employees',
              method: 'put'
          };
          break;
      case Endpoint.EMPLOYEE_LIST:
          params = {
              url: 'company/:id/employees',
              method: 'get'
          };
          break;
      case Endpoint.EMPLOYEE_GET:
          params = {
              url: 'company/:id/employees/:employeeId',
              method: 'get'
          };
          break;
      default:
        break;
    }
    params.url = this.apiUrl + params.url;

    if ( ['post', 'put', 'patch'].indexOf(params.method) !== -1 ) {
        headers.append('Content-Type', 'application/json');
    }
    params.headers = headers;
    return params;
  }
}