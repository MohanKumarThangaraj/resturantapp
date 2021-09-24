(self["webpackChunkresturantapp"] = self["webpackChunkresturantapp"] || []).push([["src_app_pages_orderhistory_orderhistory_module_ts"],{

/***/ 3795:
/*!*******************************************************************!*\
  !*** ./src/app/pages/orderhistory/orderhistory-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderhistoryPageRoutingModule": () => (/* binding */ OrderhistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _orderhistory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderhistory.page */ 9779);




const routes = [
    {
        path: '',
        component: _orderhistory_page__WEBPACK_IMPORTED_MODULE_0__.OrderhistoryPage
    }
];
let OrderhistoryPageRoutingModule = class OrderhistoryPageRoutingModule {
};
OrderhistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderhistoryPageRoutingModule);



/***/ }),

/***/ 817:
/*!***********************************************************!*\
  !*** ./src/app/pages/orderhistory/orderhistory.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderhistoryPageModule": () => (/* binding */ OrderhistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _orderhistory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderhistory-routing.module */ 3795);
/* harmony import */ var _orderhistory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderhistory.page */ 9779);







let OrderhistoryPageModule = class OrderhistoryPageModule {
};
OrderhistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _orderhistory_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderhistoryPageRoutingModule
        ],
        declarations: [_orderhistory_page__WEBPACK_IMPORTED_MODULE_1__.OrderhistoryPage]
    })
], OrderhistoryPageModule);



/***/ }),

/***/ 9779:
/*!*********************************************************!*\
  !*** ./src/app/pages/orderhistory/orderhistory.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderhistoryPage": () => (/* binding */ OrderhistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_orderhistory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./orderhistory.page.html */ 2229);
/* harmony import */ var _orderhistory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderhistory.page.scss */ 1146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let OrderhistoryPage = class OrderhistoryPage {
    constructor() {
        this.orderList = [];
        this.categories = [
            {
                category: 'Pending',
            },
            {
                category: 'Completed',
            },
            {
                category: 'All',
            },
        ];
        this.allOrderList = [];
    }
    ngOnInit() {
        const temp = localStorage.getItem('orderItems');
        if (temp) {
            this.allOrderList = JSON.parse(temp);
            this.segmentChanged('Pending');
        }
        else {
            this.orderList = [];
        }
    }
    segmentChanged(category) {
        this.selectedCategory = category;
        this.orderList = this.allOrderList.filter((item) => item.orderStatus === category);
        console.log(this.orderList);
    }
};
OrderhistoryPage.ctorParameters = () => [];
OrderhistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-orderhistory',
        template: _raw_loader_orderhistory_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_orderhistory_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderhistoryPage);



/***/ }),

