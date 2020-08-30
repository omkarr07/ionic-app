(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["societyjc-societyjc-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/societyjc/societyjc.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/societyjc/societyjc.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title >SELECT</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card style=\" height:'94%';\">\n    <ion-card-content style=\"margin-top: 20%;\"> \n    <ion-button [routerLink]=\"['/','societyjc','societyc']\" routerLinkActive=\"router-link-active\"  expand=\"block\" style=\"margin-top: 30px;\" >\n      Create Society\n    </ion-button>\n   \n\n<div class=\"ion-text-center\" style=\"margin-top: 30px;\">\n  <ion-label position=\"floating\" class=\"ion-text-center\"> OR</ion-label>\n</div>\n\n  <div style=\"border: 1px solid; margin-top: 30px;\" class=\"ion-margin\">\n  <ion-card-header>\n    <ion-card-subtitle class=\"ion-text-center\">Join Society through code, which should be issued by Admin</ion-card-subtitle>\n  </ion-card-header>\n  <center>\n    <ion-button class=\"ion-margin\" [routerLink]=\"['/','societyjc','societyj']\" routerLinkActive=\"router-link-active\" >\n      Join Society\n    </ion-button>\n  </center>\n  \n</div>\n  \n    </ion-card-content>\n</ion-card>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/societyjc/societyjc-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/societyjc/societyjc-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SocietyjcPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocietyjcPageRoutingModule", function() { return SocietyjcPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _societyjc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./societyjc.page */ "./src/app/societyjc/societyjc.page.ts");




const routes = [
    {
        path: '',
        component: _societyjc_page__WEBPACK_IMPORTED_MODULE_3__["SocietyjcPage"]
    },
    {
        path: 'societyc',
        loadChildren: () => __webpack_require__.e(/*! import() | societyc-societyc-module */ "societyc-societyc-module").then(__webpack_require__.bind(null, /*! ./societyc/societyc.module */ "./src/app/societyjc/societyc/societyc.module.ts")).then(m => m.SocietycPageModule)
    },
    {
        path: 'societyj',
        loadChildren: () => __webpack_require__.e(/*! import() | societyj-societyj-module */ "societyj-societyj-module").then(__webpack_require__.bind(null, /*! ./societyj/societyj.module */ "./src/app/societyjc/societyj/societyj.module.ts")).then(m => m.SocietyjPageModule)
    }
];
let SocietyjcPageRoutingModule = class SocietyjcPageRoutingModule {
};
SocietyjcPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SocietyjcPageRoutingModule);



/***/ }),

/***/ "./src/app/societyjc/societyjc.module.ts":
/*!***********************************************!*\
  !*** ./src/app/societyjc/societyjc.module.ts ***!
  \***********************************************/
/*! exports provided: SocietyjcPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocietyjcPageModule", function() { return SocietyjcPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _societyjc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./societyjc-routing.module */ "./src/app/societyjc/societyjc-routing.module.ts");
/* harmony import */ var _societyjc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./societyjc.page */ "./src/app/societyjc/societyjc.page.ts");







let SocietyjcPageModule = class SocietyjcPageModule {
};
SocietyjcPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _societyjc_routing_module__WEBPACK_IMPORTED_MODULE_5__["SocietyjcPageRoutingModule"]
        ],
        declarations: [_societyjc_page__WEBPACK_IMPORTED_MODULE_6__["SocietyjcPage"]]
    })
], SocietyjcPageModule);



/***/ }),

/***/ "./src/app/societyjc/societyjc.page.scss":
/*!***********************************************!*\
  !*** ./src/app/societyjc/societyjc.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  --background: #e6ffff ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWV0eWpjL3NvY2lldHlqYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc29jaWV0eWpjL3NvY2lldHlqYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICAjZTZmZmZmIDtcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/societyjc/societyjc.page.ts":
/*!*********************************************!*\
  !*** ./src/app/societyjc/societyjc.page.ts ***!
  \*********************************************/
/*! exports provided: SocietyjcPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocietyjcPage", function() { return SocietyjcPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");




let SocietyjcPage = class SocietyjcPage {
    constructor(navctrl, menuCtrl, sb) {
        this.navctrl = navctrl;
        this.menuCtrl = menuCtrl;
        this.sb = sb;
        this.menuCtrl.enable(false);
        this.sb.backgroundColorByHexString("#3880ff");
    }
    ngOnInit() {
    }
};
SocietyjcPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] }
];
SocietyjcPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-societyjc',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./societyjc.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/societyjc/societyjc.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./societyjc.page.scss */ "./src/app/societyjc/societyjc.page.scss")).default]
    })
], SocietyjcPage);



/***/ })

}]);
//# sourceMappingURL=societyjc-societyjc-module-es2015.js.map