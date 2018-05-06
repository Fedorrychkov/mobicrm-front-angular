import { Component, OnInit, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { AddressMapService } from '../../services';

declare const google: any;

@Component({
  selector: 'app-ggmaps',
  templateUrl: './ggmaps.component.html',
  styleUrls: ['./ggmaps.component.scss']
})
export class GgmapsComponent implements OnInit {

  @Input()
  place: string;
  
  public lat: number = -32.9477132;
  public lng: number = -60.630465800000025;
  public addresses = [];
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private addressMapService: AddressMapService
  ) { }
  


  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      const service = new google.maps.places.AutocompleteService();
      let key = 'Россия, г. Казань, ул. Чистопольская д. 39';
      service.getPlacePredictions({input: key}, (locations) => {

        this.addresses = [];

        if (!locations) {
          return this.addresses;
        }
        for (const location of locations) {
          this.addresses.push({
            name: location['description'],
            id: location['place_id']
          });
        }
        console.log(location, this.addresses);
        /**
         * Метод возвращает координаты места по place_id
         */
        this.addressMapService.getCoordsByPlaceId(this.addresses[0].id)
          .then(res => {
            console.log(res);
          });
      });
    });
  }

}
