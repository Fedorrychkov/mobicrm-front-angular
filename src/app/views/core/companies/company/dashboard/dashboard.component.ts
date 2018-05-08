import { Component, OnInit } from '@angular/core';
import { OrderService, AddressMapService, GeolocationService } from '../../../../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  public totalList: any[];
  public coordsList: any[];
  public addressList: any[];

  constructor(
    private orderService: OrderService,
    private addressMapService: AddressMapService,
    private geolocationService: GeolocationService
  ) {}

  ngOnInit() {
    this.totalList = [
      { action: 'blue', value: 455, title: 'Заказов', subTitle: 'В этом месяце', subValue: 34, icon: 'shopping_cart' },
      { action: 'green', value: 200, title: 'Клиентов', subTitle: 'В этом месяце', subValue: 4, icon: 'shopping_cart' },
      { action: 'yellow', value: '450000 ₽', title: 'Заработано всего', subTitle: 'В этом месяце', subValue: '3400 ₽', icon: 'shopping_cart' },
      { action: 'pink', value: '250000 ₽', title: 'Заработано чистыми', subTitle: 'В этом месяце', subValue: '400 ₽', icon: 'shopping_cart' },
    ];

    this.orderService.getOrders()
      .then(res => {
        let adresses = res.body.map( item => item.order.address)
        return adresses;
      }).then( locations => {
        console.log(locations);
        locations.map(item => {
          // this.geolocationSe nsole.log(err));
        });

        // console.log(this.coordsList);
 
        // this.addressMapService.getCoordsByPlaceId(this.addresses[0].id)
        //   .then(res => {
        //     console.log(res);
        //   });
      });
  }

}
