import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
  public navigation: any[];
  public userRole;

  constructor(
    private authService: AuthService,
  ) { }
  
  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.userRole = this.authService.userRole;
    this.navigation = [
      {
        link: '/dashboard',
        name: 'Консоль',
        icon: 'dashboard',
        directorRole: 1
      },
      {
        link: '/orders',
        name: 'Заказы',
        icon: 'present_to_all',
        role: 3
      },
      {
        link: '/customers',
        name: 'Клиенты',
        icon: 'face',
        role: 3
      },
      {
        link: '/employees',
        name: 'Сотрудники',
        icon: 'people_outline',
        role: 3
      },
      {
        link: '/companies',
        name: 'Компании',
        icon: 'next_week',
        directorRole: 1
      }
    ]
  }

}
