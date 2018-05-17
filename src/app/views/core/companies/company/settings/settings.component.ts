import { Component, OnInit } from '@angular/core';
import { CompanyService, EventService } from '../../../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  private id: string;
  public navigation: any;

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.eventService.broadcast('app-header-back', {link: 'companies'});
    this.id = this.companyService.companyId;
    this.navigation = [
      {
          link: `common`,
          name: 'Информация о компании'
      },
    ];
    this.router.navigate([`companies/${this.id}/settings/common`]);
  }

}
