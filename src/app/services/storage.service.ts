import { Injectable }  from '@angular/core';
import storage         from 'local-storage-fallback';

@Injectable()
export class StorageService {

  constructor() { }
  set(key:string, data:any):void {
    data = JSON.stringify(data);
    storage.setItem(key, data);
  }

  get(key:string):string|null {
    return JSON.parse(storage.getItem(key));
  }

  remove(key:string):void {
    storage.removeItem(key);
  }

  clear():void {
    storage.clear();
  }

  has(key:string):boolean {
    return this.get(key) ? true : false;
  }
}