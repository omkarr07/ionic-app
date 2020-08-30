(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-list-service-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/service-list/service-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service-list/service-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/generatemain\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>service-list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item [routerLink]=\"['/','service-list','serviceinfo']\" routerLinkActive=\"router-link-active\">\n      <ion-label>Water charges</ion-label>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"  ></ion-icon>\n    </ion-item>\n    <ion-item [routerLink]=\"['/cleaning']\" routerLinkActive=\"router-link-active\">\n      <ion-label>Cleaning charges</ion-label>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item [routerLink]=\"['/electric']\" routerLinkActive=\"router-link-active\">\n      <ion-label>Electric charges</ion-label>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item [routerLink]=\"['/parking']\" routerLinkActive=\"router-link-active\">\n      <ion-label>Parking charges</ion-label>\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </ion-card>\n  \n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n      <ion-fab-button (click)=\"onnew()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n \n  \n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/service-list/service-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/service-list/service-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ServiceListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceListPageRoutingModule", function() { return ServiceListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-list.page */ "./src/app/service-list/service-list.page.ts");




const routes = [
    {
        path: '',
        component: _service_list_page__WEBPACK_IMPORTED_MODULE_3__["ServiceListPage"]
    },
    {
        path: 'serviceinfo',
        loadChildren: () => __webpack_require__.e(/*! import() | serviceinfo-serviceinfo-module */ "serviceinfo-serviceinfo-module").then(__webpack_require__.bind(null, /*! ./serviceinfo/serviceinfo.module */ "./src/app/service-list/serviceinfo/serviceinfo.module.ts")).then(m => m.ServiceinfoPageModule)
    },
    {
        path: 'addservice',
        loadChildren: () => __webpack_require__.e(/*! import() | addservice-addservice-module */ "addservice-addservice-module").then(__webpack_require__.bind(null, /*! ./addservice/addservice.module */ "./src/app/service-list/addservice/addservice.module.ts")).then(m => m.AddservicePageModule)
    }
];
let ServiceListPageRoutingModule = class ServiceListPageRoutingModule {
};
ServiceListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceListPageRoutingModule);



/***/ }),

/***/ "./src/app/service-list/service-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/service-list/service-list.module.ts ***!
  \*****************************************************/
/*! exports provided: ServiceListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceListPageModule", function() { return ServiceListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _service_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-list-routing.module */ "./src/app/service-list/service-list-routing.module.ts");
/* harmony import */ var _service_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-list.page */ "./src/app/service-list/service-list.page.ts");







let ServiceListPageModule = class ServiceListPageModule {
};
ServiceListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceListPageRoutingModule"]
        ],
        declarations: [_service_list_page__WEBPACK_IMPORTED_MODULE_6__["ServiceListPage"]]
    })
], ServiceListPageModule);



/***/ }),

/***/ "./src/app/service-list/service-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/service-list/service-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UtbGlzdC9zZXJ2aWNlLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/service-list/service-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/service-list/service-list.page.ts ***!
  \***************************************************/
/*! exports provided: ServiceListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceListPage", function() { return ServiceListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");





let ServiceListPage = class ServiceListPage {
    constructor(menuCtrl, sb, router) {
        this.menuCtrl = menuCtrl;
        this.sb = sb;
        this.router = router;
        this.menuCtrl.enable(true);
        this.sb.backgroundColorByHexString("#3880ff");
    }
    ngOnInit() {
    }
    onnew() {
        this.router.navigateByUrl("/service-list/addservice");
    }
};
ServiceListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ServiceListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./service-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/service-list/service-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./service-list.page.scss */ "./src/app/service-list/service-list.page.scss")).default]
    })
], ServiceListPage);



/***/ })

}]);
//# sourceMappingURL=service-list-service-list-module-es2015.js.map