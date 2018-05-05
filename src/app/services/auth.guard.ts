import { Injectable }               from '@angular/core';
import { Router }                   from '@angular/router';
import { CanActivate,
         CanActivateChild,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }      from '@angular/router';

import { StorageService }           from './storage.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor (
        public router: Router,
        public storageService: StorageService
    ) {}
    canActivate (
        next:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):boolean {
        if(this.storageService.has('mobicrm.auth_token')) {
            return true;
        }

        this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}