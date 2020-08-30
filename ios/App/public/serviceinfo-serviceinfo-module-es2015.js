(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serviceinfo-serviceinfo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/service-list/serviceinfo/serviceinfo.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service-list/serviceinfo/serviceinfo.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/service-list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Update Bill Item</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <form action=\"\" class=\"ion-padding\">\n      <div class=\"form-group\">\n        <label for=\"\">Item name</label>\n        <input type=\"text\" name=\"\" id=\"\" value=\"Parking Charges\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Notes ( Optional )</label>\n        <textarea name=\"\" id=\"\" cols=\"15\" rows=\"3\" class=\"form-control\"></textarea>\n      </div>\n    </form>\n  </ion-card>\n  <ion-card>\n    <form action=\"\" class=\"ion-padding\">\n      <div class=\"form-group\">\n        <label for=\"\">For owner ( self occupied )</label>\n        <input type=\"number\" name=\"\" id=\"\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">For rent</label>\n        <input type=\"number\" name=\"\" id=\"\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">For closed unit</label>\n        <input type=\"number\" name=\"\" id=\"\" class=\"form-control\">\n      </div>\n    </form>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"block\" [routerLink]=\"['/service-list']\" routerLinkActive=\"router-link-active\" >Save</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/service-list/serviceinfo/serviceinfo-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/service-list/serviceinfo/serviceinfo-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ServiceinfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceinfoPageRoutingModule", function() { return ServiceinfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _serviceinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceinfo.page */ "./src/app/service-list/serviceinfo/serviceinfo.page.ts");




const routes = [
    {
        path: '',
        component: _serviceinfo_page__WEBPACK_IMPORTED_MODULE_3__["ServiceinfoPage"]
    }
];
let ServiceinfoPageRoutingModule = class ServiceinfoPageRoutingModule {
};
ServiceinfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceinfoPageRoutingModule);



/***/ }),

/***/ "./src/app/service-list/serviceinfo/serviceinfo.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/service-list/serviceinfo/serviceinfo.module.ts ***!
  \****************************************************************/
/*! exports provided: ServiceinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceinfoPageModule", function() { return ServiceinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _serviceinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceinfo-routing.module */ "./src/app/service-list/serviceinfo/serviceinfo-routing.module.ts");
/* harmony import */ var _serviceinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceinfo.page */ "./src/app/service-list/serviceinfo/serviceinfo.page.ts");







let ServiceinfoPageModule = class ServiceinfoPageModule {
};
ServiceinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _serviceinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceinfoPageRoutingModule"]
        ],
        declarations: [_serviceinfo_page__WEBPACK_IMPORTED_MODULE_6__["ServiceinfoPage"]]
    })
], ServiceinfoPageModule);



/***/ }),

/***/ "./src/app/service-list/serviceinfo/serviceinfo.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/service-list/serviceinfo/serviceinfo.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UtbGlzdC9zZXJ2aWNlaW5mby9zZXJ2aWNlaW5mby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/service-list/serviceinfo/serviceinfo.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/service-list/serviceinfo/serviceinfo.page.ts ***!
  \**************************************************************/
/*! exports provided: ServiceinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceinfoPage", function() { return ServiceinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ServiceinfoPage = class ServiceinfoPage {
    constructor(menuCtrl, sb, router) {
        this.menuCtrl = menuCtrl;
        this.sb = sb;
        this.router = router;
        this.menuCtrl.enable(true);
        this.sb.backgroundColorByHexString("#3880ff");
    }
    ngOnInit() {
    }
};
ServiceinfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ServiceinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-serviceinfo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./serviceinfo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/service-list/serviceinfo/serviceinfo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./serviceinfo.page.scss */ "./src/app/service-list/serviceinfo/serviceinfo.page.scss")).default]
    })
], ServiceinfoPage);



/***/ })

}]);
//# sourceMappingURL=serviceinfo-serviceinfo-module-es2015.js.map