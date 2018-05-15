import { Component, OnInit, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { AddressMapService } from '../../../services';

declare const google: any;

@Component({
  selector: 'app-oneplace',
  templateUrl: './oneplace.component.html',
  styleUrls: ['./oneplace.component.scss']
})
export class OneplaceComponent implements OnInit {

  @Input()
  set place(item: string) {
    this.address = item;
  }
  get place() {
    return this.address;
  }
  
  @Input()
  set coords(item: any) {
    this.lat = item.latitude;
    this.lng = item.longitude;
  }

  get coords() {
    return this.lat, this.lng
  }

  public lat: number = 55.7819393;
  public lng: number = 49.18588840000007;
  public zoom: number = 17;
  public address: string;
  public addresses = [];

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private addressMapService: AddressMapService
  ) { }
  


  ngOnInit() {
  }

}
