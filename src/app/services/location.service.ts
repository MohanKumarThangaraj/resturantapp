import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from '@ionic-native/native-geocoder/ngx';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  address = new BehaviorSubject('');
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
  ) {}
  getLocation() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        console.log(resp);
        this.getAddress(resp.coords.latitude, resp.coords.longitude);
        // resp.coords.latitude
        // resp.coords.longitude
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }
  getAddress(lat, long) {
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5,
    };

    this.nativeGeocoder
      .reverseGeocode(lat, long, options)
      .then((result: NativeGeocoderResult[]) => {
        console.log(JSON.stringify(result[0]));
        this.address.next(JSON.stringify(result[0]));
      })
      .catch((error: any) => console.log(error));
  }
}