/***/ 1146:
/*!***********************************************************!*\
  !*** ./src/app/pages/orderhistory/orderhistory.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Completed {\n  color: #4caf50 !important;\n  border: 1px solid #4caf50 !important;\n}\n\n.Placed {\n  color: #f44336 !important;\n  border: 1px solid #f44336 !important;\n}\n\n.Processing {\n  color: #ff5722 !important;\n  border: 1px solid #ff5722 !important;\n}\n\n.Cancelled {\n  color: #2196f3 !important;\n  border: 1px solid #2196f3 !important;\n}\n\nion-segment-button {\n  border: 1px solid #b3b3b3;\n  border-radius: 40px;\n  margin: 0px 5px;\n  text-transform: capitalize;\n}\n\n.segment-button-checked {\n  color: white;\n  background-color: green;\n  border: 1px solid green;\n  --indicator-color: transparent !important;\n  --indicator-color-checked: transparent !important;\n  --color-hover: white;\n  --color-checked: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG9DQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLG9DQUFBO0FBR0Y7O0FBREE7RUFDRSx5QkFBQTtFQUNBLG9DQUFBO0FBSUY7O0FBRkE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBS0Y7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBS0YiLCJmaWxlIjoib3JkZXJoaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Db21wbGV0ZWQge1xyXG4gIGNvbG9yOiAjNGNhZjUwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjYWY1MCAhaW1wb3J0YW50O1xyXG59XHJcbi5QbGFjZWQge1xyXG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG59XHJcbi5Qcm9jZXNzaW5nIHtcclxuICBjb2xvcjogI2ZmNTcyMiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjU3MjIgIWltcG9ydGFudDtcclxufVxyXG4uQ2FuY2VsbGVkIHtcclxuICBjb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjMgIWltcG9ydGFudDtcclxufVxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2IzYjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBtYXJnaW46IDBweCA1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLWNvbG9yLWhvdmVyOiB3aGl0ZTtcclxuICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 2229:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderhistory/orderhistory.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar style=\"padding-top: 0px !important; --background: #f82424\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <!-- <ion-title></ion-title> -->\n    <div class=\"nav_header_title\">Order History</div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background: #d2d2d24d\">\n  <div style=\"background: white; padding: 5px 0px\">\n    <ion-segment\n      [(ngModel)]=\"selectedCategory\"\n      scrollable\n      style=\"margin-top: 5px\"\n    >\n      <ion-segment-button\n        (click)=\"segmentChanged(cat.category)\"\n        *ngFor=\"let cat of categories\"\n        [value]=\"cat.category\"\n        >{{cat.category}}</ion-segment-button\n      >\n    </ion-segment>\n  </div>\n  <ion-row *ngIf=\"orderList.length\">\n    <ion-card\n      *ngFor=\"let l of orderList\"\n      style=\"width: 100%; padding: 10px; margin: 5px 10px 0px 10px\"\n    >\n      <div class=\"list_details\">\n        <ion-grid class=\"p0\" *ngIf=\"l\">\n          <ion-row>\n            <ion-col col-6 class=\"p0\">\n              <h4 style=\"font-size: 16px; margin: 5px 0px\">\n                <strong>#{{l.id}}</strong>\n              </h4>\n            </ion-col>\n            <ion-col col-6 class=\"p0 textRight\">\n              <h6 style=\"font-size: 16px; margin: 5px 0px\">\n                <strong> &#8377;{{l.totalAmount}}</strong>\n              </h6>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-8 class=\"p0\">\n              <p class=\"f-12\" style=\"margin: 5px 0px\">{{l.time | date}}</p>\n            </ion-col>\n            <ion-col col-4 class=\"p0 textRight\">\n              <p class=\"f-12\" style=\"margin: 5px 0px\">Delivery</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-8 class=\"p0\">\n              <p\n                *ngIf=\"l.products.length === 0 || l.products.length === 1\"\n                style=\"margin: 5px 0px\"\n              >\n                Item: {{l.products.length}}\n              </p>\n              <p\n                *ngIf=\"l.products.length !== 0 && l.products.length !== 1\"\n                style=\"margin: 5px 0px\"\n              >\n                Items: {{l.products.length}}\n              </p>\n            </ion-col>\n            <ion-col col-4 class=\"p0 textRight\">\n              <ion-button\n                fill=\"clear\"\n                *ngIf=\"l.orderStatus === 'Pending'\"\n                style=\"color: red; text-transform: capitalize\"\n                class=\"br10 button-outline-md-danger1\"\n              >\n                Order {{l.orderStatus}}\n              </ion-button>\n              <ion-button\n                fill=\"clear\"\n                style=\"text-transform: capitalize\"\n                *ngIf=\"l.orderStatus !== 'Pending'\"\n                [ngClass]=\"l.orderStatus\"\n                class=\"br10 button-outline-md-danger1\"\n              >\n                Order {{l.orderStatus}}\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-card>\n  </ion-row>\n  <ion-row *ngIf=\"!orderList.length\">\n    <img\n      style=\"position: absolute; top: 30%\"\n      src=\"../../../assets/imgs/noorder.png\"\n    />\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_orderhistory_orderhistory_module_ts.js.map