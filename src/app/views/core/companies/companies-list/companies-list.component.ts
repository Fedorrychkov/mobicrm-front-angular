import { Component, OnInit, Input } from '@angular/core';

interface ICompany {
  address?: string,
  avatar?: string,
  createdAt: string,
  description?: string,
  director_id: number,
  id: number,
  name?: string,
  status?: string,
  tags?: string,
  updatedAt: string
}

interface ICompanies {
  body?: ICompany[],
  length?: number
}

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
