(self["webpackChunkresturantapp"] = self["webpackChunkresturantapp"] || []).push([["src_app_pages_cart_cart_module_ts"],{

/***/ 485:
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageRoutingModule": () => (/* binding */ CartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page */ 3278);




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartPageRoutingModule);



/***/ }),

/***/ 313:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageModule": () => (/* binding */ CartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-routing.module */ 485);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page */ 3278);







let CartPageModule = class CartPageModule {
};
CartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartPageRoutingModule
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_1__.CartPage]
    })
], CartPageModule);



/***/ }),

/***/ 3278:
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": () => (/* binding */ CartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cart.page.html */ 3516);
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.scss */ 8365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/location.service */ 7080);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/order.service */ 8132);



/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/prefer-for-of */






let CartPage = class CartPage {
    constructor(router, orderService, cartService, alertCtrl, navCtrl, locationService) {
        this.router = router;
        this.orderService = orderService;
        this.cartService = cartService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.locationService = locationService;
        this.totalAmount = 0;
        this.minimumorder = 100;
        this.maximumorder = 5000;
        this.packagingCost = 50;
        this.distancevalue = 0;
        this.tax = '';
        this.instruction = '';
    }
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
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
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
        }
        else {
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
        if (Number(this.minimumorder) > 0 &&
            this.total < Number(this.minimumorder)) {
            this.cartService.alert('The minimum order value should be ₹' + this.minimumorder);
        }
        else if (Number(this.maximumorder) > 0 &&
            this.total > Number(this.maximumorder)) {
            this.cartService.alert('The maximum order value should be ₹' + this.maximumorder);
        }
        else {
            if (this.address) {
                this.cartService.instruction = this.instruction;
                this.orderService.addOrder(this.cartitem);
            }
            else {
                this.cartService.alert('please add address');
            }
        }
    }
    back() {
        this.router.navigate(['/landing']);
        // this.navCtrl.pop();
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
    addaddress() {
        this.locationService.getLocation();
        this.locationService.address.subscribe((response) => {
            console.log(response);
            // eslint-disable-next-line max-len
            // const s =
            //   '{"latitude":11.205769199999999,"longitude":78.2219379,"countryCode":"IN","countryName":"India","postalCode":"637002","administrativeArea":"Tamil Nadu","subAdministrativeArea":"Namakkal","locality":"","subLocality":"","thoroughfare":"Way to Salapalayam","subThoroughfare":"","areasOfInterest":["Way to Salapalayam"]}';
            // const temp = JSON.parse(s);
            const temp = JSON.parse(response);
            console.log(temp);
            this.address =
                temp.locality +
                    ',' +
                    temp.sublocality +
                    ',' +
                    temp.subAdministrativeArea +
                    ',' +
                    temp.administrativeArea +
                    ',' +
                    temp.postalCode +
                    '.';
        });
        // console.log(this.address);
        // if (data) {
        //   this.address = data;
        //   const distance = this.distance(this.resturant.latitude, this.resturant.longitude, data.lattitude, data.longitude);
        //   this.distancevalue = distance;
        //   console.log(distance);
        //     if (this.general_setting.max_delivery_distance > distance) {
        //       this.deliveryFeeCalculation();
        //       localStorage.cusaddressId = this.address.name;
        //     }
        //     else {
        //       this.address = [];
        //       localStorage.cusaddressId = '';
        //       this.alert('Sorry! We do serve there yet');
        //     }
        // }
    }
    distance(lat1, lon1, lat2, lon2) {
        if (lat1 === lat2 && lon1 === lon2) {
            return 0;
        }
        else {
            const radlat1 = (Math.PI * lat1) / 180;
            const radlat2 = (Math.PI * lat2) / 180;
            const theta = lon1 - lon2;
            const radtheta = (Math.PI * theta) / 180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) +
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
};
CartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService }
];
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CartPage);



/***/ }),

