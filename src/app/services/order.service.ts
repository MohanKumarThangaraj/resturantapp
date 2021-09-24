/* eslint-disable @typescript-eslint/prefer-for-of */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CartItem, CartService } from './cart.service';
export class OrderItem {
  id: string;
  oldPrice: number;
  newPrice: number;
  image: string;
  veg: string;
  nonVeg: string;
  offer: string;
  quantity: number;
  productName: string;
  orderStatus: string;
  totalAmount: number;
  tax: string;
  taxvalue: number;
  packingCost: number;
  time: string;
  deliveryFee: number;
  instruction: string;
  products: any = [];
  constructor(
    id: string,
    orderStatus: string,
    totalAmount: number,
    tax: string,
    taxvalue: number,
    packingCost: number,
    time: string,
    deliveryFee: number,
    instruction: string,
    products: Array<CartItem>
  ) {
    this.id = id;
    this.orderStatus = orderStatus;
    this.totalAmount = totalAmount;
    this.tax = tax;
    this.taxvalue = taxvalue;
    this.packingCost = packingCost;
    this.time = time;
    this.deliveryFee = deliveryFee;
    this.instruction = instruction;
    this.products = products;
  }
}
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderList: Array<OrderItem>;
  orderStatus = 'Placed';
  constructor(
    private cart: CartService,
    private router: Router,
    public loadingController: LoadingController
  ) {
    const temp = localStorage.getItem('orderItems');
    if (temp) {
      this.orderList = JSON.parse(temp);
    } else {
      this.orderList = [];
    }
  }
  addOrder(list) {
    this.loader();
    const date = new Date();
    const id =
      'ORDER - ' +
      date.getMonth() +
      date.getDate() +
      date.getHours() +
      date.getMinutes() +
      date.getSeconds();
    this.orderList.push(
      new OrderItem(
        id,
        this.orderStatus,
        this.cart.totalAmount,
        this.cart.tax,
        this.cart.taxvalue,
        this.cart.packingCost,
        date.toDateString() + ',' + date.toLocaleTimeString(),
        this.cart.deliveryFee,
        this.cart.instruction,
        list
      )
    );
    localStorage.setItem('orderItems', JSON.stringify(this.orderList));
  }
  loader() {
    this.loadingController
      .create({
        message: 'Loading Please Wait......',
        duration: 4000,
      })
      .then((response) => {
        response.present();
        response.onDidDismiss().then((value) => {
          let temp = localStorage.getItem('orderItems');
          if (temp) {
            temp = JSON.parse(temp);
            this.cart.emptyCart();
            this.cart.alert('Order Successful');
            this.router.navigate(['/landing']);
          } else {
            this.cart.alert('Try Again Later');
          }
        });
      });
  }
  gotohome() {
    this.router.navigate(['/landing']);
  }
}
