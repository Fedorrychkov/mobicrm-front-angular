import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
  public navigation: any[];

  constructor() { }
  
  logout() {
    console.log('Logout');
  }

  ngOnInit() {
    this.navigation = [
      {
        link: '/dashboard',
        name: 'Консоль',
        icon: 'dashboard'
      },
      {
        link: '/orders',
        name: 'Заказы',
        icon: 'present_to_all'
      },
      {
        link: '/customers',
        name: 'Клиенты',
        icon: 'face'
      },
      {
        link: '/employees',
        name: 'Сотрудники',
        icon: 'people_outline'
      },
      {
        link: '/companies',
        name: 'Компании',
        icon: 'next_week'
      }
    ]
  }

}
