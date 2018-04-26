import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { EventService } from '../../services/event.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface eventResponse {
  type?: String,
  message?: String
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('notificationTrigger', [
      state('show', style({ 
        'display': 'block',
        'transform': 'translate(0, 0)'
        //  'opacity': '1'
      })),
      state('hide', style({
        //  'opacity': '0'
        'transform': 'translate(0, -150%)'
      })),
      transition('show => hide', [
         style({}),
         animate('0.2s')
      ]),
      transition('hide => show', [
         style({}),
         animate('0.2s')
      ])
   ]),
 ]
})
export class NotificationComponent implements OnInit {
  public type?: String;
  public message?: String;
  public eventResponse: eventResponse;
  public showPanel = false;
  
  @HostBinding('@notificationTrigger') get state() {
    return this.showPanel ? 'show' : 'hide';
   }
  constructor(
    public eventService: EventService
  ) {
  }
  
  closePanel() {
    this.showPanel = false;
  }
  // TODO: Добавить функцию пропадания оповещения спустя 5 секунд. Добавить анимации появления и пропадания.
  ngOnInit() {
    this.eventService.on('notification')
      .subscribe((data) => {
       this.eventResponse = data;
       this.type = this.eventResponse.type;
       this.message = this.eventResponse.message;
       this.showPanel = true;
       setTimeout(()=> {
        this.showPanel = false;
        this.type = '';
        this.message = '';
       }, 5000);
      });
  }

}
