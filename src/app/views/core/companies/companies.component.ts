import { Component, OnInit } from '@angular/core';
import { EventService, CompanyService } from '../../../services';

@Component({
    templateUrl: 'companies.component.html'
})

export class СompaniesComponent implements OnInit {
    public companies;
    public isLoaded = false;
    public headerNav: any[];

    constructor(
        public eventService: EventService,
        public companyService: CompanyService
    ) { }

    ngOnInit() {
        this.headerNav = [
            {
                link: '/',
                name: 'Все компании'
            },
        ];
        this.companyService.getCompanies()
            .then( (data) => {
                this.companies = data;
                this.isLoaded = true;
            });
        
        this.eventService.broadcast('app-header-nav', {nav: this.headerNav});
    }
}