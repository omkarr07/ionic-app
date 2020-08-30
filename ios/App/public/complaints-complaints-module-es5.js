(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-complaints-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/complaints/complaints.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complaints/complaints.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComplaintsComplaintsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        defaultHref=\"dashboard/memberdashboard\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Complaints</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\">\n    <ion-card class=\"ion-padding\">\n      <h4 class=\"ion-text-wrap\">Generate a Complaint</h4>\n      <br />\n\n      <!-- <div >\n        <ion-label>select category</ion-label>\n          \n          <ion-select style=\"border: 1px solid black;\" [(ngModel)]=\"selectedItems\" value=\"0\" name=\"selectedItems\" slot=\"end\" interface=\"popover\"  > \n            <ion-select-option *ngFor=\"let item of items\" >{{item.title}}</ion-select-option>\n          </ion-select>\n      </div> -->\n\n      <div>\n          <ion-select  name=\"selectedItems\"  value=\"0\"  style=\"border-bottom: 1px solid black;\">\n            <ion-select-option value=\"0\">select category</ion-select-option>\n            <ion-select-option value=\"1\">dcdvd</ion-select-option>\n            <ion-select-option value=\"2\">fvff</ion-select-option>\n          </ion-select>\n      </div>\n      \n       \n\n      <br />\n      <div>\n        <p class=\"ion-no-margin\" style=\"font-size: 16px; color: black;\">\n          Brief Message\n        </p>\n        <ion-textarea\n          class=\"ion-no-margin\"\n          style=\"border: 1px solid black;\" [(ngModel)]=\"message\" name=\"message\"\n        ></ion-textarea>\n      </div>\n      <br />\n\n      <ion-grid class=\"ion-no-margin\">\n        <ion-row>\n          <ion-col size=\"7\">\n            <ion-button color=\"primary\" expand=\"block\">Submit</ion-button>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-button type=\"button\" color=\"danger\" (click)=\"reset(form)\" expand=\"block\"\n              >Reset</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </form>\n\n  <ion-card>\n    <ion-item>\n      <ion-label>Complaints History</ion-label>\n      <ion-select value=\"\" interface=\"action-sheet\">\n        <ion-select-option value=\"1\"></ion-select-option>\n        <ion-select-option value=\"\"></ion-select-option>\n        <ion-select-option value=\"\"></ion-select-option>\n        <ion-select-option value=\"\"></ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-card>\n\n\n\n";
      /***/
    },

    /***/
    "./src/app/complaints/complaints-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/complaints/complaints-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ComplaintsPageRoutingModule */

    /***/
    function srcAppComplaintsComplaintsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComplaintsPageRoutingModule", function () {
        return ComplaintsPageRoutingModule;
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


      var _complaints_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./complaints.page */
      "./src/app/complaints/complaints.page.ts");

      var routes = [{
        path: '',
        component: _complaints_page__WEBPACK_IMPORTED_MODULE_3__["ComplaintsPage"]
      }];

      var ComplaintsPageRoutingModule = function ComplaintsPageRoutingModule() {
        _classCallCheck(this, ComplaintsPageRoutingModule);
      };

      ComplaintsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComplaintsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/complaints/complaints.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/complaints/complaints.module.ts ***!
      \*************************************************/

    /*! exports provided: ComplaintsPageModule */

    /***/
    function srcAppComplaintsComplaintsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComplaintsPageModule", function () {
        return ComplaintsPageModule;
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


      var _complaints_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./complaints-routing.module */
      "./src/app/complaints/complaints-routing.module.ts");
      /* harmony import */


      var _complaints_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./complaints.page */
      "./src/app/complaints/complaints.page.ts");

      var ComplaintsPageModule = function ComplaintsPageModule() {
        _classCallCheck(this, ComplaintsPageModule);
      };

      ComplaintsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _complaints_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComplaintsPageRoutingModule"]],
        declarations: [_complaints_page__WEBPACK_IMPORTED_MODULE_6__["ComplaintsPage"]]
      })], ComplaintsPageModule);
      /***/
    },

    /***/
    "./src/app/complaints/complaints.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/complaints/complaints.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComplaintsComplaintsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsYWludHMvY29tcGxhaW50cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/complaints/complaints.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/complaints/complaints.page.ts ***!
      \***********************************************/

    /*! exports provided: ComplaintsPage */

    /***/
    function srcAppComplaintsComplaintsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComplaintsPage", function () {
        return ComplaintsPage;
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


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ComplaintsPage = /*#__PURE__*/function () {
        function ComplaintsPage(menuController, sb) {
          _classCallCheck(this, ComplaintsPage);

          this.menuController = menuController;
          this.sb = sb;
          this.menuController.enable(true);
          this.sb.backgroundColorByHexString("#3880ff");
        }

        _createClass(ComplaintsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "reset",
          value: function reset(form) {
            form.resetForm();
          }
        }]);

        return ComplaintsPage;
      }();

      ComplaintsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]
        }];
      };

      ComplaintsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complaints',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./complaints.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/complaints/complaints.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./complaints.page.scss */
        "./src/app/complaints/complaints.page.scss"))["default"]]
      })], ComplaintsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=complaints-complaints-module-es5.js.map