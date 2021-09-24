(self["webpackChunkresturantapp"] = self["webpackChunkresturantapp"] || []).push([["src_app_pages_landing_landing_module_ts"],{

/***/ 2490:
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/landing-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageRoutingModule": () => (/* binding */ LandingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.page */ 4808);




const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_0__.LandingPage
    }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LandingPageRoutingModule);



/***/ }),

/***/ 7241:
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageModule": () => (/* binding */ LandingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-routing.module */ 2490);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page */ 4808);







let LandingPageModule = class LandingPageModule {
};
LandingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPageRoutingModule
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_1__.LandingPage]
    })
], LandingPageModule);



/***/ }),

/***/ 4808:
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPage": () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_landing_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./landing.page.html */ 7365);
/* harmony import */ var _landing_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page.scss */ 9242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 910);



/* eslint-disable @typescript-eslint/prefer-for-of */


// import { NativeStorage } from '@ionic-native/native-storage/ngx';


// import { CartPage } from '../cart/cart.page';
let LandingPage = class LandingPage {
    constructor(navCtrl, cartService, 
    // private storage: NativeStorage,
    router) {
        this.navCtrl = navCtrl;
        this.cartService = cartService;
        this.router = router;
        this.type = 'Starters';
        this.selectedCategory = {};
        this.allProductsList = [];
        this.searchProductList = [];
        this.categories = [
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
        this.products = [];
        this.queryText = '';
        this.checkoutlist = [];
    }
    ngOnInit() {
        this.total = this.cartService.getGrandTotal();
        this.checkoutlist = this.cartService.getvalue();
        // this.storage.getItem('cartItems').then((val) => {
        //   if (val != null) {
        //     this.checkoutlist = val;
        //   }
        // });
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].products) {
                for (let j = 0; j < this.categories[i].products.length; j++) {
                    this.allProductsList.push(this.categories[i].products[j]);
                    this.categories[i].products[j].count = this.checkCart(this.categories[i].products[j].id);
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
        }
        else {
            return 0;
        }
    }
    getItems($event) {
        this.queryText = $event.detail.value;
        if (this.queryText !== undefined &&
            this.queryText != null &&
            this.queryText !== '') {
            this.searchProductList = this.filterItems(this.queryText);
            this.products = [];
        }
        else {
            this.products = this.selectedCategory.products;
        }
    }
    filterItems(searchTerm) {
        return this.allProductsList.filter((item) => item.product.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }
    addtocart(list, que) {
        list.count = que;
        if (list.discount_price) {
            list.minprice = list.discount_price;
            list.prices = list.discount_price;
        }
        else {
            list.minprice = list.price;
            list.prices = list.price;
        }
        const value = this.cartService.addItem(que, list.productName, list.id, list.oldPrice, list.newPrice, list.veg, list.nonVeg, list.image, list.offer);
        if (value === false) {
        }
        else {
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
        // this.storage.getItem('cartItems').then((val) => {
        //   if (val != null) {
        //     if (val.length !== 0) {
        this.router.navigate(['/cart']);
        //     } else {
        //       this.cartService.alert('Please add any one item');
        //     }
        //   } else {
        //     this.cartService.alert('Please add any one item');
        //   }
        // });
    }
};
LandingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-landing',
        template: _raw_loader_landing_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_landing_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LandingPage);



/***/ }),

