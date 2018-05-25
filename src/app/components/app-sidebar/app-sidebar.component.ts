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
      // {
      //   link: '/dashboard',
      //   name: 'Консоль',
      //   icon: 'dashboard',
      //   directorRole: 1
      // },
      {
        link: '/profile',
        name: 'Профиль',
        icon: 'perm_identity',
        directorRole: 1,
        role: 3,
        managerRole: 3,
        stManagerRole: 2,
      },
      {
        link: '/orders',
        name: 'Заказы',
        icon: 'present_to_all',
        role: 3,
        managerRole: 3,
        stManagerRole: 2,
      },
      {
        link: '/customers',
        name: 'Клиенты',
        icon: 'face',
        role: 3,
        managerRole: 3,
        stManagerRole: 2,
      },
      {
        link: '/employees',
        name: 'Сотрудники',
        icon: 'people_outline',
        role: 2,
        stManagerRole: 2,
      },
      {
        link: '/company',
        name: 'Компания',
        icon: 'present_to_all',
        role: 2,
        stManagerRole: 2,
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
