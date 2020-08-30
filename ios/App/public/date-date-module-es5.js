(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["date-date-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/demo2/date/date.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo2/date/date.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDemo2DateDatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/demo2\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>date</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>MMMM</ion-label>\n    <ion-datetime displayFormat=\"MMMM\" value=\"2012-12-15T13:47:20.789\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>MM DD YY</ion-label>\n    <ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Disabled</ion-label>\n    <ion-datetime id=\"dynamicDisabled\" displayFormat=\"MM DD YY\" disabled value=\"1994-12-15\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>YYYY</ion-label>\n    <ion-datetime [pickerOptions]=\"customPickerOptions\" placeholder=\"Custom Options\" displayFormat=\"YYYY\" min=\"1981\" max=\"2002\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"stacked\">MMMM YY</ion-label>\n    <ion-datetime displayFormat=\"MMMM YY\" min=\"1989-06-04\" max=\"2004-08-23\" value=\"1994-12-15T13:47:20.789\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\n    <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"1994-03-14\" max=\"2012-12-09\" value=\"2002-09-23T15:03:46.789\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\n    <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"1994-03-14\" max=\"2012-12-09\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>\n    <ion-datetime value=\"1995-04-15\" min=\"1990-02\" max=\"2000\"\n      [dayShortNames]=\"customDayShortNames\"\n      displayFormat=\"DDD. MMM DD, YY\"\n      monthShortNames=\"jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>D MMM YYYY H:mm</ion-label>\n    <ion-datetime displayFormat=\"D MMM YYYY H:mm\" min=\"1997\" max=\"2010\" value=\"2005-06-17T11:06Z\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>DDDD MMM D, YYYY</ion-label>\n    <ion-datetime displayFormat=\"DDDD MMM D, YYYY\" min=\"2005\" max=\"2016\" value=\"2008-09-02\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>HH:mm</ion-label>\n    <ion-datetime displayFormat=\"HH:mm\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>h:mm a</ion-label>\n    <ion-datetime displayFormat=\"h:mm a\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>hh:mm A (15 min steps)</ion-label>\n    <ion-datetime displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Leap years, summer months</ion-label>\n    <ion-datetime displayFormat=\"MM/YYYY\" pickerFormat=\"MMMM YYYY\" monthValues=\"6,7,8\" [yearValues]=\"customYearValues\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Specific days/months/years</ion-label>\n    <ion-datetime monthValues=\"6,7,8\" yearValues=\"2014,2015\" dayValues=\"01,02,03,04,05,06,08,09,10, 11, 12, 13, 14\" displayFormat=\"DD/MMM/YYYY\"></ion-datetime>\n  </ion-item>\n\n  <h1>Date & Time Pickers</h1>\n\n  <ion-button (click)=\"showDatepicker()\">\n    Show Date Picker\n  </ion-button>\n  <h4>Date: {{myDate}}</h4>\n\n  <ion-button (click)=\"showTimepicker()\">\n    Show Time Picker\n  </ion-button>\n  <h4>Time: {{myTime}}</h4>\n\n\n  <ion-button (click)=\"showDateTimepicker()\">\n    Show Date & Time Picker\n  </ion-button>\n  <h4>Date & Time: {{myDateNTime}}</h4>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/demo2/date/date-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/demo2/date/date-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: DatePageRoutingModule */

    /***/
    function srcAppDemo2DateDateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePageRoutingModule", function () {
        return DatePageRoutingModule;
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


      var _date_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./date.page */
      "./src/app/demo2/date/date.page.ts");

      var routes = [{
        path: '',
        component: _date_page__WEBPACK_IMPORTED_MODULE_3__["DatePage"]
      }];

      var DatePageRoutingModule = function DatePageRoutingModule() {
        _classCallCheck(this, DatePageRoutingModule);
      };

      DatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DatePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/demo2/date/date.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/demo2/date/date.module.ts ***!
      \*******************************************/

    /*! exports provided: DatePageModule */

    /***/
    function srcAppDemo2DateDateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePageModule", function () {
        return DatePageModule;
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


      var _date_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./date-routing.module */
      "./src/app/demo2/date/date-routing.module.ts");
      /* harmony import */


      var _date_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./date.page */
      "./src/app/demo2/date/date.page.ts");

      var DatePageModule = function DatePageModule() {
        _classCallCheck(this, DatePageModule);
      };

      DatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _date_routing_module__WEBPACK_IMPORTED_MODULE_5__["DatePageRoutingModule"]],
        declarations: [_date_page__WEBPACK_IMPORTED_MODULE_6__["DatePage"]]
      })], DatePageModule);
      /***/
    },

    /***/
    "./src/app/demo2/date/date.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/demo2/date/date.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppDemo2DateDatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8yL2RhdGUvZGF0ZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/demo2/date/date.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/demo2/date/date.page.ts ***!
      \*****************************************/

    /*! exports provided: DatePage */

    /***/
    function srcAppDemo2DateDatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePage", function () {
        return DatePage;
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

      var DatePage = /*#__PURE__*/function () {
        function DatePage(datePicker) {
          _classCallCheck(this, DatePage);

          this.datePicker = datePicker;
        }

        _createClass(DatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showDatepicker",
          value: function showDatepicker() {
            var _this = this;

            this.datePicker.show({
              date: new Date(),
              mode: 'date',
              androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
              okText: "Save Date",
              todayText: "Set Today"
            }).then(function (date) {
              _this.myDate = date.getDate() + "/" + date.toLocaleString('default', {
                month: 'long'
              }) + "/" + date.getFullYear();
            }, function (err) {
              return console.log('Error occurred while getting date: ', err);
            });
          }
        }, {
          key: "showDateTimepicker",
          value: function showDateTimepicker() {
            var _this2 = this;

            this.datePicker.show({
              date: new Date(),
              mode: 'datetime',
              androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
              doneButtonLabel: "Save Date & Time",
              is24Hour: false
            }).then(function (dateTime) {
              _this2.myDateNTime = dateTime.getDate() + "/" + dateTime.toLocaleString('default', {
                month: 'long'
              }) + "/" + dateTime.getFullYear() + " " + dateTime.getHours() + ":" + dateTime.getMinutes();
            }, function (err) {
              return console.log('Error occurred while getting dateTime: ', err);
            });
          }
        }, {
          key: "showTimepicker",
          value: function showTimepicker() {
            var _this3 = this;

            this.datePicker.show({
              date: new Date(),
              mode: 'time',
              androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
              okText: "Save Time",
              nowText: "Set Now"
            }).then(function (time) {
              _this3.myTime = time.getHours() + ":" + time.getMinutes();
            }, function (err) {
              return console.log('Error occurred while getting time: ', err);
            });
          }
        }]);

        return DatePage;
      }();

      DatePage.ctorParameters = function () {
        return [{
          type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["DatePicker"]
        }];
      };

      DatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-date',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./date.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/demo2/date/date.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./date.page.scss */
        "./src/app/demo2/date/date.page.scss"))["default"]]
      })], DatePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=date-date-module-es5.js.map