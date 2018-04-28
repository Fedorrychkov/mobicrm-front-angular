import { Component, OnInit, Input } from '@angular/core';
import { ICompanies, ICompany } from '../../../../interfaces/company';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  
  public _companies: ICompanies;
  public isLoaded = false;

  @Input()
  /**
   * get list of companies
   */
  get companies() {
    return this._companies;
  }

  /**
   * set list of companies
   * @param list list of companies
   */
  set companies(list: ICompanies) {
    this._companies = list;
    this.isLoaded = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
