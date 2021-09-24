/* eslint-disable @typescript-eslint/prefer-for-of */
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController, LoadingController } from '@ionic/angular';

export class MenuItem {
  id: number;
  oldPrice: number;
  newPrice: number;
  image: string;
  veg: string;
  nonVeg: string;
  offer: string;
  quantity: number;
  productName: string;

  constructor(
    id: number,
    oldPrice: number,
    newPrice: number,
    veg: string,
    nonVeg: string,
    image: string,
    offer: string
  ) {
    this.id = id;
    this.oldPrice = oldPrice;
    this.newPrice = newPrice;
    this.image = image;
    this.veg = veg;
    this.nonVeg = nonVeg;
    this.offer = offer;
  }
}
export class CartItem {
  id: number;
  oldPrice: number;
  newPrice: number;
  image: string;
  veg: string;
  nonVeg: string;
  offer: string;
  quantity: number;
  productName: string;
  constructor(
    quantity: number,
    productName: string,
    id: number,
    oldPrice: number,
    newPrice: number,
    veg: string,
    nonVeg: string,
    image: string,
    offer: string
  ) {
    this.id = id;
    this.oldPrice = oldPrice;
    this.newPrice = newPrice;
    this.image = image;
    this.veg = veg;
    this.nonVeg = nonVeg;
    this.offer = offer;
    this.quantity = quantity;
    this.productName = productName;
  }
}

@Injectable()
export class CartService {
  list: Array<CartItem>;
  packingCost: any = 50;
  deliveryFee: any = 50;
  orderStatus: string;
  totalAmount: number;
  tax = '2';
  taxvalue: number;
  time: string;
  instruction: string;
  constructor(
    // public storage: NativeStorage,
    public loadingController: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.list = [];
    this.getvalue();
  }
  getvalue() {
    const val = localStorage.getItem('cartItems');
    if (val === null || val === undefined) {
      this.list = [];
      return this.list;
    } else {
      return (this.list = JSON.parse(val));
    }
    // this.storage.getItem('cartItems').then((val) => {
    //   if (val === null || val === undefined) {
    //     this.list = [];
    //     return this.list;
    //   } else {
    //     return (this.list = val);
    //   }
    // });
  }

  getAllCartItems() {
    return this.list;
  }

  getItemById(id: number) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.changeCart();
        return this.list[i];
      }
    }
  }

  addItem(
    quantity: number,
    productName: string,
    id: number,
    oldPrice: number,
    newPrice: number,
    veg: string,
    nonVeg: string,
    image: string,
    offer: string
  ) {
    let isExists = false;
    if (this.list.length) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].id === id) {
          this.list[i].quantity++;
          isExists = true;
          this.changeCart();
          return true;
        } else {
          // if (!isExists) {
          this.list.push(
            new CartItem(
              quantity,
              productName,
              id,
              oldPrice,
              newPrice,
              veg,
              nonVeg,
              image,
              offer
            )
          );
          this.changeCart();
          return true;
          // }
        }
      }
    } else {
      if (!isExists) {
        this.list.push(
          new CartItem(
            quantity,
            productName,
            id,
            oldPrice,
            newPrice,
            veg,
            nonVeg,
            image,
            offer
          )
        );
        this.changeCart();
        return true;
      }
    }
  }

  changeCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.list));
    // this.storage.setItem('cartItems', this.list);
  }
  addCartItem(item: MenuItem, quantity: number, items) {
    this.list.map((cartItem, index) => {
      if (item.id === cartItem.id) {
        this.list[index].quantity++;
      }
    });
    this.changeCart();
  }
  removeItemById(id) {
    console.log(id);
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.list.splice(i, 1);
        this.changeCart();
        break;
      }
    }
  }

  removeOneItemById(id) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.list[i].quantity--;
        if (this.list[i].quantity === 0) {
          this.list.splice(i, 1);
          this.changeCart();
          break;
        }
        this.changeCart();
        break;
      }
    }
  }

  emptyCart() {
    // for (let i = 0; i < this.list.length; i++) {
    //   this.list.splice(i, 1);
    //   i--;
    // }
    this.list = [];
    localStorage.removeItem('cartItems');
  }

  quantityPlus(item) {
    item.quantity += 1;
  }

  quantityMinus(item) {
    item.quantity -= 1;
  }

  getCartLength() {
    let length = 0;
    this.list.forEach((element) => {
      length += element.quantity;
    });
    return length;
    // this.cartitems = length
  }

  getGrandTotal(): number {
    let amount = 0;
    for (let i = 0; i < this.list.length; i++) {
      amount += this.list[i].newPrice * this.list[i].quantity;
    }
    return amount;
  }
  async alert(condition) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: condition,
      buttons: ['okay'],
    });

    await alert.present();
  }

  // Dismiss loader
  dismissLoader() {
    this.loadingController
      .dismiss()
      .then((response) => {
        console.log('Loader closed!', response);
      })
      .catch((err) => {
        console.log('Error occured : ', err);
      });
  }
}
