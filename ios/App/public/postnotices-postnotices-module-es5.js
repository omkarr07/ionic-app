(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postnotices-postnotices-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/postnotices/postnotices.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postnotices/postnotices.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPostnoticesPostnoticesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>notice</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"ion-padding\">\n    <ion-item>\n      <ion-label position=\"floating\">Subject <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-textarea></ion-textarea>\n    </ion-item>\n    <br>\n    \n    \n      <ion-button (click)=\"onClick()\" expand=\"block\"  >\n        <ion-label>Upload Image</ion-label>\n        <ion-icon slot=\"end\" name=\"add-circle-outline\"></ion-icon > \n       </ion-button>\n          \n      </ion-card>\n\n      <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button color=\"primary\" expand=\"block\">Submit</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/postnotices/postnotices-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/postnotices/postnotices-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: PostnoticesPageRoutingModule */

    /***/
    function srcAppPostnoticesPostnoticesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostnoticesPageRoutingModule", function () {
        return PostnoticesPageRoutingModule;
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


      var _postnotices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./postnotices.page */
      "./src/app/postnotices/postnotices.page.ts");

      var routes = [{
        path: '',
        component: _postnotices_page__WEBPACK_IMPORTED_MODULE_3__["PostnoticesPage"]
      }];

      var PostnoticesPageRoutingModule = function PostnoticesPageRoutingModule() {
        _classCallCheck(this, PostnoticesPageRoutingModule);
      };

      PostnoticesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PostnoticesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/postnotices/postnotices.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/postnotices/postnotices.module.ts ***!
      \***************************************************/

    /*! exports provided: PostnoticesPageModule */

    /***/
    function srcAppPostnoticesPostnoticesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostnoticesPageModule", function () {
        return PostnoticesPageModule;
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


      var _postnotices_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./postnotices-routing.module */
      "./src/app/postnotices/postnotices-routing.module.ts");
      /* harmony import */


      var _postnotices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./postnotices.page */
      "./src/app/postnotices/postnotices.page.ts");

      var PostnoticesPageModule = function PostnoticesPageModule() {
        _classCallCheck(this, PostnoticesPageModule);
      };

      PostnoticesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _postnotices_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostnoticesPageRoutingModule"]],
        declarations: [_postnotices_page__WEBPACK_IMPORTED_MODULE_6__["PostnoticesPage"]]
      })], PostnoticesPageModule);
      /***/
    },

    /***/
    "./src/app/postnotices/postnotices.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/postnotices/postnotices.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPostnoticesPostnoticesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3Rub3RpY2VzL3Bvc3Rub3RpY2VzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/postnotices/postnotices.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/postnotices/postnotices.page.ts ***!
      \*************************************************/

    /*! exports provided: PostnoticesPage */

    /***/
    function srcAppPostnoticesPostnoticesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostnoticesPage", function () {
        return PostnoticesPage;
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

      var PostnoticesPage = /*#__PURE__*/function () {
        function PostnoticesPage(menuCtrl, sb) {
          _classCallCheck(this, PostnoticesPage);

          this.menuCtrl = menuCtrl;
          this.sb = sb;
          this.menuCtrl.enable(true);
          this.sb.backgroundColorByHexString("#3880ff");
        }

        _createClass(PostnoticesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PostnoticesPage;
      }();

      PostnoticesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
        }];
      };

      PostnoticesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-postnotices',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./postnotices.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/postnotices/postnotices.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./postnotices.page.scss */
        "./src/app/postnotices/postnotices.page.scss"))["default"]]
      })], PostnoticesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=postnotices-postnotices-module-es5.js.map