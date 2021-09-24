/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
// import { CartPage } from '../cart/cart.page';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  type = 'Starters';
  selectedCategory: any = {};
  allProductsList: any = [];
  searchProductList: any = [];
  categories = [
    {
      id: 1,
      category: 'Starters',
      catName: 'Starters',
      products: [
        {
          id: 1,
          category: 'starters',
          productName: 'Chilli Fish Dry',
          product: 'chilliFishDry',
          oldPrice: 350,
          newPrice: 315,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 0,
          nonVeg: 1,
          count: 0,
        },
        {
          id: 2,
          category: 'starters',
          productName: 'Fish Finger Dry',
          product: 'fishFIngerDry',
          oldPrice: 180,
          newPrice: 162,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 0,
          nonVeg: 1,
          count: 0,
        },
        {
          id: 3,
          category: 'starters',
          productName: 'Ginger Garlic Fish Dry',
          product: 'gingerGarlicFishDry',
          oldPrice: 290,
          newPrice: 261,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 0,
          nonVeg: 1,
          count: 0,
        },
        {
          id: 4,
          category: 'starters',
          productName: 'French Fries',
          product: 'frenchFries',
          oldPrice: 70,
          newPrice: 63,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 1,
          nonVeg: 0,
          count: 0,
        },
        {
          id: 5,
          category: 'starters',
          productName: 'Chilli Potato',
          product: 'chilliPotato',
          oldPrice: 180,
          newPrice: 162,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 1,
          nonVeg: 0,
          count: 0,
        },
      ],
    },
    {
      id: 2,
      category: 'MainCourse',
      catName: 'Main Course',
      products: [
        {
          id: 6,
          category: 'MainCourse',
          productName: 'Lamb In Oyster Sauce Gravy',
          product: 'lambInOysterSauceGravy',
          oldPrice: 280,
          newPrice: 252,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 0,
          nonVeg: 1,
          count: 0,
        },
        {
          id: 7,
          category: 'MainCourse',
          productName: 'Paneer Butter Masala',
          product: 'paneerButterMasala',
          oldPrice: 250,
          newPrice: 225,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 1,
          nonVeg: 0,
          count: 0,
        },
        {
          id: 8,
          category: 'MainCourse',
          productName: 'Grill House Butter Chicken Masala',
          product: 'grillHouseButterChickenMasala',
          oldPrice: 270,
          newPrice: 243,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 0,
          nonVeg: 1,
          count: 0,
        },
        {
          id: 9,
          category: 'MainCourse',
          productName: 'Chicken Do Pyaza',
          product: 'chickenDoPyaza',
          oldPrice: 250,
          newPrice: 225,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 0,
          nonVeg: 1,
          count: 0,
        },
        {
          id: 10,
          category: 'MainCourse',
          productName: 'Chicken Sultan',
          product: 'chickenSultan',
          oldPrice: 250,
          newPrice: 225,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 0,
          nonVeg: 1,
          count: 0,
        },
      ],
    },
    {
      id: 3,
      category: 'Dessert',
      catName: 'Dessert',
    },
    {
      id: 4,
      category: 'Beverage',
      catName: 'Beverage',
      products: [
        {
          id: 16,
          category: 'MainCourse',
          productName: 'Black Current Milkshake',
          product: 'blackCurrentMilkshake',
          oldPrice: 90,
          newPrice: 81,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 1,
          nonVeg: 0,
          count: 0,
        },
        {
          id: 17,
          category: 'MainCourse',
          productName: 'Tender Coconut Shake',
          product: 'tender Coconut Shake',
          oldPrice: 90,
          newPrice: 81,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 1,
          nonVeg: 0,
          count: 0,
        },
        {
          id: 18,
          category: 'MainCourse',
          productName: 'Fresh Lime Juice',
          product: 'freshLimeJuice',
          oldPrice: 30,
          newPrice: 27,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 1,
          nonVeg: 0,
          count: 0,
        },
        {
          id: 19,
          category: 'MainCourse',
          productName: 'packed Juicee',
          product: 'packed Juice',
          oldPrice: 60,
          newPrice: 54,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 1,
          nonVeg: 0,
          count: 0,
        },
        {
          id: 20,
          category: 'MainCourse',
          productName: 'Tender Coconut Pudding',
          product: 'tenderCoconutPudding',
          oldPrice: 60,
          newPrice: 54,
          offer: '10% OFF',
          image: 'https://semantic-ui.com/images/wireframe/image.png',
          veg: 1,
          nonVeg: 0,
          count: 0,
        },
      ],
    },
  ];
  products: any = [];
  queryText: any = '';
  checkoutlist: any = [];
  total: number;
  totalItems: number;
  constructor(
    private navCtrl: NavController,
    public cartService: CartService,
    // private storage: NativeStorage,
    private router: Router
  ) {}

  ngOnInit() {
    // this.storage.getItem('cartItems').then((val) => {
    //   if (val != null) {
    //     this.checkoutlist = val;
    //   }
    // });
    // for (let i = 0; i < this.categories.length; i++) {
    //   if (this.categories[i].products) {
    //     for (let j = 0; j < this.categories[i].products.length; j++) {
    //       this.allProductsList.push(this.categories[i].products[j]);
    //       this.categories[i].products[j].count = this.checkCart(
    //         this.categories[i].products[j].id
    //       );
    //     }
    //   }
    // }
  }
  ionViewWillEnter() {
    this.total = this.cartService.getGrandTotal();
    this.checkoutlist = this.cartService.getvalue();
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].products) {
        for (let j = 0; j < this.categories[i].products.length; j++) {
          this.allProductsList.push(this.categories[i].products[j]);
          this.categories[i].products[j].count = this.checkCart(
            this.categories[i].products[j].id
          );
        }
      }
    }
    this.selectedCategory = this.categories[0];
    this.products = this.selectedCategory.products;
    console.log(this.products);
  }
  segmentChanged(category) {
    this.queryText = '';
    this.selectedCategory = category;
    this.products = category.products;
    console.log(this.products);
  }

  minus(a) {
    if (a !== 0) {
      a = a - 1;
      return a;
    } else {
      return 0;
    }
  }
  getItems($event) {
    this.queryText = $event.detail.value;
    if (
      this.queryText !== undefined &&
      this.queryText != null &&
      this.queryText !== ''
    ) {
      this.searchProductList = this.filterItems(this.queryText);
      this.products = [];
    } else {
      this.products = this.selectedCategory.products;
    }
  }
  filterItems(searchTerm) {
    return this.allProductsList.filter(
      (item) =>
        item.product.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
  }
  addtocart(list, que) {
    list.count = que;
    if (list.discount_price) {
      list.minprice = list.discount_price;
      list.prices = list.discount_price;
    } else {
      list.minprice = list.price;
      list.prices = list.price;
    }
    const value = this.cartService.addItem(
      que,
      list.productName,
      list.id,
      list.oldPrice,
      list.newPrice,
      list.veg,
      list.nonVeg,
      list.image,
      list.offer
    );
    if (value === false) {
    } else {
      this.total = this.cartService.getGrandTotal();
      this.totalItems = this.cartService.getCartLength();
    }
  }

  remove(list, que) {
    list.count = que;
    this.cartService.removeOneItemById(list.id);
    this.total = this.cartService.getGrandTotal();
    this.totalItems = this.cartService.getCartLength();
  }

  pluscount(count) {
    count = count + 1;
    return count;
  }

  checkCart(id) {
    let cnt = 0;
    if (this.checkoutlist !== undefined && this.checkoutlist != null) {
      for (let i = 0; i < this.checkoutlist.length; i++) {
        if (this.checkoutlist[i].id === id) {
          cnt = this.checkoutlist[i].quantity;
        }
      }
    }
    return cnt;
  }
  gocart() {
    if (this.cartService.getCartLength() > 0) {
      this.router.navigate(['/cart']);
    } else {
      this.cartService.alert('Please add any one item');
    }
    //   } else {
    //     this.cartService.alert('Please add any one item');
    //   }
    // });
  }
}