/***/ 9242:
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-segment-button {\n  border: 1px solid #b3b3b3;\n  border-radius: 40px;\n  margin: 0px 5px;\n  text-transform: capitalize;\n}\n\n.segment-button-checked {\n  color: white;\n  background-color: green;\n  border: 1px solid green;\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  --color-hover: white;\n  --color-checked: white;\n}\n\n.avatar2 {\n  /*  width: 140px !important;\n  height: 120px !important;*/\n  margin-left: auto !important;\n  margin-right: auto !important;\n  height: 120px;\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0U7NEJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFRiIsImZpbGUiOiJsYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYjNiMztcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIG1hcmdpbjogMHB4IDVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC0tY29sb3ItaG92ZXI6IHdoaXRlO1xyXG4gIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XHJcbn1cclxuLmF2YXRhcjIge1xyXG4gIC8qICB3aWR0aDogMTQwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7Ki9cclxuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 7365:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar style=\"padding-top: 0px !important; --background: #f82424\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-row class=\"p0\">\n      <ion-col size=\"9\" class=\"p0 dd\">\n        <ion-searchbar\n          style=\"--border-radius: 25px\"\n          debounce=\"1000\"\n          class=\"id13\"\n          placeholder=\"Search for dishes \"\n          (ionChange)=\"getItems($event)\"\n          [(ngModel)]=\"queryText\"\n        ></ion-searchbar>\n      </ion-col>\n      <ion-col size=\"2\" class=\"p0\">\n        <button (click)=\"gocart()\" ion-button class=\"nav_btn floatRight\">\n          <ion-icon\n            name=\"cart\"\n            style=\"font-size: 48px !important; color: white\"\n          ></ion-icon>\n          <span class=\"cart\">{{cartService.getCartLength()}}</span>\n        </button>\n        <div class=\"clear\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background: #d2d2d24d\">\n  <div style=\"background: white; padding: 5px 0px\">\n    <ion-segment [(ngModel)]=\"type\" scrollable style=\"margin-top: 5px\">\n      <ion-segment-button\n        (click)=\"segmentChanged(cat)\"\n        *ngFor=\"let cat of categories\"\n        [value]=\"cat.category\"\n        >{{cat.catName}}</ion-segment-button\n      >\n    </ion-segment>\n  </div>\n  <div *ngIf=\"!queryText\">\n    <div *ngIf=\"products\">\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of products;let index=index;\">\n          <!-- src=\"../../../assets/imgs/defaultimage.png\" -->\n          <ion-card class=\"trending-card pad-5\">\n            <img\n              src=\"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg\"\n              class=\"avatar2 lazyload\"\n            />\n            <div style=\"display: -webkit-inline-box; position: relative\">\n              <img\n                item-start\n                class=\"id5 lazyload\"\n                src=\"../../../assets/imgs/veg.png\"\n                *ngIf=\"item.veg === 1\"\n              />\n              <img\n                item-start\n                class=\"id5 lazyload\"\n                src=\"../../../assets/imgs/non-veg.png\"\n                *ngIf=\"item.nonVeg === 1\"\n              />\n              <p\n                class=\"p-l-r-5 textLeft\"\n                style=\"\n                  word-break: normal;\n                  font-family: 'Open Sans', sans-serif;\n                  color: #333;\n                  font-weight: 500;\n                  margin: 0px 0px 0px 15px;\n                  height: 20px;\n                \"\n              >\n                {{item.productName | titlecase}}\n              </p>\n            </div>\n            <ion-row>\n              <ion-col class=\"ion-no-padding\" size=\"12\">\n                <p *ngIf=\"item.oldPrice\" class=\"p-l-r-5 textLeft price-c\">\n                  &#8377; {{item.oldPrice }}\n                  <!-- </p> -->\n                  <span *ngIf=\"item.newPrice\" class=\"p-l-r-5 textLeft price-o\">\n                    &#8377; {{item.newPrice }}\n                  </span>\n                </p>\n                <p *ngIf=\"!item.newPrice\" class=\"p-l-r-5 textLeft price-o\">\n                  &#8377; {{item.oldPrice }}\n                </p>\n              </ion-col>\n              <ion-col\n                class=\"ion-no-padding ion-text-capitalize ion-text-center\"\n                size=\"12\"\n              >\n                <p item-end class=\"ho4\" *ngIf=\"item.count !== 0\">\n                  <ion-icon\n                    (click)=\"remove(item, minus(item.count))\"\n                    class=\"ho5\"\n                    name=\"remove-circle-outline\"\n                  ></ion-icon\n                  ><span class=\"ho6\"> {{item.count}}</span>\n                  <ion-icon\n                    class=\"ho7\"\n                    (click)=\"addtocart(item,pluscount(item.count))\"\n                    name=\"add-circle-outline\"\n                  ></ion-icon>\n                </p>\n                <ion-button\n                  *ngIf=\"item.count === 0\"\n                  class=\"addtocart br10\"\n                  fill=\"outline\"\n                  (click)=\"addtocart(item,pluscount(item.count))\"\n                  color=\"success\"\n                  >Add</ion-button\n                >\n              </ion-col>\n            </ion-row>\n            <!-- <div >\n              <div class=\"card-item-title\">\n\n              </div>\n              <div class=\"card-item-title\">\n                             </div>\n            </div> -->\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf=\"!products\">\n      <img\n        style=\"position: absolute; top: 30%\"\n        src=\"https://www.ibellstore.com/images/no-item-found-here.png\"\n      />\n    </div>\n  </div>\n  <div *ngIf=\"queryText\">\n    <div *ngIf=\"searchProductList\">\n      <ion-row>\n        <ion-col\n          size=\"6\"\n          *ngFor=\"let item of searchProductList;let index=index;\"\n        >\n          <!-- src=\"../../../assets/imgs/defaultimage.png\" -->\n          <ion-card class=\"trending-card pad-5\">\n            <img\n              src=\"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg\"\n              class=\"avatar2 lazyload\"\n            />\n            <div style=\"display: -webkit-inline-box; position: relative\">\n              <img\n                item-start\n                class=\"id5 lazyload\"\n                src=\"../../../assets/imgs/veg.png\"\n                *ngIf=\"item.veg === 1\"\n              />\n              <img\n                item-start\n                class=\"id5 lazyload\"\n                src=\"../../../assets/imgs/non-veg.png\"\n                *ngIf=\"item.nonVeg === 1\"\n              />\n              <p\n                class=\"p-l-r-5 textLeft\"\n                style=\"\n                  word-break: normal;\n                  font-family: 'Open Sans', sans-serif;\n                  color: #333;\n                  font-weight: 500;\n                  margin: 0px 0px 0px 15px;\n                  height: 20px;\n                \"\n              >\n                {{item.productName | titlecase}}\n              </p>\n            </div>\n            <ion-row>\n              <ion-col class=\"ion-no-padding\" size=\"12\">\n                <p *ngIf=\"item.oldPrice\" class=\"p-l-r-5 textLeft price-c\">\n                  &#8377; {{item.oldPrice }}\n                  <!-- </p> -->\n                  <span *ngIf=\"item.newPrice\" class=\"p-l-r-5 textLeft price-o\">\n                    &#8377; {{item.newPrice }}\n                  </span>\n                </p>\n                <p *ngIf=\"!item.newPrice\" class=\"p-l-r-5 textLeft price-o\">\n                  &#8377; {{item.oldPrice }}\n                </p>\n              </ion-col>\n              <ion-col class=\"ion-no-padding ion-text-capitalize\" size=\"12\">\n                <p item-end class=\"ho4\" *ngIf=\"item.count !== 0\">\n                  <ion-icon\n                    (click)=\"remove(item, minus(item.count))\"\n                    class=\"ho5\"\n                    name=\"remove-circle-outline\"\n                  ></ion-icon\n                  ><span class=\"ho6\"> {{item.count}}</span>\n                  <ion-icon\n                    class=\"ho7\"\n                    (click)=\"addtocart(item,pluscount(item.count))\"\n                    name=\"add-circle-outline\"\n                  ></ion-icon>\n                </p>\n                <ion-button\n                  *ngIf=\"item.count === 0\"\n                  class=\"addtocart br10\"\n                  fill=\"outline\"\n                  (click)=\"addtocart(item,pluscount(item.count))\"\n                  color=\"success\"\n                  >Add</ion-button\n                >\n              </ion-col>\n            </ion-row>\n            <!-- <div >\n              <div class=\"card-item-title\">\n\n              </div>\n              <div class=\"card-item-title\">\n                             </div>\n            </div> -->\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf=\"!searchProductList\">\n      <img\n        style=\"position: absolute; top: 30%\"\n        src=\"https://www.ibellstore.com/images/no-item-found-here.png\"\n      />\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_landing_landing_module_ts.js.map