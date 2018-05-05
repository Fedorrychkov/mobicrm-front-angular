import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
   
  public _employees: any;
  public isLoaded = false;
  public roleList: any[];

  @Input()
  /**
   * get list of companies
   */
  get employees() {
    return this._employees;
  }

  /**
   * set list of companies
   * @param list list of companies
   */
  set employees(list: any) {
    this._employees = list;
    this.isLoaded = true;
  }

  constructor() { }

  ngOnInit() {
    this.roleList = [
      {id: 2, name: 'Ст. менеджер'},
      {id: 3, name: 'Менеджер'},
      {id: 4, name: 'Монтажник'},
    ];
  }

}
