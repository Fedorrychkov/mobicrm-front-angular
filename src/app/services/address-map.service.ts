import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

declare const google;

@Injectable()
export class AddressMapService {

  constructor(private mapsAPILoader: MapsAPILoader) {}


  // Метод принимает координаты (lat, lng) и возвращает placeId
  getPlaceIdByCoords(coords) {

    if (typeof coords.lat === 'string') {
      coords.lat = + coords.lat;
    }

    if (typeof coords.lng === 'string') {
      coords.lng = + coords.lng;
    }


    return new Promise((resolve, reject) => {
      this.mapsAPILoader.load().then(() => {
        const geocoder = new google.maps.Geocoder;

        geocoder.geocode({'location': coords}, (results) => {
          if (results[1]) {
            resolve(results[1].place_id);
          } else {
            reject();
          }
        });

      });
    });
  }


  // Метод принимает placeId и возвращает координаты (lat, lng)
  getCoordsByPlaceId(placeId: string) {
    return new Promise((resolve) => {
      this.mapsAPILoader.load().then(() => {
        const geocoder = new google.maps.Geocoder;

        geocoder.geocode({'placeId': placeId}, (results) => {

          if (!results || !results[0]) {
            resolve();
            return;
          }

          resolve({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        });
      });
    });
  }


  // Метод принимает координаты (lat, lng) и возвращает город либо null
  getCityByCoords(coords) {
    let city;

    return new Promise((resolve) => {
      this.mapsAPILoader.load().then(() => {
        const geocoder = new google.maps.Geocoder;

        geocoder.geocode({'location': coords}, (results) => {

          let result;

          if (results) {
            for (const _result of results) {
              if (_result.types[0] === 'locality') {
                result = _result;
                break;
              }
            }
          }

          if (result) {
            for (const address of result.address_components) {
              if (address.types[0] === 'locality') {
                city = address;
                break;
              }
            }

            resolve(city.long_name);
          } else {
            resolve(null);
          }

        });
      });
    });
  }


  // Метод принимает координаты (lat, lng) и возвращает адрес
  getAddressByCoords(coords) {
    return new Promise((resolve) => {
      this.mapsAPILoader.load().then(() => {
        const geocoder = new google.maps.Geocoder;

        geocoder.geocode({'location': coords}, (results) => {

          if (results) {
            resolve(results[0]);
          } else {
            resolve(null);
          }
        });
      });
    });
  }
}
