(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo2-demo2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/demo2/demo2.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo2/demo2.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDemo2Demo2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar color=\"primary\" >\n    <ion-title>sign up</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid class=\"ion-text-center\">\n    <ion-row>\n      <ion-col size=\"12\">\n  <ion-icon style=\"  font-size: 20vh;\"   name=\"person-add-outline\" ></ion-icon>\n      </ion-col>\n      </ion-row>\n  </ion-grid>\n   \n  <div class=\"ion-padding\">\n\n    \n      <form #form=\"ngForm\" (ngSubmit)=\"onLogin(form)\" method=\"post\">\n\n       \n      <div style=\"margin-top: 8%;\">\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-icon slot=\"start\" name=\"person\" color=\"primary\"></ion-icon> &nbsp;\n            Full-Name\n          </ion-label>\n          <ion-input ngModel type=\"text\" name=\"name\" #name=\"ngModel\"  required></ion-input>\n        </ion-item>\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"ion-text-center\" style=\"color: red;\">\n          <div *ngIf=\"name.errors.required\">\n            Full-Name is required.\n          </div>                                                                                                                        \n        </div>\n\n\n\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-icon slot=\"start\" name=\"mail\" color=\"primary\"></ion-icon> &nbsp;\n            Email\n          </ion-label>\n          <ion-input ngModel type=\"email\" name=\"email\" #email=\"ngModel\" pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"ion-text-center\" style=\"color: red;\">\n          <div *ngIf=\"email.errors.required\">\n            Email-id is required.\n          </div>\n          <div *ngIf=\"email.errors.pattern\">\n            Please enter valid email address\n          </div>\n        </div>\n  \n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-icon slot=\"start\" name=\"lock-closed\" color=\"primary\"></ion-icon> &nbsp;\n            Password\n          </ion-label>\n          <ion-input ngModel type=\"password\" name=\"password\" minlength=\"6\" #pass=\"ngModel\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"pass.invalid && (pass.dirty || pass.touched)\" class=\"ion-text-center\" style=\"color: red;\">\n  \n          <div *ngIf=\"pass.errors.required\">\n            Password is required.\n          </div>\n          <div *ngIf=\"pass.errors.minlength\">\n            Password must be at least 6 characters long.\n          </div>\n          </div>\n\n      </div>\n       \n      </form>\n    </div>\n</ion-content>\n\n  <ion-footer class=\"ion-no-border\" >\n \n    <ion-grid >\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button class=\"ion-no-margin ion-no-padding\" [routerLink]=\"['/','home']\" routerLinkActive=\"router-link-active\"  fill=\"clear\"   expand=\"block\"  color=\"dark\" >\n            Already have an account? Sign in </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <ion-button class=\"ion-no-margin ion-no-padding\" [routerLink]=\"['/','demo2','date']\" routerLinkActive=\"router-link-active\"   style=\"height: 60px;\" expand=\"full\"   color=\"primary\" >date</ion-button>\n\n     \n      <ion-button class=\"ion-no-margin ion-no-padding\" [routerLink]=\"['/','societyjc']\" routerLinkActive=\"router-link-active\"   style=\"height: 60px;\" expand=\"full\"   color=\"primary\" >Sign Up</ion-button>\n  </ion-footer>";
      /***/
    },

    /***/
    "./src/app/demo2/demo2-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/demo2/demo2-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: Demo2PageRoutingModule */

    /***/
    function srcAppDemo2Demo2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Demo2PageRoutingModule", function () {
        return Demo2PageRoutingModule;
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


      var _demo2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./demo2.page */
      "./src/app/demo2/demo2.page.ts");

      var routes = [{
        path: '',
        component: _demo2_page__WEBPACK_IMPORTED_MODULE_3__["Demo2Page"]
      }, {
        path: 'date',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | date-date-module */
          "date-date-module").then(__webpack_require__.bind(null,
          /*! ./date/date.module */
          "./src/app/demo2/date/date.module.ts")).then(function (m) {
            return m.DatePageModule;
          });
        }
      }];

      var Demo2PageRoutingModule = function Demo2PageRoutingModule() {
        _classCallCheck(this, Demo2PageRoutingModule);
      };

      Demo2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Demo2PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/demo2/demo2.module.ts":
    /*!***************************************!*\
      !*** ./src/app/demo2/demo2.module.ts ***!
      \***************************************/

    /*! exports provided: Demo2PageModule */

    /***/
    function srcAppDemo2Demo2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Demo2PageModule", function () {
        return Demo2PageModule;
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


      var _demo2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./demo2-routing.module */
      "./src/app/demo2/demo2-routing.module.ts");
      /* harmony import */


      var _demo2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./demo2.page */
      "./src/app/demo2/demo2.page.ts");

      var Demo2PageModule = function Demo2PageModule() {
        _classCallCheck(this, Demo2PageModule);
      };

      Demo2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _demo2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Demo2PageRoutingModule"]],
        declarations: [_demo2_page__WEBPACK_IMPORTED_MODULE_6__["Demo2Page"]]
      })], Demo2PageModule);
      /***/
    },

    /***/
    "./src/app/demo2/demo2.page.scss":
    /*!***************************************!*\
      !*** ./src/app/demo2/demo2.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppDemo2Demo2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8yL2RlbW8yLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/demo2/demo2.page.ts":
    /*!*************************************!*\
      !*** ./src/app/demo2/demo2.page.ts ***!
      \*************************************/

    /*! exports provided: Demo2Page */

    /***/
    function srcAppDemo2Demo2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Demo2Page", function () {
        return Demo2Page;
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

      var Demo2Page = /*#__PURE__*/function () {
        function Demo2Page(navctrl, menuCtrl, sb) {
          _classCallCheck(this, Demo2Page);

          this.navctrl = navctrl;
          this.menuCtrl = menuCtrl;
          this.sb = sb;
          this.menuCtrl.enable(false);
          this.sb.backgroundColorByHexString("#3880ff");
        }

        _createClass(Demo2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signr",
          value: function signr() {
            this.navctrl.navigateBack("home");
          }
        }]);

        return Demo2Page;
      }();

      Demo2Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
        }];
      };

      Demo2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demo2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./demo2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/demo2/demo2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./demo2.page.scss */
        "./src/app/demo2/demo2.page.scss"))["default"]]
      })], Demo2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo2-demo2-module-es5.js.map