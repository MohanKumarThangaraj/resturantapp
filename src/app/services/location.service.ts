import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from '@ionic-native/native-geocoder/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  address = new BehaviorSubject(undefined);
  latlong = new BehaviorSubject(undefined);
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
  ) {}
  async getLocation(): Promise<any> {
    return await new Promise(async (resolve, reject) => {
      this.geolocation
        .getCurrentPosition()
        .then(async (resp) => {
          const obj = {
            lat: resp.coords.latitude,
            long: resp.coords.longitude,
          };
          console.log(obj);
          resolve(obj);
          // resp.coords.latitude
          // resp.coords.longitude
        })
        .catch((error) => {
          console.log('Error getting location', error);
          reject(error);
        });
    });
  }
  async getAddress(lat: number, long: number): Promise<any> {
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5,
    };
    return new Promise(async (resolve, reject) => {
      this.nativeGeocoder
        .reverseGeocode(lat, long, options)
        .then((result: NativeGeocoderResult[]) => {
          console.log('location service response');
          console.log(JSON.stringify(result));
          resolve(result);
        })
        .catch((error: any) => {
          console.log(error);
          reject(error);
        });
    });
  }
}
