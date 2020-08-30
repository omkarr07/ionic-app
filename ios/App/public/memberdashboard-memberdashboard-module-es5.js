(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["memberdashboard-memberdashboard-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/memberdashboard/memberdashboard.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/memberdashboard/memberdashboard.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDashboardMemberdashboardMemberdashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header hidden>\n  <ion-toolbar>\n    <ion-title>dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-list style=\"height: 220px; background-color:#004d99\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"9\" mode=\"md\" class=\"ion-padding\" >\n          \n            <ion-label style=\"font-size: 25px;\" color=\"light\">Member Name</ion-label>\n            <br>\n          <ion-label color=\"medium\">Wing/Room-no.</ion-label> \n        </ion-col>\n\n        <ion-col size=\"3\" mode=\"md\" class=\"ion-padding\">\n          <div>\n            <ion-avatar>\n              <img src=\"../../assets/hhh.jpg\" />\n            </ion-avatar>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n  <ion-grid class=\"ion-no-margin \">\n    \n<ion-row>\n      <ion-col size=\"12\" >\n        <ion-card style=\"margin-top: -105px;  \"  class=\"ion-padding\">\n          <ion-grid >\n            <ion-row>\n              <ion-col size=\"6\">\n                \n                  <img class=\"ion-padding\"  src=\"../../../assets/document.png\" />\n                \n              </ion-col>\n              \n              <ion-col size=\"6\">\n               \n                  <ion-text color=\"primary \" >\n                    <b><p style=\"margin-top: 40%; font-size: large;\">View/Pay Bill</p></b>\n                  </ion-text>\n              </ion-col>\n             \n    \n            </ion-row>\n          </ion-grid>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card (click)=\"comp()\" class=\"ion-padding\" >\n          <img class=\"ion-padding\" src=\"../../assets/register.png\" />\n          <ion-text color=\"primary \" class=\"ion-text-center\" >\n            \n              <b><p style=\"font-size: large;\">Complaint Regestration</p></b>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"ion-padding\" >\n          <img class=\"ion-padding\" src=\"../../assets/paper.png\" />\n          <ion-text color=\"primary \"  class=\"ion-text-center\">\n            <b><p style=\"font-size: large;\">View all Transaction</p></b>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"ion-no-margin ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card class=\"ion-padding\">\n          <img class=\"ion-padding\" src=\"../../assets/document (1).png\" />\n          <ion-text color=\"primary \" class=\"ion-text-center\" >\n            <b><p style=\"font-size: large;\">Notices</p></b>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"ion-padding\" >\n          <img class=\"ion-padding\" src=\"../../assets/list.png\" />\n          <ion-text color=\"primary \"  class=\"ion-text-center\">\n            <b><p style=\"font-size: large;\">Rules</p></b>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/dashboard/memberdashboard/memberdashboard-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/dashboard/memberdashboard/memberdashboard-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: MemberdashboardPageRoutingModule */

    /***/
    function srcAppDashboardMemberdashboardMemberdashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberdashboardPageRoutingModule", function () {
        return MemberdashboardPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _memberdashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./memberdashboard.page */
      "./src/app/dashboard/memberdashboard/memberdashboard.page.ts");

      var routes = [{
        path: '',
        component: _memberdashboard_page__WEBPACK_IMPORTED_MODULE_3__["MemberdashboardPage"]
      }];

      var MemberdashboardPageRoutingModule = function MemberdashboardPageRoutingModule() {
        _classCallCheck(this, MemberdashboardPageRoutingModule);
      };

      MemberdashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MemberdashboardPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/dashboard/memberdashboard/memberdashboard.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/dashboard/memberdashboard/memberdashboard.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MemberdashboardPageModule */

    /***/
    function srcAppDashboardMemberdashboardMemberdashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberdashboardPageModule", function () {
        return MemberdashboardPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _memberdashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./memberdashboard-routing.module */
      "./src/app/dashboard/memberdashboard/memberdashboard-routing.module.ts");
      /* harmony import */


      var _memberdashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./memberdashboard.page */
      "./src/app/dashboard/memberdashboard/memberdashboard.page.ts");

      var MemberdashboardPageModule = function MemberdashboardPageModule() {
        _classCallCheck(this, MemberdashboardPageModule);
      };

      MemberdashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _memberdashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["MemberdashboardPageRoutingModule"]],
        declarations: [_memberdashboard_page__WEBPACK_IMPORTED_MODULE_6__["MemberdashboardPage"]]
      })], MemberdashboardPageModule);
      /***/
    },

    /***/
    "./src/app/dashboard/memberdashboard/memberdashboard.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/dashboard/memberdashboard/memberdashboard.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDashboardMemberdashboardMemberdashboardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background:\"rgb(63, 11, 109);\" ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL21lbWJlcmRhc2hib2FyZC9tZW1iZXJkYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9tZW1iZXJkYXNoYm9hcmQvbWVtYmVyZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOlwicmdiKDYzLCAxMSwgMTA5KTtcIlxyXG4gICAgXHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/dashboard/memberdashboard/memberdashboard.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/dashboard/memberdashboard/memberdashboard.page.ts ***!
      \*******************************************************************/

    /*! exports provided: MemberdashboardPage */

    /***/
    function srcAppDashboardMemberdashboardMemberdashboardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberdashboardPage", function () {
        return MemberdashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var MemberdashboardPage = /*#__PURE__*/function () {
        function MemberdashboardPage(menuController, route, sb, nav) {
          _classCallCheck(this, MemberdashboardPage);

          this.menuController = menuController;
          this.route = route;
          this.sb = sb;
          this.nav = nav;
          this.menuController.enable(true);
          this.sb.backgroundColorByHexString("#004d99");
        }

        _createClass(MemberdashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sb.backgroundColorByHexString("#004d99");
            this.nav.navigateRoot("/dashboard/memberdashboard");
          }
        }, {
          key: "comp",
          value: function comp() {
            this.route.navigateByUrl("/complaints");
          }
        }]);

        return MemberdashboardPage;
      }();

      MemberdashboardPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      MemberdashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-memberdashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./memberdashboard.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/memberdashboard/memberdashboard.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./memberdashboard.page.scss */
        "./src/app/dashboard/memberdashboard/memberdashboard.page.scss"))["default"]]
      })], MemberdashboardPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=memberdashboard-memberdashboard-module-es5.js.map