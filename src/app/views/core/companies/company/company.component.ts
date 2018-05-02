import { Component, OnInit } from '@angular/core';
import { EventService, CompanyService } from '../../../../services';
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
    public router: Router,
    public route: ActivatedRoute,
    public eventService: EventService,
    private companyService: CompanyService
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
  ];
    this.eventService.broadcast('app-header-nav', {nav: this.headerNav});
    this.eventService.broadcast('app-header-back', {link: 'companies'});
    this.router.navigate([`companies/${this.id}/dashboard`]);
  }

}
