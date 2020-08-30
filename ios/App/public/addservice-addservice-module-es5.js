(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addservice-addservice-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/service-list/addservice/addservice.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/service-list/addservice/addservice.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppServiceListAddserviceAddservicePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/service-list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Bill Item</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <form action=\"\" class=\"ion-padding\">\n      <div class=\"form-group\">\n        <label for=\"\">Item Name</label>\n        <input type=\"text\" name=\"\" id=\"\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Notes ( Optional )</label>\n        <textarea name=\"\" id=\"\" cols=\"15\" rows=\"3\" class=\"form-control\"></textarea>\n      </div>\n    </form>\n  </ion-card>\n  <ion-card>\n    <form action=\"\" class=\"ion-padding\">\n      <div class=\"form-group\">\n        <label for=\"\">Type</label>\n        <ion-select interface=\"popover\" value=\"0\" style=\"border: 1px solid rgb(204, 204, 204); border-radius: 5px;\">\n          <ion-select-option value=\"0\">Select</ion-select-option>\n          <ion-select-option value=\"1\">Fixed Price</ion-select-option>\n          <ion-select-option value=\"2\">Based on Unit</ion-select-option>\n          <ion-select-option value=\"2\">Based on sq Feet</ion-select-option>\n        </ion-select>\n        \n      </div>\n    </form>\n  </ion-card>\n</ion-content>\n<ion-footer >\n  <ion-button class=\"ion-no-padding ion-no-margin\" expand=\"block\" [routerLink]=\"['/service-list']\" routerLinkActive=\"router-link-active\" >Save</ion-button>  \n</ion-footer>\n\n";
      /***/
    },

    /***/
    "./src/app/service-list/addservice/addservice-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/service-list/addservice/addservice-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: AddservicePageRoutingModule */

    /***/
    function srcAppServiceListAddserviceAddserviceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddservicePageRoutingModule", function () {
        return AddservicePageRoutingModule;
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


      var _addservice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addservice.page */
      "./src/app/service-list/addservice/addservice.page.ts");

      var routes = [{
        path: '',
        component: _addservice_page__WEBPACK_IMPORTED_MODULE_3__["AddservicePage"]
      }];

      var AddservicePageRoutingModule = function AddservicePageRoutingModule() {
        _classCallCheck(this, AddservicePageRoutingModule);
      };

      AddservicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddservicePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/service-list/addservice/addservice.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/service-list/addservice/addservice.module.ts ***!
      \**************************************************************/

    /*! exports provided: AddservicePageModule */

    /***/
    function srcAppServiceListAddserviceAddserviceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddservicePageModule", function () {
        return AddservicePageModule;
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


      var _addservice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addservice-routing.module */
      "./src/app/service-list/addservice/addservice-routing.module.ts");
      /* harmony import */


      var _addservice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addservice.page */
      "./src/app/service-list/addservice/addservice.page.ts");

      var AddservicePageModule = function AddservicePageModule() {
        _classCallCheck(this, AddservicePageModule);
      };

      AddservicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addservice_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddservicePageRoutingModule"]],
        declarations: [_addservice_page__WEBPACK_IMPORTED_MODULE_6__["AddservicePage"]]
      })], AddservicePageModule);
      /***/
    },

    /***/
    "./src/app/service-list/addservice/addservice.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/service-list/addservice/addservice.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppServiceListAddserviceAddservicePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UtbGlzdC9hZGRzZXJ2aWNlL2FkZHNlcnZpY2UucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/service-list/addservice/addservice.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/service-list/addservice/addservice.page.ts ***!
      \************************************************************/

    /*! exports provided: AddservicePage */

    /***/
    function srcAppServiceListAddserviceAddservicePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddservicePage", function () {
        return AddservicePage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var AddservicePage = /*#__PURE__*/function () {
        function AddservicePage(menuCtrl, sb, router) {
          _classCallCheck(this, AddservicePage);

          this.menuCtrl = menuCtrl;
          this.sb = sb;
          this.router = router;
          this.menuCtrl.enable(true);
          this.sb.backgroundColorByHexString("#3880ff");
        }

        _createClass(AddservicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onclick",
          value: function onclick() {
            this.router.navigateByUrl("/service-list/");
          }
        }]);

        return AddservicePage;
      }();

      AddservicePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AddservicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addservice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./addservice.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/service-list/addservice/addservice.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./addservice.page.scss */
        "./src/app/service-list/addservice/addservice.page.scss"))["default"]]
      })], AddservicePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=addservice-addservice-module-es5.js.map