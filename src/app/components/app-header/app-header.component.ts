import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services';

interface eventResponse {
  nav?: any[]
}

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  public navigation: any[];

  constructor(
    public eventService: EventService
  ) { }

  ngOnInit() {
    this.eventService.on('app-header-nav')
      .subscribe((data: eventResponse) => {
        this.navigation = data.nav;
      });
  }

}
