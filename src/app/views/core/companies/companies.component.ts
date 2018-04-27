import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service';

@Component({
    templateUrl: 'companies.component.html'
})

export class СompaniesComponent implements OnInit {
    public companies;
    public isLoaded = false;
    constructor(
        public companyService: CompanyService
    ) { }

    ngOnInit() {
        this.companyService.getCompanies()
            .then( (data) => {
                this.companies = data;
                this.isLoaded = true;
            });
    }
}