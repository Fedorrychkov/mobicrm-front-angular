import { Component, OnInit } from '@angular/core';
import { EventService, CompanyService, AuthService } from '../../../services';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'companies.component.html'
})

export class СompaniesComponent implements OnInit {
    public companies;
    public isLoaded = false;
    public headerNav: any[];

    constructor(
        private eventService: EventService,
        private companyService: CompanyService,
        private authService: AuthService,
        private router: Router
    ) { }

    init() {
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

    ngOnInit() {
        this.authService.userRole != '1' ? this.router.navigate(['orders']) : this.init();
    }
}