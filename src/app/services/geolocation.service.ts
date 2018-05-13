import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

declare const google;

@Injectable()
export class GeolocationService {
    private addresses = [];

    constructor(
        private mapsAPILoader: MapsAPILoader
    ) {}

    getCoordsByString(key: string) {
        return new Promise((res, rej) => {
            
        this.mapsAPILoader.load().then(() => {
            const service = new google.maps.places.AutocompleteService();
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
                    res(this.addresses);
                }, err => {
                    rej(err);
                });
            });
    
        });
    }
}