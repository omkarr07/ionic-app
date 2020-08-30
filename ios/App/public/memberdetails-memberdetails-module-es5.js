(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["memberdetails-memberdetails-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/societyjc/societyj/memberdetails/memberdetails.page.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/societyjc/societyj/memberdetails/memberdetails.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSocietyjcSocietyjMemberdetailsMemberdetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"societyjc/societyj\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>memberdetails</ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content> \n  <form #form=\"ngForm\">       \n    <ion-item>\n      <ion-label position=\"floating\"><ion-icon name=\"business-outline\"></ion-icon> &nbsp; Society Name <ion-text color=\"danger\">*</ion-text> </ion-label>\n        <ion-input type=\"text\" disabled ></ion-input>\n    </ion-item><br>\n    <ion-item>\n        <ion-label>Name of wing's <ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-select>\n                <ion-select-option value=\"A\">A</ion-select-option>\n                <ion-select-option value=\"B\">B</ion-select-option>\n                <ion-select-option value=\"C\">C</ion-select-option>\n                <ion-select-option value=\"D\">D</ion-select-option>\n            </ion-select>\n    </ion-item><br>\n    <ion-item>\n        <ion-label position=\"floating\"> Floor No. <ion-text color=\"danger\">*</ion-text></ion-label>\n            <ion-select interface=\"popovar\">\n                <ion-select-option value=\"1\">1</ion-select-option>\n                <ion-select-option value=\"2\">2</ion-select-option>\n                <ion-select-option value=\"3\">3</ion-select-option>\n                <ion-select-option value=\"4\">4</ion-select-option>\n            </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Room No <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\" >Address <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-textarea disabled></ion-textarea>\n    </ion-item><br>\n    <ion-item>\n        <ion-label>State <ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input type=\"text\" disabled></ion-input>  \n      </ion-item>\n\n \n</form>\n   \n\n</ion-content>\n\n<ion-footer class=\"ion-no-margin ion-no-padding\">\n<ion-button  class=\"ion-no-margin ion-no-padding\" style=\"height: 60px;\" expand=\"full\" [disabled]=\"!form.valid\"   [routerLink]=\"['/','dashboard','memberdashboard']\" routerLinkActive=\"router-link-active\"   color=\"primary\">join society</ion-button>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/societyjc/societyj/memberdetails/memberdetails-routing.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/societyjc/societyj/memberdetails/memberdetails-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: MemberdetailsPageRoutingModule */

    /***/
    function srcAppSocietyjcSocietyjMemberdetailsMemberdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberdetailsPageRoutingModule", function () {
        return MemberdetailsPageRoutingModule;
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


      var _memberdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./memberdetails.page */
      "./src/app/societyjc/societyj/memberdetails/memberdetails.page.ts");

      var routes = [{
        path: '',
        component: _memberdetails_page__WEBPACK_IMPORTED_MODULE_3__["MemberdetailsPage"]
      }];

      var MemberdetailsPageRoutingModule = function MemberdetailsPageRoutingModule() {
        _classCallCheck(this, MemberdetailsPageRoutingModule);
      };

      MemberdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MemberdetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/societyjc/societyj/memberdetails/memberdetails.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/societyjc/societyj/memberdetails/memberdetails.module.ts ***!
      \**************************************************************************/

    /*! exports provided: MemberdetailsPageModule */

    /***/
    function srcAppSocietyjcSocietyjMemberdetailsMemberdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberdetailsPageModule", function () {
        return MemberdetailsPageModule;
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


      var _memberdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./memberdetails-routing.module */
      "./src/app/societyjc/societyj/memberdetails/memberdetails-routing.module.ts");
      /* harmony import */


      var _memberdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./memberdetails.page */
      "./src/app/societyjc/societyj/memberdetails/memberdetails.page.ts");

      var MemberdetailsPageModule = function MemberdetailsPageModule() {
        _classCallCheck(this, MemberdetailsPageModule);
      };

      MemberdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _memberdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["MemberdetailsPageRoutingModule"]],
        declarations: [_memberdetails_page__WEBPACK_IMPORTED_MODULE_6__["MemberdetailsPage"]]
      })], MemberdetailsPageModule);
      /***/
    },

    /***/
    "./src/app/societyjc/societyj/memberdetails/memberdetails.page.scss":
    /*!**************************************************************************!*\
      !*** ./src/app/societyjc/societyj/memberdetails/memberdetails.page.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSocietyjcSocietyjMemberdetailsMemberdetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lldHlqYy9zb2NpZXR5ai9tZW1iZXJkZXRhaWxzL21lbWJlcmRldGFpbHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/societyjc/societyj/memberdetails/memberdetails.page.ts":
    /*!************************************************************************!*\
      !*** ./src/app/societyjc/societyj/memberdetails/memberdetails.page.ts ***!
      \************************************************************************/

    /*! exports provided: MemberdetailsPage */

    /***/
    function srcAppSocietyjcSocietyjMemberdetailsMemberdetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MemberdetailsPage", function () {
        return MemberdetailsPage;
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

      var MemberdetailsPage = /*#__PURE__*/function () {
        function MemberdetailsPage(menuCtrl, sb) {
          _classCallCheck(this, MemberdetailsPage);

          this.menuCtrl = menuCtrl;
          this.sb = sb;
          this.sb.backgroundColorByHexString("#3880ff");
          this.menuCtrl.enable(false);
        }

        _createClass(MemberdetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MemberdetailsPage;
      }();

      MemberdetailsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
        }];
      };

      MemberdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-memberdetails',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./memberdetails.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/societyjc/societyj/memberdetails/memberdetails.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./memberdetails.page.scss */
        "./src/app/societyjc/societyj/memberdetails/memberdetails.page.scss"))["default"]]
      })], MemberdetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=memberdetails-memberdetails-module-es5.js.map