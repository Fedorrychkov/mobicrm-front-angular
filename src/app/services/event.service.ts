import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import { Subject }     from 'rxjs/Subject';
import                 'rxjs/add/operator/filter';
import                 'rxjs/add/operator/map';

interface BroadcastEvent {
    key:any,
    data?:any
}

@Injectable()
export class EventService {
    public eventBus:Subject<BroadcastEvent>;

    constructor() {
        this.eventBus = new Subject<BroadcastEvent>();
    }

    broadcast(key:any, data?:any, opts?:any) {
        this.eventBus.next({key, data});
    }

    on<T>(key:any):Observable<T> {
        return this.eventBus.asObservable()
            .filter(event => event.key === key)
            .map(event => <T>event.data);
    }
}