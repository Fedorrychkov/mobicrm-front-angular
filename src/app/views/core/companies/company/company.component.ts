import { Component, OnInit } from '@angular/core';
import { EventService, CompanyService, StorageService } from '../../../../services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  private headerNav: any[];
  private id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService,
    private companyService: CompanyService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.companyService.companyId = params['id'];
    });
    
    this.companyService.getCompany(this.id)
      .then( res => {
      });

    this.headerNav = [
      {
          link: `${this.id}/dashboard`,
          name: 'Панель управления'
      },
      {
          link: `${this.id}/orders`,
          name: 'Заказы'
      },
      {
          link: `${this.id}/customers`,
          name: 'Клиенты'
      },
      {
          link: `${this.id}/employees`,
          name: 'Сотрудники'
      },
      {
          link: `${this.id}/settings`,
          name: 'Настройки'
      },
    ];
    this.eventService.broadcast('app-header-nav', {nav: this.headerNav});
    this.eventService.broadcast('app-header-back', {link: 'companies'});
    if (this.storageService.get('mobicrm.company_id')) this.companyService.companyId = this.id;
  }

}
