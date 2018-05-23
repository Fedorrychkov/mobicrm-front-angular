import { Component, OnInit } from '@angular/core';
import { CompanyService, EventService } from '../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  private id: string;
  public navigation: any;

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.id = this.companyService.companyId;
  }
}
