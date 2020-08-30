(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header hidden>\n  <ion-toolbar>\n    <ion-title>dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list style=\"height: 220px; background-color: #004d99\n  ;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"9\" mode=\"md\" class=\"ion-padding\" >\n          \n            <ion-label style=\"font-size: 25px;\" color=\"light\">Admin Name</ion-label>\n            <br>\n          <ion-label color=\"medium\">Society name</ion-label> \n        </ion-col>\n\n        <ion-col size=\"3\" mode=\"md\" class=\"ion-padding\">\n          <div>\n            <ion-avatar>\n              <img src=\"../../assets/hhh.jpg\" />\n            </ion-avatar>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" >\n          <ion-card (click)=\"bill()\"   class=\"ion-padding\" style=\"margin-top: -105px;\" >\n            <img class=\"ion-padding\"  src=\"../../assets/document.png\" />\n            <ion-text color=\"primary \" class=\"ion-text-center \" >\n              <b><p style=\"font-size: 14px;\" >Generate Maintenance</p></b>\n            </ion-text>\n          </ion-card>\n        </ion-col>\n\n\n\n\n        \n  \n        <ion-col size=\"6\">\n          <ion-card (click)=\"si()\" style=\"margin-top: -105px;\" class=\"ion-padding\">\n            <img class=\"ion-padding\" src=\"../../assets/building.png\" />\n            <ion-text color=\"primary \" class=\"ion-text-center\">\n              <b><p style=\"font-size: 14px;\" >Society Information</p></b>\n                  </ion-text>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-card (click)=\"vm()\"  class=\"ion-padding\" >\n            <img class=\"ion-padding\" src=\"../../assets/ff.png\" />\n            <ion-text color=\"primary\"   class=\"ion-text-center\">\n             <b><p style=\"font-size: 15px;\" >View Members</p></b> \n            </ion-text>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-card (click)=\"pnoc()\" class=\"ion-padding\">\n            <img class=\"ion-padding\" src=\"../../assets/document (1).png\" />\n            <ion-text color=\"primary \" class=\"ion-text-center\">\n              <b><p style=\"font-size: 15px;\">Post Notices</p></b>\n            </ion-text>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-card class=\"ion-padding \">\n            <img class=\"ion-padding\" src=\"../../assets/register.png\" />\n            <ion-text color=\"primary \" class=\"ion-text-center\">\n              <b><p style=\"font-size: 15px;\">View Complaints</p></b>\n            </ion-text>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-card class=\"ion-padding\" >\n            <img class=\"ion-padding\" src=\"../../assets/staff.png\" />\n            <ion-text color=\"primary \" class=\"ion-text-center\">\n              <b><p style=\"font-size: 15px;\">Staff Information</p></b>\n            </ion-text>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-card class=\"ion-padding\">\n            <img class=\"ion-padding\" src=\"../../assets/question.png\" />\n            <ion-text color=\"primary \" class=\"ion-text-center\">\n              <b><p style=\"font-size: 15px;\">FAQ</p></b>\n            </ion-text>\n          </ion-card>\n        </ion-col>\n        \n        <ion-col size=\"6\">\n          <ion-card class=\"ion-padding\">\n            <img class=\"ion-padding\" src=\"../../assets/3119267.png\" />\n            <ion-text color=\"primary \" class=\"ion-text-center\">\n              <b><p style=\"font-size: 15px;\">emergency</p></b>\n            </ion-text>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    },
    {
        path: 'memberdashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | memberdashboard-memberdashboard-module */ "memberdashboard-memberdashboard-module").then(__webpack_require__.bind(null, /*! ./memberdashboard/memberdashboard.module */ "./src/app/dashboard/memberdashboard/memberdashboard.module.ts")).then(m => m.MemberdashboardPageModule)
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background:\"rgb(63, 11, 109);\" ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQ0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6XCJyZ2IoNjMsIDExLCAxMDkpO1wiXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");





let DashboardPage = class DashboardPage {
    constructor(menuController, route, sb, nav) {
        this.menuController = menuController;
        this.route = route;
        this.sb = sb;
        this.nav = nav;
        this.menuController.enable(true);
        this.sb.backgroundColorByHexString("#004d99");
    }
    ngOnInit() {
        this.sb.backgroundColorByHexString("#004d99");
        this.nav.navigateRoot("/dashboard");
    }
    pnoc() {
        this.route.navigateByUrl("/postnotices");
    }
    bill() {
        this.route.navigateByUrl("/generatemain");
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")).default]
    })
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map