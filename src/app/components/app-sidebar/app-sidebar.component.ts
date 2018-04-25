import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
  public navigation: any[];

  constructor(
    public authService: AuthService
  ) { }
  
  logout() {
    this.authService.logout();
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
