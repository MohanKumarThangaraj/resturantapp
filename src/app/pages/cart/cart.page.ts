/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { LocationService } from 'src/app/services/location.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartitem;
  total;
  totalAmount = 0;
  items;
  minimumorder = 100;
  maximumorder = 5000;
  today: any;
  deliveryFee;
  times;
  address: any;
  packagingCost = 50;
  distancevalue = 0;
  taxvalue: any;
  tax: any = '';
  date: any;
  instruction: any = '';
  constructor(
    public router: Router,
    public orderService: OrderService,
    public cartService: CartService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public locationService: LocationService
  ) {}

  ngOnInit() {
    this.cartitem = this.cartService.getAllCartItems();
    console.log(this.cartitem);
    this.total = this.cartService.getGrandTotal();
    this.items = this.cartService.getCartLength();
    this.packagingCost = this.cartService.packingCost;
    this.deliveryFeeCalculation();
    const t1 = new Date();
    const m1 = t1.getMonth() + 1;
    this.today =
      t1.getFullYear() +
      '-' +
      this.getPaddedComp(m1) +
      '-' +
      this.getPaddedComp(t1.getDate());
    this.date = this.today;
  }
  getPaddedComp(comp) {
    return parseInt(comp, 10) < 10 ? '0' + comp : comp;
  }

  formatAMPM(date) {
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutes =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const strTime = hours + ':' + minutes + ' ' + ampm;
    this.times = strTime;
  }

  pluscount(count) {
    count = count + 1;
    return count;
  }

  minus(a) {
    if (a !== 0) {
      a = a - 1;
      return a;
    } else {
      return 0;
    }
  }

  remove(list, que) {
    this.cartService.removeOneItemById(list.id);
    this.total = this.cartService.getGrandTotal();
    this.items = this.cartService.getCartLength();
    this.packagingCost = this.cartService.packingCost;
    this.deliveryFeeCalculation();
  }

  addtocart(list, count) {
    this.cartService.addCartItem(list, count, list);
    this.total = this.cartService.getGrandTotal();
    this.items = this.cartService.getCartLength();
    this.packagingCost = this.cartService.packingCost;
    this.deliveryFeeCalculation();
  }

  checkout() {
    this.items = this.cartService.getCartLength();
    if (
      Number(this.minimumorder) > 0 &&
      this.total < Number(this.minimumorder)
    ) {
      this.cartService.alert(
        'The minimum order value should be ₹' + this.minimumorder
      );
    } else if (
      Number(this.maximumorder) > 0 &&
      this.total > Number(this.maximumorder)
    ) {
      this.cartService.alert(
        'The maximum order value should be ₹' + this.maximumorder
      );
    } else {
      if (this.address) {
        this.cartService.instruction = this.instruction;
        this.orderService.addOrder(this.cartitem);
      } else {
        this.cartService.alert('please add address');
      }
    }
  }

  back() {
    this.router.navigate(['/landing']);
  }

  cancel() {
    this.taxvalue = ((this.total / 100) * parseFloat(this.tax)).toFixed(2);
    this.totalAmount =
      Number(this.taxvalue) +
      this.total +
      this.deliveryFee +
      this.packagingCost;
  }

  deliveryFeeCalculation() {
    this.tax = this.cartService.tax;
    this.deliveryFee = this.cartService.deliveryFee;
    this.taxvalue = ((this.total / 100) * parseFloat(this.tax)).toFixed(2);
    this.totalAmount =
      Number(this.taxvalue) +
      this.total +
      this.deliveryFee +
      this.packagingCost;
    this.cartService.totalAmount = this.totalAmount;
    this.cartService.taxvalue = this.taxvalue;
  }
  async getLocation() {
    // this.address = undefined;
    await this.locationService.getLocation().then(
      async (response) => {
        if (response) {
          await this.addaddress(response);
        } else {
          this.cartService.alert(
            'could not add address at the moment please try later'
          );
        }
      },
      (e) => {
        this.cartService.alert(
          'could not get location at the moment please try later'
        );
      }
    );
  }
  async addaddress(data) {
    await this.locationService.getAddress(data.lat, data.long).then(
      async (response) => {
        if (response) {
          const temp = response[0];
          console.log(temp);
          this.address =
            temp.subThoroughfare +
            ',' +
            temp.thoroughfare +
            ',' +
            temp.subLocality +
            ',' +
            temp.locality +
            ',' +
            temp.subAdministrativeArea +
            ',' +
            // temp.administrativeArea +
            // ',' +
            temp.postalCode +
            '.';
        } else {
          this.cartService.alert(
            'could not add address at the moment please try later'
          );
        }
      },
      (e) => {
        this.cartService.alert(
          'could not add address at the moment please try later'
        );
      }
    );
  }

  distance(lat1, lon1, lat2, lon2) {
    if (lat1 === lat2 && lon1 === lon2) {
      return 0;
    } else {
      const radlat1 = (Math.PI * lat1) / 180;
      const radlat2 = (Math.PI * lat2) / 180;
      const theta = lon1 - lon2;
      const radtheta = (Math.PI * theta) / 180;
      let dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      return dist;
    }
  }
}
