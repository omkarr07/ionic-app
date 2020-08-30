(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transactions-transactions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/transactions.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/transactions.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTransactionsTransactionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>transactions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/transactions/transactions-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/transactions/transactions-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: TransactionsPageRoutingModule */

    /***/
    function srcAppTransactionsTransactionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionsPageRoutingModule", function () {
        return TransactionsPageRoutingModule;
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


      var _transactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./transactions.page */
      "./src/app/transactions/transactions.page.ts");

      var routes = [{
        path: '',
        component: _transactions_page__WEBPACK_IMPORTED_MODULE_3__["TransactionsPage"]
      }];

      var TransactionsPageRoutingModule = function TransactionsPageRoutingModule() {
        _classCallCheck(this, TransactionsPageRoutingModule);
      };

      TransactionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TransactionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/transactions/transactions.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/transactions/transactions.module.ts ***!
      \*****************************************************/

    /*! exports provided: TransactionsPageModule */

    /***/
    function srcAppTransactionsTransactionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function () {
        return TransactionsPageModule;
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


      var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./transactions-routing.module */
      "./src/app/transactions/transactions-routing.module.ts");
      /* harmony import */


      var _transactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./transactions.page */
      "./src/app/transactions/transactions.page.ts");

      var TransactionsPageModule = function TransactionsPageModule() {
        _classCallCheck(this, TransactionsPageModule);
      };

      TransactionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionsPageRoutingModule"]],
        declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_6__["TransactionsPage"]]
      })], TransactionsPageModule);
      /***/
    },

    /***/
    "./src/app/transactions/transactions.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/transactions/transactions.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTransactionsTransactionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/transactions/transactions.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/transactions/transactions.page.ts ***!
      \***************************************************/

    /*! exports provided: TransactionsPage */

    /***/
    function srcAppTransactionsTransactionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionsPage", function () {
        return TransactionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TransactionsPage = /*#__PURE__*/function () {
        function TransactionsPage() {
          _classCallCheck(this, TransactionsPage);
        }

        _createClass(TransactionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TransactionsPage;
      }();

      TransactionsPage.ctorParameters = function () {
        return [];
      };

      TransactionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./transactions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/transactions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./transactions.page.scss */
        "./src/app/transactions/transactions.page.scss"))["default"]]
      })], TransactionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=transactions-transactions-module-es5.js.map