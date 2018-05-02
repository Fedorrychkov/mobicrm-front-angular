import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services';
import { Router } from '@angular/router';

interface eventResponse {
  nav?: any[];
  link?: any;
}

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  public navigation: any[];
  public goBack: any;

  constructor(
    public eventService: EventService,
    public router: Router
  ) { }
  
  backPage(page) {
    this.router.navigate([page]);
    this.goBack = null;
  }

  ngOnInit() {
    this.eventService.on('app-header-nav')
      .subscribe((data: eventResponse) => {
        this.navigation = data.nav;
      });
    
    this.eventService.on('app-header-back')
      .subscribe((data: eventResponse) => {
        this.goBack = data.link;
      });
  }

}
