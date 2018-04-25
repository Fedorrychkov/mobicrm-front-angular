import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../../services/event.service';

interface eventResponse {
  type?: String,
  message?: String
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  public type?: String;
  public message?: String;
  public eventResponse: eventResponse;
  public showPanel = false;

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
      });
  }

}