/***/ 8365:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".grid-bg {\n  padding: 5px;\n  background: #fff;\n  margin: 10px 0px;\n}\n\n.ho4 {\n  position: absolute;\n  top: 0px;\n  right: 0%;\n  border: 1px solid #eee;\n  /*  border-radius: 5px;*/\n  padding-left: 10px;\n  margin-right: 8px !important;\n}\n\n.ho5 {\n  float: left;\n  padding: 5px 10px 5px 5px;\n  font-size: 14px;\n  font-weight: bold;\n  margin-left: -10px;\n  color: red;\n}\n\n.ho6 {\n  font-size: 14px;\n  float: left;\n  margin-top: 3px;\n  text-align: center;\n  width: 21px;\n  color: #333;\n}\n\n.ho7 {\n  color: green;\n  margin-left: 0;\n  padding: 5px 6px 6px 10px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.card-ov {\n  border: 2px dashed #ddd;\n  box-shadow: none !important;\n  margin: 10px 0;\n  width: 100%;\n}\n\n.text-siz {\n  color: #6f6f6f;\n  font-weight: 800;\n  font-family: \"Open Sans\", sans-serif !important;\n}\n\n.f-s-price {\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif !important;\n}\n\n.cart_wrapper {\n  width: 100%;\n}\n\n.cart_wrapper h6 {\n  color: #606060;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.cart_wrapper h4 {\n  margin: 0px;\n  padding: 0px;\n  color: #616161;\n  font-size: 16px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.cart_wrapper .item_textarea {\n  width: 100%;\n  border-left: 0px;\n  border-right: 0px;\n  border-top: 0px;\n  color: #797979;\n}\n\n.cart_wrapper .grid {\n  color: #656565;\n  margin-top: 20px;\n  font-size: 15px;\n}\n\n.cart_wrapper .add_cart {\n  height: 45px;\n  border-radius: 6px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: capitalize;\n  font-weight: 400;\n  font-size: 20px;\n  position: relative;\n}\n\n.addtocart {\n  padding: 0px 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsK0NBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7QUFNRjs7QUFKRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUtKOztBQUZFO0VBQ0UsV0FBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUdKOztBQUFFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUdBO0VBQ0UsMkJBQUE7QUFBRiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWJnIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcbi5obzQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICByaWdodDogMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAvKiAgYm9yZGVyLXJhZGl1czogNXB4OyovXHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5obzUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICBjb2xvcjogcmVkOyAvLyBiYWNrZ3JvdW5kOiAjMDk5RTQ0O1xyXG59XHJcblxyXG4uaG82IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjFweDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmhvNyB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDVweCA2cHggNnB4IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jYXJkLW92IHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI2RkZDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRleHQtc2l6IHtcclxuICBjb2xvcjogIzZmNmY2ZjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmYtcy1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcnRfd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGg2IHtcclxuICAgIGNvbG9yOiAjNjA2MDYwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjNjE2MTYxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gIC5pdGVtX3RleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5YTlhOWE7XHJcbiAgICBib3JkZXItbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXItdG9wOiAwcHg7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICB9XHJcblxyXG4gIC5ncmlkIHtcclxuICAgIGNvbG9yOiAjNjU2NTY1O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5hZGRfY2FydCB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkdG9jYXJ0IHtcclxuICBwYWRkaW5nOiAwcHggOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 3516:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar style=\"padding-top: 0px !important; --background: #f82424\">\n    <ion-button fill=\"clear\" style=\"float: left\" (click)=\"back()\">\n      <ion-icon\n        slot=\"start\"\n        style=\"color: white\"\n        name=\"arrow-back-outline\"\n      ></ion-icon>\n    </ion-button>\n    <div class=\"nav_header_title\">Your Cart</div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed class=\"grid-bg\">\n    <ion-row *ngFor=\"let l of cartitem;let index = index\">\n      <ion-col>\n        <h5 style=\"font-weight: 500\">{{l.productName}}</h5>\n        <h5 class=\"font-secondary color2\">'&#8377;{{l.newPrice}}</h5>\n      </ion-col>\n      <ion-col size=\"4\">\n        <p item-end class=\"ho4\">\n          <ion-icon\n            (click)=\"remove(l, minus(l.quantity))\"\n            class=\"ho5\"\n            name=\"remove-circle-outline\"\n          ></ion-icon\n          ><span class=\"ho6\"> {{l.quantity}}</span>\n          <ion-icon\n            (click)=\"addtocart(l,pluscount(l.quantity))\"\n            name=\"add-circle-outline\"\n            class=\"ho7\"\n          ></ion-icon>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid fixed class=\"grid-bg cart_wrapper\">\n    <h4>Special Instructions</h4>\n    <ion-input\n      type=\"text\"\n      value=\"\"\n      class=\"item_textarea\"\n      [ngModelOptions]=\"{standalone: true}\"\n      [(ngModel)]=\"instruction\"\n      placeholder=\"Please add any special instructions\"\n    ></ion-input>\n  </ion-grid>\n  <div class=\"cart_wrapper\">\n    <ion-grid fixed class=\"grid-bg\">\n      <div *ngIf=\"!address\" (click)=\"addaddress()\">\n        <ion-row>\n          <ion-col style=\"display: flex\">\n            <ion-avatar item-start style=\"--border-radius: 0px\">\n              <img style=\"height: 50px\" src=\"assets/imgs/home.svg\" />\n            </ion-avatar>\n            <h2 style=\"font-size: 16px\">Add Address</h2>\n            <ion-icon\n              name=\"arrow-forward-outline\"\n              style=\"margin: 15px 20px; font-size: 25px\"\n            ></ion-icon>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf=\"address\" class=\"id10\">\n        <ion-row>\n          <ion-col size=\"12\" style=\"display: flex\">\n            <img src=\"assets/imgs/home.svg\" />\n            <h2>Deliver To</h2>\n          </ion-col>\n          <ion-col size=\"12\">\n            <p class=\"font-secondary\">{{address}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n    <ion-grid fixed class=\"grid-bg\">\n      <h4>Restaurant Bill</h4>\n      <ion-row>\n        <ion-col col-6 class=\"textLeft font-secondary\"> Item Total </ion-col>\n        <ion-col col-6 class=\"textRight text-siz f-s-price\">\n          &#8377;{{total}}\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"packagingCost !== 0\">\n        <ion-col col-6 class=\"textLeft font-secondary\">\n          Packaging Charges\n        </ion-col>\n        <ion-col col-6 class=\"textRight text-siz f-s-price\">\n          &#8377; {{packagingCost }}\n        </ion-col>\n      </ion-row>\n      <ion-row\n        style=\"\n          border-bottom: 1px dashed #dedede;\n          padding-bottom: 12px;\n          margin-bottom: 12px;\n        \"\n      >\n        <ion-col col-6 class=\"textLeft font-secondary\">\n          GST ({{tax}}%)\n        </ion-col>\n        <ion-col col-6 class=\"textRight text-siz f-s-price\">\n          &#8377;{{taxvalue}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"deliveryFee !== 0\">\n        <ion-col col-6 class=\"textLeft font-secondary\">\n          Delivery Charges\n        </ion-col>\n        <ion-col col-6 class=\"textRight text-siz f-s-price\">\n          &#8377; {{deliveryFee}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 class=\"textLeft font-secondary\">\n          <strong class=\"text-siz f-s-price\">To Pay</strong>\n        </ion-col>\n        <ion-col col-6 class=\"textRight text-siz f-s-price\">\n          <strong class=\"text-siz f-s-pricez\"> &#8377;{{totalAmount}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar (click)=\"checkout()\" style=\"--background: #f82424\">\n    <ion-row>\n      <ion-col size=\"6\"\n        ><h5\n          class=\"font-secondary\"\n          style=\"\n            margin: 15px 0;\n            font-weight: 600;\n            font-size: 15px;\n            color: white;\n            float: left;\n          \"\n        >\n          {{items}}\n          <span\n            style=\"color: white\"\n            *ngIf=\"items === 1 || items === 0\"\n            class=\"id9\"\n            >Item</span\n          ><span\n            style=\"color: white\"\n            *ngIf=\"items !== 1 && items !== 0\"\n            class=\"id9\"\n            >Items</span\n          >\n          &#8377; {{totalAmount}}\n        </h5></ion-col\n      >\n      <ion-col size=\"6\">\n        <ion-button\n          class=\"addtocart\"\n          fill=\"clear\"\n          style=\"\n            font-size: 14px;\n            font-weight: 600;\n            float: right;\n            --color: white;\n            --background: transparent;\n            border: none;\n          \"\n        >\n          PROCEED TO PAY\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cart_cart_module_ts.js.map