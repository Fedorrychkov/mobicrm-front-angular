import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private chart: AmChart;
 
  public totalList: any[];
 
  constructor(private AmCharts: AmChartsService) {}


  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart("chartdiv", {
      "type": "serial",
      "theme": "light",
      "dataProvider": []
    });
  }
 
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }

  ngOnInit() {
    this.totalList = [
      { action: 'blue', value: 455, title: 'Заказов', subTitle: 'В этом месяце', subValue: 34, icon: 'shopping_cart' },
      { action: 'green', value: 200, title: 'Клиентов', subTitle: 'В этом месяце', subValue: 4, icon: 'shopping_cart' },
      { action: 'yellow', value: '450000 ₽', title: 'Заработано всего', subTitle: 'В этом месяце', subValue: '3400 ₽', icon: 'shopping_cart' },
      { action: 'pink', value: '250000 ₽', title: 'Заработано чистыми', subTitle: 'В этом месяце', subValue: '400 ₽', icon: 'shopping_cart' },
    ];
  }

}
