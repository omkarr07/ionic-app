(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["societyc-societyc-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/societyjc/societyc/societyc.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/societyjc/societyc/societyc.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSocietyjcSocietycSocietycPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" >\n  <ion-toolbar  color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"societyjc\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Society Create Form</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-margin\"> \n      <form >       \n        <ion-item>\n          <ion-label position=\"floating\"><ion-icon name=\"business-outline\"></ion-icon> &nbsp; Society Name <ion-text color=\"danger\">*</ion-text> </ion-label>\n            <ion-input type=\"text\"></ion-input>\n        </ion-item>\n<br>\n        <ion-item>\n            <ion-label  position=\"floating\">Number of wing's <ion-text color=\"danger\">*</ion-text></ion-label>\n                <ion-input type=\"number\" ></ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n            <ion-label  position=\"floating\">Number of Floor's <ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-input type=\"number\" ></ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n            <ion-label position=\"floating\">Total Number of Room's</ion-label>\n            <ion-input type=\"number\"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label position=\"floating\">Address <ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-textarea ></ion-textarea>\n        </ion-item>\n\n          <ion-grid  >\n            <ion-row>\n              <ion-col size=\"5\" style=\"margin-top: 10px;\">\n                \n                <ion-label >State <ion-text color=\"danger\">*</ion-text></ion-label>\n              </ion-col>\n\n              <ion-col size=\"7\">\n                <ion-select value=\"0\" interface=\"action-sheet\" class=\"custom-options\">\n                  <ion-select-option value=\"0\"></ion-select-option>\n                  <ion-select-option value=\"1\">Andhra Pradesh</ion-select-option>\n                  <ion-select-option value=\"2\">Arunachal Pradesh</ion-select-option>\n                  <ion-select-option value=\"3\">Assam</ion-select-option>\n                  <ion-select-option value=\"4\">Bihar</ion-select-option>\n                  <ion-select-option value=\"5\">Chhattisgarh</ion-select-option>\n                  <ion-select-option value=\"6\">Goa</ion-select-option>\n                  <ion-select-option value=\"7\">Gujarat</ion-select-option>\n                  <ion-select-option value=\"8\">Haryana</ion-select-option>\n                  <ion-select-option value=\"9\">Himachal Pradesh</ion-select-option>\n                  <ion-select-option value=\"10\">Jharkhand</ion-select-option>\n                  <ion-select-option value=\"11\">Karnataka</ion-select-option>\n                  <ion-select-option value=\"12\">Kerala</ion-select-option>\n                  <ion-select-option value=\"13\">Madhya Pradesh</ion-select-option>\n                  <ion-select-option value=\"14\">Maharashtra</ion-select-option>\n                  <ion-select-option value=\"15\">Manipur</ion-select-option>\n                  <ion-select-option value=\"16\">Meghalaya</ion-select-option>\n                  <ion-select-option value=\"17\">Mizoram</ion-select-option>\n                  <ion-select-option value=\"18\">Nagaland</ion-select-option>\n                  <ion-select-option value=\"19\">Odisha</ion-select-option>\n                  <ion-select-option value=\"20\">Punjab</ion-select-option>\n                  <ion-select-option value=\"21\">Rajasthan</ion-select-option>\n                  <ion-select-option value=\"22\">Sikkim</ion-select-option>\n                  <ion-select-option value=\"23\">Tamil Nadu</ion-select-option>\n                  <ion-select-option value=\"24\">Telangana</ion-select-option>\n                  <ion-select-option value=\"25\">Tripura</ion-select-option>\n                  <ion-select-option value=\"26\">Uttar Pradesh</ion-select-option>\n                  <ion-select-option value=\"27\">Uttarakhand </ion-select-option>\n                  <ion-select-option value=\"28\">West Bengal</ion-select-option>\n          </ion-select>\n\n            </ion-col>\n            </ion-row>          \n              \n          </ion-grid>  \n     \n  </form>\n       \n    \n</ion-content>\n\n<ion-footer class=\"ion-no-margin ion-no-padding\">\n    <ion-button  class=\"ion-no-margin ion-no-padding\" style=\"height: 60px;\" expand=\"full\"  [routerLink]=\"['/','dashboard']\" routerLinkActive=\"router-link-active\"   color=\"primary\">Create society</ion-button>\n</ion-footer>\n\n\n\n\n\n\n";
      /***/
    },

    /***/
    "./src/app/societyjc/societyc/societyc-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/societyjc/societyc/societyc-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: SocietycPageRoutingModule */

    /***/
    function srcAppSocietyjcSocietycSocietycRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocietycPageRoutingModule", function () {
        return SocietycPageRoutingModule;
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


      var _societyc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./societyc.page */
      "./src/app/societyjc/societyc/societyc.page.ts");

      var routes = [{
        path: '',
        component: _societyc_page__WEBPACK_IMPORTED_MODULE_3__["SocietycPage"]
      }];

      var SocietycPageRoutingModule = function SocietycPageRoutingModule() {
        _classCallCheck(this, SocietycPageRoutingModule);
      };

      SocietycPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SocietycPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/societyjc/societyc/societyc.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/societyjc/societyc/societyc.module.ts ***!
      \*******************************************************/

    /*! exports provided: SocietycPageModule */

    /***/
    function srcAppSocietyjcSocietycSocietycModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocietycPageModule", function () {
        return SocietycPageModule;
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


      var _societyc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./societyc-routing.module */
      "./src/app/societyjc/societyc/societyc-routing.module.ts");
      /* harmony import */


      var _societyc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./societyc.page */
      "./src/app/societyjc/societyc/societyc.page.ts");

      var SocietycPageModule = function SocietycPageModule() {
        _classCallCheck(this, SocietycPageModule);
      };

      SocietycPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _societyc_routing_module__WEBPACK_IMPORTED_MODULE_5__["SocietycPageRoutingModule"]],
        declarations: [_societyc_page__WEBPACK_IMPORTED_MODULE_6__["SocietycPage"]]
      })], SocietycPageModule);
      /***/
    },

    /***/
    "./src/app/societyjc/societyc/societyc.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/societyjc/societyc/societyc.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSocietyjcSocietycSocietycPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lldHlqYy9zb2NpZXR5Yy9zb2NpZXR5Yy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/societyjc/societyc/societyc.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/societyjc/societyc/societyc.page.ts ***!
      \*****************************************************/

    /*! exports provided: SocietycPage */

    /***/
    function srcAppSocietyjcSocietycSocietycPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocietycPage", function () {
        return SocietycPage;
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


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var SocietycPage = /*#__PURE__*/function () {
        function SocietycPage(navctrl, menuCtrl, sb) {
          _classCallCheck(this, SocietycPage);

          this.navctrl = navctrl;
          this.menuCtrl = menuCtrl;
          this.sb = sb;
          this.menuCtrl.enable(false);
          this.sb.backgroundColorByHexString("#3880ff");
        }

        _createClass(SocietycPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SocietycPage;
      }();

      SocietycPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
        }];
      };

      SocietycPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-societyc',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./societyc.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/societyjc/societyc/societyc.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./societyc.page.scss */
        "./src/app/societyjc/societyc/societyc.page.scss"))["default"]]
      })], SocietycPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=societyc-societyc-module-es5.js.map