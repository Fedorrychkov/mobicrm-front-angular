import { Component, OnInit, Input } from '@angular/core';


interface total {
  action: string;
  title: string;
  subTitle: string;
  value: string;
  subValue: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard-total',
  templateUrl: './dashboard-total.component.html',
  styleUrls: ['./dashboard-total.component.scss']
})
export class DashboardTotalComponent implements OnInit {
  
  public _total: total;
  public isLoaded = false;

  @Input()
  /**
   * get total
   */
  get total() {
    return this._total;
  }

  /**
   * @param total 
   */
  set total(total: total) {
    this._total = total;
    this.isLoaded = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
