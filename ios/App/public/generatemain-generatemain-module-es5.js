(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generatemain-generatemain-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/generatemain/generatemain.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generatemain/generatemain.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppGeneratemainGeneratemainPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n   \n    <ion-title>Create Bill</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-card>\n    <h6 class=\"ion-padding\" color=\"dark\">Bill Details</h6>\n    <form action=\"\" class=\"ion-padding\">\n      <div class=\"form-group\">\n        <label for=\"\">Name</label>\n        <input type=\"text\" name=\"\" id=\"\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Notes (Optional)</label>\n        <textarea name=\"\" id=\"\" cols=\"10\" rows=\"3\" class=\"form-control\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Blance-Sheet</label>\n          <ion-select value=\"0\" interface=\"popover\" style=\"border: 1px solid rgb(204, 204, 204); border-radius: 5px;\">\n            <ion-select-option value=\"0\">-- Choose --</ion-select-option>\n            <ion-select-option value=\"1\">Select</ion-select-option>\n            <ion-select-option value=\"2\">Main Balance</ion-select-option>\n          </ion-select>\n      </div>\n    </form>\n  </ion-card> -->\n  <ion-card>\n    <h4 class=\"ion-padding\" style=\"color: black;\">Bill Duration</h4>\n    <form action=\"\">\n      <div class=\"form-group\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>INVOICE DATE</ion-label>\n              <ion-item (click)=\"datesm()\">\n                <ion-label  > {{mydatem}}    \n                </ion-label>\n                <ion-icon name=\"calendar-sharp\"></ion-icon>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              \n                <ion-label>FROM</ion-label>\n                 <ion-item (click)=\"dates()\">\n                   <ion-label >{{mydate}}</ion-label>\n                   \n                   <ion-icon name=\"calendar-outline\"></ion-icon>\n                 </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-label>TO</ion-label>\n                 <ion-item (click)=\"dateo()\">\n                   <ion-label>{{myDate}}</ion-label>\n                   <ion-icon   name=\"calendar-outline\"></ion-icon>\n                 </ion-item>\n            </ion-col>  \n          </ion-row>\n        </ion-grid>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <label for=\"\">Due Date</label>\n              <ion-item (click)=\"ddate()\">\n                <ion-label>{{dd}}</ion-label>\n                <ion-icon name=\"calendar-sharp\"></ion-icon>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </form>\n  </ion-card>\n  <ion-card>\n    <ion-button fill=\"clear\" expand=\"block\" [routerLink]=\"['/service-list']\" routerLinkActive=\"router-link-active\" >\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      &nbsp; Add Bill Item</ion-button>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <p style=\"color: black\"><b>Name : Water charges</b></p>\n      <p>Owner Amount : </p>\n      <p>Rent Amount : </p>\n      <p>Closed Amount : </p><br>\n      <ion-label color=\"danger\"> * Notice: Water reading add option come after you generate bill.* </ion-label>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-label>Enable Penalty</ion-label>\n      <ion-toggle slot=\"end\" name=\"penalty\" [(ngModel)]=\"penalty\" color=\"primary\" ></ion-toggle>\n    </ion-item>  \n      <div *ngIf=\"penalty\">\n        <form action=\"\" class=\"ion-padding\">\n          <div class=\"form-group\">\n            <label for=\"\">Select Occurance</label>\n              <ion-select value=\"0\" interface=\"popover\" style=\"border: 1px solid rgb(204, 204, 204); border-radius: 5px;\">\n                <ion-select-option value=\"0\">-- Choose --</ion-select-option>\n                <ion-select-option value=\"1\">One Time</ion-select-option>\n                <ion-select-option value=\"2\">Recurring</ion-select-option>\n              </ion-select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Penalty rate</label>\n              <ion-input type=\"number\" style=\"border: 1px solid ;\" placeholder=\"Enter penalty rate\"></ion-input>\n          </div>\n        </form>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n           \n            <ion-button expand=\"block\">Save</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </ion-card>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/generatemain/generatemain-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/generatemain/generatemain-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: GeneratemainPageRoutingModule */

    /***/
    function srcAppGeneratemainGeneratemainRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneratemainPageRoutingModule", function () {
        return GeneratemainPageRoutingModule;
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


      var _generatemain_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./generatemain.page */
      "./src/app/generatemain/generatemain.page.ts");

      var routes = [{
        path: '',
        component: _generatemain_page__WEBPACK_IMPORTED_MODULE_3__["GeneratemainPage"]
      }];

      var GeneratemainPageRoutingModule = function GeneratemainPageRoutingModule() {
        _classCallCheck(this, GeneratemainPageRoutingModule);
      };

      GeneratemainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GeneratemainPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/generatemain/generatemain.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/generatemain/generatemain.module.ts ***!
      \*****************************************************/

    /*! exports provided: GeneratemainPageModule */

    /***/
    function srcAppGeneratemainGeneratemainModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneratemainPageModule", function () {
        return GeneratemainPageModule;
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


      var _generatemain_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./generatemain-routing.module */
      "./src/app/generatemain/generatemain-routing.module.ts");
      /* harmony import */


      var _generatemain_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./generatemain.page */
      "./src/app/generatemain/generatemain.page.ts");

      var GeneratemainPageModule = function GeneratemainPageModule() {
        _classCallCheck(this, GeneratemainPageModule);
      };

      GeneratemainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _generatemain_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeneratemainPageRoutingModule"]],
        declarations: [_generatemain_page__WEBPACK_IMPORTED_MODULE_6__["GeneratemainPage"]]
      })], GeneratemainPageModule);
      /***/
    },

    /***/
    "./src/app/generatemain/generatemain.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/generatemain/generatemain.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppGeneratemainGeneratemainPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRlbWFpbi9nZW5lcmF0ZW1haW4ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/generatemain/generatemain.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/generatemain/generatemain.page.ts ***!
      \***************************************************/

    /*! exports provided: GeneratemainPage */

    /***/
    function srcAppGeneratemainGeneratemainPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneratemainPage", function () {
        return GeneratemainPage;
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


      var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/date-picker/ngx */
      "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var GeneratemainPage = /*#__PURE__*/function () {
        function GeneratemainPage(nav, datePicker, menuCtrl, sb) {
          _classCallCheck(this, GeneratemainPage);

          this.nav = nav;
          this.datePicker = datePicker;
          this.menuCtrl = menuCtrl;
          this.sb = sb;
          this.penalty = false;
          this.sb.backgroundColorByHexString("#3880ff");
          this.menuCtrl.enable(true);
        }

        _createClass(GeneratemainPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dates",
          value: function dates() {
            var _this = this;

            this.datePicker.show({
              date: new Date(),
              mode: 'date',
              androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
            }).then(function (date) {
              _this.mydate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
            }, function (err) {
              return console.log('Error occurred while getting date: ', err);
            });
          }
        }, {
          key: "datesm",
          value: function datesm() {
            var _this2 = this;

            this.datePicker.show({
              date: new Date(),
              mode: 'date',
              todayText: "Set Today",
              androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
            }).then(function (date) {
              _this2.mydatem = date.getDate() + "/" + date.toLocaleString('default', {
                month: 'long'
              }) + "/" + date.getFullYear();
            }, function (err) {
              return console.log('Error occurred while getting date: ', err);
            });
          }
        }, {
          key: "dateo",
          value: function dateo() {
            var _this3 = this;

            this.datePicker.show({
              date: new Date(),
              mode: 'date',
              androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
            }).then(function (date) {
              _this3.myDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
            }, function (err) {
              return console.log('Error occurred while getting date: ', err);
            });
          }
        }, {
          key: "ddate",
          value: function ddate() {
            var _this4 = this;

            this.datePicker.show({
              date: new Date(),
              mode: 'date',
              androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
            }).then(function (date) {
              _this4.dd = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
            }, function (err) {
              return console.log('Error occurred while getting date: ', err);
            });
          }
        }]);

        return GeneratemainPage;
      }();

      GeneratemainPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["DatePicker"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      GeneratemainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generatemain',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./generatemain.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/generatemain/generatemain.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./generatemain.page.scss */
        "./src/app/generatemain/generatemain.page.scss"))["default"]]
      })], GeneratemainPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=generatemain-generatemain-module-es5.js.map