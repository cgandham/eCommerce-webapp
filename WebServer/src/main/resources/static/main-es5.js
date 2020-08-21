function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./register-user/register-user.component */
    "./src/app/register-user/register-user.component.ts");
    /* harmony import */


    var _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-user/login-user.component */
    "./src/app/login-user/login-user.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-user/update-user.component */
    "./src/app/update-user/update-user.component.ts");
    /* harmony import */


    var _sell_sell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sell/sell.component */
    "./src/app/sell/sell.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shop/shop.component */
    "./src/app/shop/shop.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./update-book/update-book.component */
    "./src/app/update-book/update-book.component.ts");
    /* harmony import */


    var _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./forgot-pwd/forgot-pwd.component */
    "./src/app/forgot-pwd/forgot-pwd.component.ts");

    var routes = [{
      path: '',
      component: _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_3__["LoginUserComponent"]
    }, {
      path: 'Register',
      component: _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_2__["RegisterUserComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'update-user',
      component: _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_5__["UpdateUserComponent"]
    }, {
      path: 'sell',
      component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_6__["SellComponent"]
    }, {
      path: 'shop',
      component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"]
    }, {
      path: 'cart',
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"]
    }, {
      path: 'updateBook',
      component: _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_9__["UpdateBookComponent"]
    }, {
      path: 'forgotPWD',
      component: _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPwdComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'web';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-user/register-user.component */
    "./src/app/register-user/register-user.component.ts");
    /* harmony import */


    var _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-user/login-user.component */
    "./src/app/login-user/login-user.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./update-user/update-user.component */
    "./src/app/update-user/update-user.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shop/shop.component */
    "./src/app/shop/shop.component.ts");
    /* harmony import */


    var _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sell/sell.component */
    "./src/app/sell/sell.component.ts");
    /* harmony import */


    var _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./update-book/update-book.component */
    "./src/app/update-book/update-book.component.ts");
    /* harmony import */


    var _update_user_book_update_user_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./update-user-book/update-user-book.component */
    "./src/app/update-user-book/update-user-book.component.ts");
    /* harmony import */


    var _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./forgot-pwd/forgot-pwd.component */
    "./src/app/forgot-pwd/forgot-pwd.component.ts"); //import { HttpClient } from '@angular/common/http';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"] //HttpClient
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_5__["RegisterUserComponent"], _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_6__["LoginUserComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_9__["UpdateUserComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_11__["ShopComponent"], _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__["SellComponent"], _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_13__["UpdateBookComponent"], _update_user_book_update_user_book_component__WEBPACK_IMPORTED_MODULE_14__["UpdateUserBookComponent"], _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_15__["ForgotPwdComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"] //HttpClient
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_5__["RegisterUserComponent"], _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_6__["LoginUserComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_9__["UpdateUserComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_11__["ShopComponent"], _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__["SellComponent"], _update_book_update_book_component__WEBPACK_IMPORTED_MODULE_13__["UpdateBookComponent"], _update_user_book_update_user_book_component__WEBPACK_IMPORTED_MODULE_14__["UpdateUserBookComponent"], _forgot_pwd_forgot_pwd_component__WEBPACK_IMPORTED_MODULE_15__["ForgotPwdComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"] //HttpClient
          ],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/book.ts":
  /*!*************************!*\
    !*** ./src/app/book.ts ***!
    \*************************/

  /*! exports provided: Book */

  /***/
  function srcAppBookTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Book", function () {
      return Book;
    });

    var Book = function Book() {
      _classCallCheck(this, Book);
    };
    /***/

  },

  /***/
  "./src/app/cart.ts":
  /*!*************************!*\
    !*** ./src/app/cart.ts ***!
    \*************************/

  /*! exports provided: Cart */

  /***/
  function srcAppCartTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cart", function () {
      return Cart;
    });

    var Cart = function Cart() {
      _classCallCheck(this, Cart);
    };
    /***/

  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cart */
    "./src/app/cart.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CartComponent_tr_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_57_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var b_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.deleteBookFromCart(b_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var b_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1.authors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1.publications);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1.price);
      }
    }

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(_service, _router, _httpClient, _http) {
        _classCallCheck(this, CartComponent);

        this._service = _service;
        this._router = _router;
        this._httpClient = _httpClient;
        this._http = _http;
        this.usersCart = [];
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.uemail = '';
        this.upwd = '';
        this.ufname = '';
        this.ulname = '';
        this.userEmail = this._service.email;
        this.getUsersCart();
        this.userCartItems = this._service.userCartItems;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "routeToRegisterUser",
        value: function routeToRegisterUser() {
          this._router.navigate(["Register"]);
        }
      }, {
        key: "routeToUpdateUser",
        value: function routeToUpdateUser() {
          this._router.navigate(["update-user"]);
        }
      }, {
        key: "routeToSell",
        value: function routeToSell() {
          this._router.navigate(["sell"]);
        }
      }, {
        key: "routeToShop",
        value: function routeToShop() {
          this._router.navigate(["shop"]);
        }
      }, {
        key: "routeToCart",
        value: function routeToCart() {
          this._router.navigate(["cart"]);
        }
      }, {
        key: "routeToHome",
        value: function routeToHome() {
          this._router.navigate(["home"]);
        }
      }, {
        key: "getUsersCart",
        value: function getUsersCart() {
          var _this = this;

          this._service.getUsersCart(this.userEmail).subscribe(function (v) {
            _this.usersCart = [{
              "id": 1,
              "user": "sam@gmail.com",
              "title": "aa",
              "authors": "a",
              "publications": "public",
              "price": 120.0,
              "quantity": 0,
              "isbn": 0
            }];
            _this.usersCart = v;
            console.log(v);
          });
        }
      }, {
        key: "deleteBookFromCart",
        value: function deleteBookFromCart(book) {
          if (confirm("Are you sure, you want to delete?")) {
            var bk = new _cart__WEBPACK_IMPORTED_MODULE_2__["Cart"]();
            bk.bookOwner = book.bookOwner;
            bk.user = this._service.email;
            bk.title = book.title;
            bk.quantity = book.quantity;
            bk.publication = book.publication;
            bk.price = book.price;
            bk.isbn = book.isbn;
            bk.authors = book.authors;

            this._service.deleteBookFromCart(book).subscribe(function (v) {
              alert('Book deleted from store sucessfully');
            });
          } else {
            return;
          }
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 96,
      vars: 2,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "m-auto"], [1, "nav-item", "m-auto"], [1, "nav-link", 3, "click"], [1, "nav-item"], [1, "form-inline", "my-2", "my-lg-0"], [1, "input-group", "input-group-sm"], ["type", "text", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", "placeholder", "Search...", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", "btn-number"], [1, "fa", "fa-search"], [1, "btn", "btn-success", "btn-sm", "ml-3", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "badge", "badge-light"], [1, "jumbotron", "text-center"], [1, "jumbotron-heading"], [1, "container", "mb-4"], [1, "row"], [1, "col-12"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "col", 1, "text-center"], ["scope", "col", 1, "text-right"], [4, "ngFor", "ngForOf"], [1, "text-right"], [1, "col", "mb-2"], [1, "col-sm-12", "col-md-6"], [1, "btn", "btn-block", "btn-light"], [1, "col-sm-12", "col-md-6", "text-right"], [1, "btn", "btn-lg", "btn-block", "btn-success", "text-uppercase"], ["src", "https://dummyimage.com/50x50/55595c/fff"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fa", "fa-trash"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Simple Ecommerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_a_click_11_listener() {
            return ctx.routeToHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_a_click_14_listener() {
            return ctx.routeToUpdateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Update User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_a_click_17_listener() {
            return ctx.routeToShop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_a_click_20_listener() {
            return ctx.routeToSell();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_a_click_28_listener() {
            return ctx.routeToCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "MY SHOPPING CART");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Authors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Publications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, CartComponent_tr_57_Template, 17, 5, "tr", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Sub-Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "255$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Shipping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "5$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "360$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Continue Shopping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userCartItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersCart);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.scss']
        }]
      }], function () {
        return [{
          type: _registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/forgot-pwd/forgot-pwd.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/forgot-pwd/forgot-pwd.component.ts ***!
    \****************************************************/

  /*! exports provided: ForgotPwdComponent */

  /***/
  function srcAppForgotPwdForgotPwdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPwdComponent", function () {
      return ForgotPwdComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ForgotPwdComponent = /*#__PURE__*/function () {
      function ForgotPwdComponent(_service) {
        _classCallCheck(this, ForgotPwdComponent);

        this._service = _service;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.femail = '';
        this.pwd = '';
        this.fname = '';
        this.lname = '';
      }

      _createClass(ForgotPwdComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "verifyEmail",
        value: function verifyEmail() {
          this._service.forgotPassword(this.femail).subscribe(function (data) {}, function (error) {
            return console.log("error");
          });

          alert("If user exists,Reset Link will be sent!");
        }
      }]);

      return ForgotPwdComponent;
    }();

    ForgotPwdComponent.ɵfac = function ForgotPwdComponent_Factory(t) {
      return new (t || ForgotPwdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]));
    };

    ForgotPwdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPwdComponent,
      selectors: [["app-forgot-pwd"]],
      decls: 27,
      vars: 1,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "jumbotron", "text-center"], [1, "jumbotron-heading"], ["id", "legend"], [1, "form-group"], ["for", "email", 1, "control-label", "col-sm-2"], [1, "col-sm-10"], ["name", "femail", "type", "femail", "id", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "help-block"], [1, "btn", "btn-info", 3, "click"]],
      template: function ForgotPwdComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Simple Ecommerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HAPPY SHOPPING!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Give Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPwdComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.femail = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Please enter valid email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPwdComponent_Template_button_click_25_listener() {
            return ctx.verifyEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Verify Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.femail);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wd2QvZm9yZ290LXB3ZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPwdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-pwd',
          templateUrl: './forgot-pwd.component.html',
          styleUrls: ['./forgot-pwd.component.scss']
        }]
      }], function () {
        return [{
          type: _registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(_service, _router, _httpClient, _http) {
        _classCallCheck(this, HomeComponent);

        this._service = _service;
        this._router = _router;
        this._httpClient = _httpClient;
        this._http = _http;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.uemail = '';
        this.upwd = '';
        this.ufname = '';
        this.ulname = '';

        this._service.getCartItemsNo();

        this.userCartItems = this._service.userCartItems;
        this.userEmail = this._service.email;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "routeToRegisterUser",
        value: function routeToRegisterUser() {
          this._router.navigate(["Register"]);
        }
      }, {
        key: "routeToUpdateUser",
        value: function routeToUpdateUser() {
          this._router.navigate(["update-user"]);
        }
      }, {
        key: "routeToSell",
        value: function routeToSell() {
          this._router.navigate(["sell"]);
        }
      }, {
        key: "routeToShop",
        value: function routeToShop() {
          this._router.navigate(["shop"]);
        }
      }, {
        key: "routeToCart",
        value: function routeToCart() {
          this._router.navigate(["cart"]);
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          console.log("update"); // this._httpClient.post()

          this.user.email = this.uemail;
          this.user.fname = this.ufname;
          this.user.lname = this.ulname;
          this.user.password = this.upwd;

          this._service.updateUserFromRemote(this.user).subscribe(function (v) {
            console.log(v.firstname);
            alert("Updated");
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 38,
      vars: 1,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "m-auto"], [1, "nav-item", "m-auto"], [1, "nav-link"], [1, "nav-link", 3, "click"], [1, "nav-item"], [1, "form-inline", "my-2", "my-lg-0"], [1, "input-group", "input-group-sm"], ["type", "text", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", "placeholder", "Search...", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", "btn-number"], [1, "fa", "fa-search"], [1, "btn", "btn-success", "btn-sm", "ml-3", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "badge", "badge-light"], [1, "jumbotron", "text-center"], [1, "jumbotron-heading"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Simple Ecommerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_14_listener() {
            return ctx.routeToUpdateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Update User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_17_listener() {
            return ctx.routeToShop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_20_listener() {
            return ctx.routeToSell();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_28_listener() {
            return ctx.routeToCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "WELCOME TO THE BOOK STORE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userCartItems);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login-user/login-user.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/login-user/login-user.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginUserComponent */

  /***/
  function srcAppLoginUserLoginUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginUserComponent", function () {
      return LoginUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginUserComponent = /*#__PURE__*/function () {
      function LoginUserComponent(_service, _router) {
        _classCallCheck(this, LoginUserComponent);

        this._service = _service;
        this._router = _router;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.email = '';
        this.pwd = '';
        this.fname = '';
        this.lname = '';
        console.log('reached login constructor');

        if (localStorage.getItem('Loggedin User') != null) {
          //$scope.data = JSON.parse(localStorage.getItem('sample_data'));
          this.logoutUser();
          localStorage.clear();
        }
      }

      _createClass(LoginUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('reached ngOnInit');
        }
      }, {
        key: "hasNumber",
        value: function hasNumber(myString) {
          var pattern = '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}';
          return /\d/.test(myString);
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          var sessionData = JSON.parse(localStorage.getItem('Loggedin User'));

          this._service.logoutUser(sessionData).subscribe(function (data) {}, function (error) {
            return console.log("error");
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this2 = this;

          console.log("login");
          this.user.email = this.email;
          this.user.password = this.pwd; // if(!this.hasNumber(this.pwd)){
          //   alert('Enter a pwd with a number,a upperCase charecter and a special charector');
          //   return;
          // }

          result: String;

          currentValue: String;

          this._service.email = this.email; //localStorage.setItem("Loggedin User", JSON.stringify(this.email));
          //this._router.navigate(["home"]);
          //return;

          this._service.loginUserFromRemote(this.user).subscribe(function (data) {
            console.log(data.emailId); //&& data.emailId.endsWith('.com')

            if (data.emailId.includes('@')) {
              localStorage.setItem("Loggedin User", JSON.stringify(_this2.user.email));

              _this2._router.navigate(["home"]);
            } else {
              alert(data.emailId);
              return;
            }
          }, function (error) {
            return console.log("error");
          });

          return;
        }
      }, {
        key: "routeToRegisterUser",
        value: function routeToRegisterUser() {
          this._router.navigate(["Register"]);
        }
      }, {
        key: "routeToForgotPwd",
        value: function routeToForgotPwd() {
          this._router.navigate(["forgotPWD"]);
        }
      }]);

      return LoginUserComponent;
    }();

    LoginUserComponent.ɵfac = function LoginUserComponent_Factory(t) {
      return new (t || LoginUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginUserComponent,
      selectors: [["app-login-user"]],
      decls: 43,
      vars: 2,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "jumbotron", "text-center"], [1, "jumbotron-heading"], ["id", "legend"], [1, "form-group"], ["for", "email", 1, "control-label", "col-sm-2"], [1, "col-sm-10"], ["name", "email", "type", "email", "id", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "help-block"], ["for", "pwd", 1, "control-label", "col-sm-2"], ["name", "pwd", "type", "password", "id", "pwd", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-info", 3, "click"]],
      template: function LoginUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Simple Ecommerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HAPPY SHOPPING!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "LOGIN HERE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginUserComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Please enter valid email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginUserComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.pwd = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Enter Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginUserComponent_Template_button_click_32_listener() {
            return ctx.loginUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "LOGIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginUserComponent_Template_button_click_37_listener() {
            return ctx.routeToForgotPwd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "New User?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginUserComponent_Template_button_click_41_listener() {
            return ctx.routeToRegisterUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "REGISTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pwd);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXVzZXIvbG9naW4tdXNlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-user',
          templateUrl: './login-user.component.html',
          styleUrls: ['./login-user.component.scss']
        }]
      }], function () {
        return [{
          type: _registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register-user/register-user.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/register-user/register-user.component.ts ***!
    \**********************************************************/

  /*! exports provided: RegisterUserComponent */

  /***/
  function srcAppRegisterUserRegisterUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function () {
      return RegisterUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/registration.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RegisterUserComponent = /*#__PURE__*/function () {
      //pattern: RegExp = "^[a-zA-Z0-9\\.;,:' ]{1,100}$";
      function RegisterUserComponent(_service) {
        _classCallCheck(this, RegisterUserComponent);

        this._service = _service;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.remail = '';
        this.rpwd = '';
        this.rconfirmpwd = '';
        this.fname = '';
        this.lname = '';
      }

      _createClass(RegisterUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "hasNumber",
        value: function hasNumber(myString) {
          return /\d/.test(myString);
        }
      }, {
        key: "registerUser",
        value: function registerUser() {
          console.log("register");

          if (!this.remail.includes('@')) {
            alert('Invalid Email Address.Please Enter correct one');
            return;
          } // if(this.remail.substring(this.remail.indexOf("@")+1,this.remail.indexOf(".com")).length == 0){
          //   alert('Invalid Email Address.Please Enter correct one');
          //   return;
          // }
          //   var p = new RegExp("^[a-zA-Z0-9\\.;,:' ]{1,100}$");
          //   if(!p.test(this.rpwd)) {
          //     alert("Edgsdgdsgsgtor");
          //     return;
          // }


          if (this.rpwd != this.rconfirmpwd) {
            alert('Given Paaswords dont match');
            return;
          }

          if (this.rpwd.length < 8) {
            alert('Enter a pwd with minimum of 8 charectors');
            return;
          }

          if (!this.hasNumber(this.rpwd)) {
            alert('Enter a pwd with a number,a upperCase charecter and a special charector');
            return;
          }

          var pattern = new RegExp(/[~`!#@$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //acceptable chars

          if (!pattern.test(this.rpwd)) {
            alert("Enter a pwd with a number,a upperCase charecter and a special charector");
            return;
          }

          if (!this.rpwd.match(".*[A-Z].*")) {
            alert("Enter a pwd with a number,a upperCase charecter and a special charector");
            return;
          }

          if (this.fname == "" || this.lname == "") {
            alert('Enter All Details of the User');
            return;
          }

          this.user.email = this.remail;
          this.user.fname = this.fname;
          this.user.lname = this.lname;
          this.user.password = this.rpwd;

          this._service.registerUserFromRemote(this.user).subscribe(function (v) {
            //console.log(v);
            alert('Registered User Succesfully');
          });
        }
      }]);

      return RegisterUserComponent;
    }();

    RegisterUserComponent.ɵfac = function RegisterUserComponent_Factory(t) {
      return new (t || RegisterUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]));
    };

    RegisterUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterUserComponent,
      selectors: [["app-register-user"]],
      decls: 64,
      vars: 5,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "jumbotron", "text-center"], [1, "jumbotron-heading"], [1, "container", "mb-4"], [1, "row"], [1, "col-12"], [1, "form-horizontal"], ["href", "#/Login"], ["id", "legend"], [1, ""], [1, "control-group"], ["for", "fname", 1, "control-label"], [1, "controls"], ["type", "text", "id", "fname", "name", "fname", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], [1, "help-block"], ["for", "lname", 1, "control-label"], ["type", "text", "id", "lname", "name", "lname", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["for", "username", 1, "control-label"], ["type", "text", "name", "remail", "id", "username", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "control-label"], ["name", "rconfirmpwd", "type", "password", "id", "password", "name", "password", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["for", "password_confirm", 1, "control-label"], ["name", "rpwd", "type", "password", "id", "password_confirm", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "click"]],
      template: function RegisterUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Simple Ecommerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HAPPY SHOPPING!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "legend", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.fname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Please provide your First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.lname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Please provide your Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_42_listener($event) {
            return ctx.remail = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Username can contain any letters or numbers, without spaces");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_49_listener($event) {
            return ctx.rconfirmpwd = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Password should be at least 8 characters with a uppercase and a special charector.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Password (Confirm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_56_listener($event) {
            return ctx.rpwd = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Please confirm password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterUserComponent_Template_button_click_61_listener() {
            return ctx.registerUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "REGISTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.remail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rconfirmpwd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rpwd);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXVzZXIvcmVnaXN0ZXItdXNlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register-user',
          templateUrl: './register-user.component.html',
          styleUrls: ['./register-user.component.scss']
        }]
      }], function () {
        return [{
          type: _registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/registration.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/registration.service.ts ***!
    \*****************************************/

  /*! exports provided: RegistrationService */

  /***/
  function srcAppRegistrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationService", function () {
      return RegistrationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user */
    "./src/app/user.ts");
    /* harmony import */


    var _book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./book */
    "./src/app/book.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RegistrationService = /*#__PURE__*/function () {
      function RegistrationService(_http) {
        _classCallCheck(this, RegistrationService);

        this._http = _http;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.email = '';
        this.pwd = '';
        this.fname = '';
        this.lname = '';
        this.userCartItems = 0;
        this.usersCart = [];
        this.updateBook = new _book__WEBPACK_IMPORTED_MODULE_2__["Book"]();
        this.userCartItems = 0;
        this.getCartItemsNo;
        this.getUsersCart(this.email);
      }

      _createClass(RegistrationService, [{
        key: "updateBookData",
        value: function updateBookData(bk) {
          this.updateBook = bk;
        }
      }, {
        key: "loginUserFromRemote",
        value: function loginUserFromRemote(user) {
          console.log(user.email);
          console.log(user.password);

          value: String; //const value = this._http.post("/webapp/loginCheck?email="+user.email+"&pwd="+user.password,user);
          //alert(value);


          return this._http.post("/webapp/loginCheck?email=" + user.email + "&pwd=" + user.password, user);
        }
      }, {
        key: "registerUserFromRemote",
        value: function registerUserFromRemote(user) {
          var res = this._http.post("/webapp/addUser?fname=" + user.fname + "&lname=" + user.lname + "&email=" + user.email + "&pwd=" + user.password, user);

          return res;
        }
      }, {
        key: "updateUserFromRemote",
        value: function updateUserFromRemote(user) {
          var res = this._http.post("/webapp/updateUser?fname=" + user.fname + "&lname=" + user.lname + "&email=" + user.email + "&pwd=" + user.password, user);

          return res;
        }
      }, {
        key: "getUserFromRemote",
        value: function getUserFromRemote(user) {
          var res = this._http.post("/webapp/getUser?email=" + user.email, user);

          return res;
        }
      }, {
        key: "sellBookFromRemote",
        value: function sellBookFromRemote(book) {
          var res = this._http.post("/webapp/addBook", book);

          return res;
        } //make changes by owner

      }, {
        key: "updateBookFromRemote",
        value: function updateBookFromRemote(book) {
          var res = this._http.post("/webapp/updateBook", book);

          return res;
        }
      }, {
        key: "getAllBooksFromRemote",
        value: function getAllBooksFromRemote() {
          var res = this._http.get("/webapp/getAllBooks");

          return res;
        }
      }, {
        key: "getAllBooks",
        value: function getAllBooks() {
          this.getAllBooksFromRemote().subscribe(function (v) {
            console.log(v.length);
            alert('got books');
          });
        }
      }, {
        key: "getUsersCart",
        value: function getUsersCart(email) {
          var res = this._http.post("/webapp/getUsersCart?email=" + email, email);

          return res;
        }
      }, {
        key: "getCartItemsNo",
        value: function getCartItemsNo() {
          var _this3 = this;

          this.getUsersCart(this.email).subscribe(function (v) {
            console.log(v.length);
            _this3.userCartItems = v.length; // alert('got books');
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(book) {
          return this._http.post("/webapp/addToCart", book);
        } //deletebook by owner

      }, {
        key: "deleteBook",
        value: function deleteBook(book) {
          return this._http.post("/webapp/deleteBook", book);
        } //deletebook from cart

      }, {
        key: "deleteBookFromCart",
        value: function deleteBookFromCart(book) {
          return this._http.post("/webapp/deleteBookFromCart", book);
        }
      }, {
        key: "updateCart",
        value: function updateCart(book) {
          return this._http.post("/webapp/deleteFromUsersCart", book);
        }
      }, {
        key: "saveImage",
        value: function saveImage(fd) {
          return this._http.post("/webapp/uploadImage", fd);
        }
      }, {
        key: "saveImage1",
        value: function saveImage1(fd) {
          return this._http.post("/webapp/uploadImage1", fd);
        }
      }, {
        key: "getUsersImages",
        value: function getUsersImages(url) {
          return this._http.post("/webapp/getImages?url=" + url, url);
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(isbn, owner, url, i) {
          return this._http.post("/webapp/deleteImage?bookISBN=" + isbn + "&bookOwner=" + owner + "&index=" + i + "&url=" + url, url);
        }
      }, {
        key: "canShowUpdateButton",
        value: function canShowUpdateButton(bk) {
          this.showUpdateButton = bk;
        }
      }, {
        key: "getImagesOfUser",
        value: function getImagesOfUser(user, owner, isbn) {
          return this._http.post("/webapp/getImagesOfUser?user=" + user + "&isbn=" + isbn, user);
        }
      }, {
        key: "logoutUser",
        value: function logoutUser(user) {
          return this._http.post("/webapp/logoutUser?user=" + user, user);
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(email) {
          return this._http.post("/webapp/forgotPassword?email=" + email, email);
        }
      }]);

      return RegistrationService;
    }();

    RegistrationService.ɵfac = function RegistrationService_Factory(t) {
      return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegistrationService,
      factory: RegistrationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sell/sell.component.ts":
  /*!****************************************!*\
    !*** ./src/app/sell/sell.component.ts ***!
    \****************************************/

  /*! exports provided: SellComponent */

  /***/
  function srcAppSellSellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellComponent", function () {
      return SellComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../book */
    "./src/app/book.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SellComponent_img_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 46);
      }

      if (rf & 2) {
        var img_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var SellComponent = /*#__PURE__*/function () {
      function SellComponent(_service, _router, _httpClient, _http) {
        _classCallCheck(this, SellComponent);

        this._service = _service;
        this._router = _router;
        this._httpClient = _httpClient;
        this._http = _http;
        this.book = new _book__WEBPACK_IMPORTED_MODULE_1__["Book"]();
        this.sISBN = '';
        this.stitle = '';
        this.sauthors = '';
        this.spublication = '';
        this.sprice = '';
        this.squantity = '';
        this.selectedImage = [];
        this.imageURL = []; //"https://dummyimage.com/50x50/55595c/fff";

        this.link = "https://s3.amazonaws.com/webapp.firstname.lastname/1592403468227-book.jpeg"; //imageURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFhUXFRcVFRcVFRUVFhUVFRUXFxUVFRYYHSggGBolHRUXITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lIB8tLS0tKystLS0vLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLf/AABEIAM4A9QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAABAUGBwECAwj/xABEEAABAwEFBQUDCwIEBgMAAAABAAIDEQQFEiExBkFRYXEHIoGRoRMysUJSYnKCkqLB0eHwY/EUIzPSFVNzk7LCJDRD/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACcRAAMAAgICAgEEAwEAAAAAAAABAgMRITEEEkFRYQUiMvFCcbET/9oADAMBAAIRAxEAPwC8UIQgBCEIAQhCAEIQgBCFxtdrjibilkYxo1c9wa0eJyQHZCh159pt2xVDZXTu+bAwyV+3kz8Si949rE7qizWRrBudaH4j/wBuP/cs6yxPbN48bLfUlspHeN6wWcYp5o4hxke1nlU5qjrw2ovG0f6lska0/JgAhHTE3vnzTOLIyuIjE7e55L3HqXVKwrzJXSOzH+mW/wCT0W7eHalYGVEPtbQf6MZw/ffhFOYqo1eHafbZMoLPDCOMrnTPpxwtwgHzUPCyuavLt9cHZj/TsU98iq33zbbR/r22Zw+awiFnQtjpUdVKdgtujZy2yW15MRo2CdxzZwimPDg/z5QxayMDgQRUHUFUjyLmtt7NsviYrj1S0ejkKnthNuHWMts1rcXWYkNimdmYNwjkO+Pg75PT3bga4EVGYOi9THkVraPn82GsVetGUIQrmQIQhACEIQAhCEAIQhACEIQAhCEAISO9b1hszPaTyNY3Sp1J4NAzceQUIvLtTibX2Fne/gZCI29QBiPnRVq5ntmkYrv+KLDWksjWglxAA1JIAHUlUVfXaXeUlQx7IR/SYC6nN0mLzFFC7wt005xTyySn+o9z6dATQeCyedfB0T4dfLPQd69od2wVDrS17vmwgzGvAlgLQepCiN59sg0s1kcfpTvDPwMrX7wVSNXRpWdZ6+DojxMa75JZeXaDec+toETT8mBgZ+N1X+RCj01ZHY5XOkd86VzpHebiVwaV0aVz1dPtnXGOJ6QpZkurSkzXLq1yyaOhMUArcFcA5bgqjRomdqrNVyDlnEq6LbOlUVWlUVTQ2ZcARQ5g7lKNhdtXWEts9pcXWQmjHmpdZ66NdvMX/j0UVLlq7gtcWR43tGOfDOWdUeko3hwDmkEEAgg1BBzBB3hbKkNhdtXXeRDMXPshORzc6zknUbzHxG7dwN12edr2texwc1wDmuaQWuaRUEEaherjyK1tHz2bDWKtM6IQhXMQQhCAEIQgBCEIAQhCAFxtlqZFG+WR2FjGue8nc1oqT5BdSVBe2S3GO6pw00L3Rxn6rpBiHiAR4qH0TK20io7/ANp5bfaHTSEhtSImVyjj3NA4nIk7zypTML6hRazSp7sU64LXOz2sbSWkdrVCmyRtE+uAITbaolVMvSEIW4K1IQCpIR1aV0aVxBW4Kq0WTFDXLo1yTBy6Byq0aJilrluHJMHLcOVGi6oUBy2DknDlv7RrWue8kNaMRpqcw0NbzJcByrXcoU7eiXaS2zriWQapi/4nLI7/ACo8huALyB9I5fALo29HNNJoy3nQj0Oqv/5MzXkwx1bM11cLgaGhoQc+oSdtva6V0bQ7ug5uoC4g8BWmRrqU2SxYD7WA1HymjTnlw5bvhwfa2+1ZKMtMQ4fJd1yV1jXJlWelrf8AaJA4qR7DbaPu53s5MT7I45t1dASc3xje3i3xGdaxbHXn0WpcqxTh7RfLE5J1R6dslpZKxskbg9jgHNc01DgdCCuyoDYbbKS7n4XVfZXGr2b4ydZIvzbv6q97BbY5o2yxPD2PGJrm5gj+bty9LHkVrg8TNheN6fQoQhCuYghCEAIQhACEIQHGd1Aq17XJPaWGWPf3Xj7Dg4+gKsq0jJVxt/AXROpuUMtL09lBRPTtHNgoBm8+TRzTaGYX03A/BZs0hJJOpK5aR6U19EpsT8szUrpaY6hNcVowkNGbt/BvVOsOYzzKwZ1S98DRPHRcU52uJNrxRSiGAK2BWmNoBLsRpoG0z6uJ7u7cdUndeR+Qxo5n/Md+Lu/hVvXZR5FIuBW4cm58M7+87FyxuDPIOI9AiC0uacL+leHXiOahwJy/Y7e1axjpHZhtAGg0xPdXC0ncKNcTv7tN9Q2tnnmJLQAB82jGjlVxzPiSt7fUxkcw7yBH/sVi7Zu5h3gk+dM/y8Ai0pFbd62Bnnjze3E3jkR95uniu0loE0bmt1oO6dciD46LsHpvttnwnGzLiBu5jlyULTZavaV3tHa5rQAHM34sXXIA+VPVOTiCKEVB1BzHkmf2ftRjZk8ajSp4g7iukV4kd2QEEamnxG5Knb2iMeRJerMTxmB2OM906g/A8uB/h0tNmDx7SPfq3nvoOPLyS02qIscXOBGFwDc8TnYThoKZZ0NTTx0SK53GrhuoD41p+fopW9bKP19vVdf8MWWOucTy129rjl1BGR8R4rt/jXsylYRzGh6bj4FZtFkq7Ewhrq51yHXl+fxVAkChIOWdB3T4HUdUbTJlUuP6NY7Q12h8N/kpPsTthLd0m99ncayRcD/zI65B3LQ79xEabQCjWtaDrhaBXqdSsKE/V7Rap9p1R6huu8YrRE2aF4fG4Va4eoI3EHIg5hKl512N2smu+XE2r4XEe1irk7djZ814479DuIv2571htUTZoHhzHaHeDva4bnDeF248ipHl5sLxv8C1CELQwBCEIAQhCA1eKqKbTWLE05KWpFeNmxNKBHl7a27TDMSBkSmWyuoa8AT5K3dvrjxNdkqgkYWktOoy8FjcnXhv4Fdik3nU5lP9jmUXhfRO1jmXPaO7G9D7I2oTVaYqJys8lQtLVEs0bPkZCkbsUbg5pI4GvmCnGZiTyNBFD/ZXTMbnZuy0R0q55+q1pc7xrRvr4JJbrQ15GFuEAUzNXOzJq4gDjSnALiGgOo+tN9KVpyqE5R4G+4xo4E989QXZDwAVuEZ/urg4QW0ZA8AK6jIUqVrNAWnGzTXLd+oSieAyNc75jS4u4ADQnnoOZC43fIaEcMx0P7/FR+UW+fVnSG3A65H0SyOWOhc9zS0A93EC55oaNDRnmd+gSWSBjtRQ8W5eY0XIXe3/AJh+4P8AeoSXZZu9aNLqJxEfRqfAtFfX1Ti8Bwo4Ajnu6EZjwXOJjWAhgOepOZNNBlkBy+K2qop88EwtTpnI2GL6Y6OFPVpXdjWtFGNoNTnUmmlT55aZla1WVG2WUyujaqKrCyoJ2ZQhZQgE/bI7UTWCXHH3o3U9rETRrxxHB43HzyTCtgibT2itJUtM9MXHfMNrhbNA7E06j5TXb2vG5w/mScF5w2X2imsMvtIjUGgkjJ7sjeB4Hg7d0qDfmz1+w22ETQuqNHNOTmO3teNx9DqF248qr/Z5mbA8b2uhzQhC1MAQhCAFhwqsoQEX2muwPaclQW2l0GN5cBvXp+0xYhRVht3cOJrjRQ0Xl6ZQ4KV2aVc7fZTFIWnjkuTHUXPSO+L2tkjsU6dBmFGrJMnuyTVXPSOuKOFrhTc8UT/PHVNFpioiYpCC0RVGWo9eS5We2FgphaeGIE06CtD4gjklRW8cmH3QAd5AAcftaq6Zi552jlJHPJT2jiGjMB5wtH1YwMvBq6RRtYCGkknVxFNNABuGfjyWKrKN7JmEjYLNVosqpc3WVqFlQDaqyFgLdrSdAgALK5utDBq6vJne9dPVcnW0/JYBzd3j5CgHqpUsq7SFbWk6BayStb7zgDwHePkK08Uge97vecSOGg+6MlhsSt6L5KO38IU/8QbiAwnDvJ18Gg8eaVsoRUEEcR/MjyKbSxaMkMZxN8RucOBRwn0Qra7HcJ02cv6axTCWE8nsPuyN+a78jqPOrWCCARoRUdD/ACiys9tM1aTWj0dsztDDboRLEcxk9h96N3zXfkdCndea7hvqaxzCaF1HDIg+69u9rxvHw3K+dlNpobfFjjNHigkjJ7zCfi00NDv6ggdmLL7cPs83Pgccroe0IQtjnBCEIATRfVhD2nJO61e2oQHnXb/Z8glwCr0eo1XpfbG5Q9pyXn/aW7DDITTLes6R0Yr0xBBInaxzJjBS2zSrnpHdFEphfUJNa4VxsU6cHCoWPR09oYJWLmnC1wpA4KyM2jCysLKkgyFkLGQ1c0dSAT0GpWpnaNAXfhb65nyCnTKukjq0LL3Nb7zgDw1d5DTxokzpXnKtBwbl66nxKwyIBT6/ZV2/g6utfzW+Lsz90ZD1XJ+J3vOJ5HTwGgW4asqeuium+zQRrYNWSVq56DhGywXIije/3Wk89B5nJKorvA991eTdPFx/JQ2l2StvoRBxJoASeAzKUsu1x984eQ7zv0CXso0UaA0ct/U6lYVHf0WWP7NYY2sbhbip9I18huWyyhUb2XS0CW3PestllbNC/C9vk4b2uG9p4eOoBTZNaWMoHOzOgGbieAaMynm5dl7da3tayIQh3yp6h1N5EQ7w+1RXmKropeSJWqZd2yu18Ftix4mxyNoJI3OAwuO8E+800ND+aFHLr7HbC1n/AMp0tpkyq4vdE0ccDIyKDqSeaF3L21yeZXpvgsZCEKxmCEIQCW3WcOaQqh7QNnagkBXOQmHaK7RIw5KGSmeU5oixxYd2izE6il23VxGNxcBoVDQVjSO3Fe1oeLJMnuyy1Ci1nkTxYp1z0jsihztMdQmi0R0Ke43VCRWuFUTNKQ0lC3kbRaK5mbuBcxzdcqt6tzy6gEeKSw0SlppmFh8Fc2ZHe3QH6p3dD+ysn8GdzztGAiq4h5rShrpShrXhRKG2N594hnXX7oz86KXwVT30cy9atcSaNBJ4AVKWMs0Y1BceeQ8h+qUteaUGQ4NAA9FV0iyhvsRssDz7xDfV3kPzSmKyxt+TiPF2f4dPitwtgqOmyyhI2c4nX9vJYQuM9pYz3nAE6DUnoBmVVLZZtLs7LBNMyll33FbbRmyH2Ue+Sc4fJmtetFKrq7PoAQZy+0v1AfVkXVsTRicPAjmtpwU++DnvyYXXJBrIXzuwWaJ87v6Y7o+s890KTXdsHPJnaZxGN8dno53R8zu609AVZNjunC0NADWDRjQA37rTTxLndE5wWECmXT9tw6ABdE4ZRyX5F0Ra5NlYLP8A6MLWHe/N0h41kdV3gKBTXZuwhgc6mZy0AyHr5krAgATjdvueJ/JamAqQhCAEIQgBCEIAXOZlQuiEBXW29xB7SaKhL5sJhkIIyJXrG87IHtIVK9oOzupAVaWzSK0yrGmicrE4nPQDU7gmwtIJadR8Eokk0YNBmeblz0jvm+Nkisdqr7unE70tkbUJksL/ACG9O1mnDtNOKwpHVLG+0xJGQnu1RJqmZRSmRSOK2CwshSVOwlOZAAJ1I1NBTM8MhkgLmFuFAOgW4Saa0sZm5wHx8BqnW7rhttoIDIfZNIrinqHUrq2FtXkfSIDeJCmYquil5ZjtiWq1s8jpThgjfKRqWDuN+vIe63xKm11bAwijp3OtDq/KIEYPANacFerpK/NU2sN0BgAaGxtbkA0YcI+jkC0cmiNbT46+Tlvy3/iitbv2HtMn/wBiX2QOkcILpCPrEVr0aRzUyuHZGzwZwwtxb5HUe88e8SQOYxO+qpbZ7uaMsPM1GvMt39XV6pa2EanzOn881vMpdHLV1XbGqz3aMicyNDXTkHZU+yGJxisoGQHMgceJ58ylQb/NP3+AQOWfoP0+KsUNWR/wfrp8VuKD9tf1WCeJ/Ief9lB9pu1Gw2WrI3f4iX5kJBaD9OX3RnwxHkhJOHeXqVBb321ZY7wijik9sZaRSwRnG9rsXdeQMmOo/TKobpoRBbTf17Xq7AHGzwn5ENWkjg+T3neg5K0+zfY+KwR1bG32jh3n0BeRwxHOnLRVa2WX7SbIQhWKAhCEAIQhACEIQGHBRfam6RIw5KUrjaYg4UQHlvbG5jFIXAb1Hm5nLeVe23mz4c0mipC2WYwyFp0rl1WVo6sN/B0M1ThHuN/Ed5Kd7FMo7GaJxssy56R242SYGoTfa4l0ss61t9pY1uJzgBz/AC4rJLk3bWtjY4Iqll3XRarXR0EOGM6SzHAw/UHvSfZBUuurs7hBraHvtDh8nNkQ4VjacR+25nQronE32cd+TE9ckFsmOV2CCN8z/mxtLqc3EZNHMqTXZsPaJAHWiVsTD8mEte48jMe4D9TGeSsmw3QxjRG1jWM1DGNbQc8DW4AfpYXn6SdrPYwDWmZyxE1J5Yq+gJ+qtZxSjlvyLr8EVuLZKCz5xQgO3yOxGTTUvd3x4eyB4KSwXWNDnvpQAV+dgAp4kO+snSGz+np8KeGHolDIxu/bz08hXmtTATQ2UDThSupI4A55cgXdEpZEB18z6Z/Doug/vT8zr8EcvQIQFKcvI/sFn05nX+eST263RQMMk0jI2DVz3Bo6Yj8M1Wm0XbDE0mO74TO/T2jw5sQ5huTnfhCE62WfPK1jS55AaBUueQGgcTXIDqq92l7XLLCSyytNql0q04Yh1fSrvsinMKASWC871eHWqV7m1qGDuxt+qwZeOvNTnZrs1jjoXNqVGydJdkJtlqvW9jSaQtiP/wCUYLI6cwM3/aJUr2Z7MmNoXipVnXbcMcYFGhPEcAG5ND2+hjujZ6OICjQE/Rsot6IUlQQhCAEIQgBCEIAQhCAEIQgGq+bCHtOSortA2eoS4BeiHtqFDNr7mD2nJQyyZ5mHPUapRA9OO091mGQmmW9Nsbd6wtaO7FXshzsjpJHtihbjkd7orQADVzicmtHFT3Z3YqOMiSek82uJw/ymco2OGfUg8e6k3ZjdQ9gbRlimce982NjixreXea4mpFe7wVlWOwcRXr+lPyPVaRCk5s2Z29fAks9k35muVa0B5Yiau6V8FFr32gtAkfAzBDgNMm1ceYrk37tVY8cQ6nQ0+BNcvEkclV+2VjL7VJhy3Cm40/mijLNVLUvTL+Hkxxmmskpr5TJZsPePtYzFI4GRlDXfI06OI3uByOXDMVUtaz+5/TU9HFUTsHer4bfCXE4XO9k/pJ3c/HCfBXzpy5nXy/smFUpSp7Z0fqmCcWfcLSrnX19mQ3+HTwH7LNfH0CZdotqbJYW1tMzWHUNPekd9WId4jnSnNVfffaxarSSy74DGDl7WUBz/AAYKsb44/BannJbLcve+bPZY/aWiZkbOLjQEjc0DNx5NFeSrHaDtgc8mO7YC86e1lBDerYxmeriOijl3bD2q2Se2tcj5HnUvJcacM9BnporM2d2AiiA7oqoJ0kVfDs1b7xkEtslkkO7Ecm8mtFA0cgArE2b7OoogCW1PRWFY7qYwZAJe2MBNB0NdguZkYyaE5siAXRCkqCEIQAhCEAIQhACEIQAhCEAIQhACEIQAk1tgDmkJSsFAU32gbO1DiAqhEZY4xu50/ML1NtBdokaclQ+3GzjmuLmjMGqpc7Rtiv1ZKOye3NksjI6jHAXRvBOYxPe9hG8AhxFRvYVZUDcv4B5BeY7svSazTCaB/s5Rk5p9yQZVaQciDTTxBBFVZN2drzQ2losUodxicHtPMNdQjpiKlUvkisb3xyi2R8Nw3fkEwtuESPe9+pJoBmeRUKtvbMwCkNild/1XtiaPBodXzCjlr2xvi39yN4gjPybO3Ac+Mhq6vQhTtFfVk9tdtu26YpWWlzHySSOlMTWiSY94mIU+RQaOJArWihl79pN420lljj/w0ZyxDvTEcfaEUZ9kCnFddnOzJzjjmqSTUk5kk6k81aNx7HRQgUaFCLXkdPdPbKkuLs4lmd7Scuc5xq4uJcSeJJzJ6q0bg2HihA7g8lMrPYWt0CVBqnRR0IrLdzWDIJY1gC2QpKghCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEBpIyoUYv/Z5soOSlSwW1QFHXv2eBxNGprj7NHV3q/32Zp3LUWRvBRot7MqG6OzJgILhVT26NlYogKNHkpM2IDctwE0Q2J4LI1ugSgBZQpIBCEIAQhCAEIQgBCEIAQhCAEIQgBCEID//2Q==";

        this.files = null;
        this.userCartItems = this._service.userCartItems;
        this.userEmail = this._service.email;
      }

      _createClass(SellComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "routeToRegisterUser",
        value: function routeToRegisterUser() {
          this._router.navigate(["Register"]);
        }
      }, {
        key: "routeToUpdateUser",
        value: function routeToUpdateUser() {
          this._router.navigate(["update-user"]);
        }
      }, {
        key: "routeToSell",
        value: function routeToSell() {
          this._router.navigate(["sell"]);
        }
      }, {
        key: "routeToShop",
        value: function routeToShop() {
          this._router.navigate(["shop"]);
        }
      }, {
        key: "routeToCart",
        value: function routeToCart() {
          this._router.navigate(["cart"]);
        }
      }, {
        key: "routeToHome",
        value: function routeToHome() {
          this._router.navigate(["home"]);
        }
      }, {
        key: "sellBook",
        value: function sellBook() {
          var _this4 = this;

          if (this.sprice != "0.1" && (parseInt(this.sprice) > 9999.99 || parseInt(this.sprice) < 0.1)) {
            alert('Max Price of 9999.99 and Min price of 0.1 is accepted');
            return;
          }

          if (parseInt(this.squantity) > 999 || parseInt(this.squantity) <= 0) {
            alert('Max Quantity of 999 and Min price of 1 is accepted');
            return;
          }

          if (this.stitle == "" || this.sauthors == "" || this.sprice == "" || this.squantity == "" || this.spublication == "") {
            alert('Enter All Details of the Book');
            return;
          }

          this.book.isbn = this.sISBN;
          this.book.authors = this.sauthors;
          this.book.quantity = parseInt(this.squantity);
          this.book.publication = this.spublication;
          this.book.price = this.sprice;
          this.book.title = this.stitle;
          this.book.user = this.userEmail;

          this._service.sellBookFromRemote(this.book).subscribe(function (v) {
            var fd = new FormData();

            for (var y = 0; y < _this4.selectedImage.length; y++) {
              if (_this4.selectedImage[y] != undefined) {
                var _fd = new FormData();

                _fd.append('imageFile', _this4.selectedImage[y]);

                _fd.append('bookISBN', _this4.book.isbn);

                _fd.append('bookOwner', _this4.book.user);

                _this4._service.saveImage(_fd).subscribe(function (v) {
                  console.log(v);
                });
              }
            }

            alert('Added Book To The Store Succesfully');
          }); // const fd = new FormData();
          // for(var y=0;y<this.selectedImage.length;y++){
          //   fd.append('imageFile', this.selectedImage[y]);
          // }
          // fd.append('bookISBN',this.book.isbn);
          // fd.append('bookOwner',this.book.user);
          // this._service.saveImage(fd).subscribe(v => {console.log(v)});
          //  const fd1 = new FormData();
          //  for(var y=0;y<this.selectedImage.length;y++){
          //   fd1.append('File',this.selectedImage[y]);
          //  }
          //  fd1.append('bookISBN',this.book.isbn);
          //  fd1.append('bookOwner',this.book.user);
          //  this._service.saveImage1(fd1).subscribe(v => {console.log(v)});

        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var _this5 = this;

          console.log(event);

          if (event.target.files) {
            this.files = event.target.files;

            for (var i = 0; i < File.length; i++) {
              var reader = new FileReader();
              this.selectedImage.push(event.target.files[i]);
              reader.readAsDataURL(event.target.files[i]);

              reader.onload = function (event) {
                _this5.imageURL.push(event.target.result);
              };
            } //this.selectedImage = event.target.files[0];
            //var reader = new FileReader();
            //reader.readAsDataURL(this.selectedImage);
            //reader.onload = (event: any) => {
            //  this.imageURL.push(event.target.result);
            //}

          }
        }
      }]);

      return SellComponent;
    }();

    SellComponent.ɵfac = function SellComponent_Factory(t) {
      return new (t || SellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]));
    };

    SellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SellComponent,
      selectors: [["app-sell"]],
      decls: 101,
      vars: 8,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "m-auto"], [1, "nav-item", "m-auto"], [1, "nav-link", 3, "click"], [1, "nav-item"], [1, "form-inline", "my-2", "my-lg-0"], [1, "input-group", "input-group-sm"], ["type", "text", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", "placeholder", "Search...", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", "btn-number"], [1, "fa", "fa-search"], [1, "btn", "btn-success", "btn-sm", "ml-3", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "badge", "badge-light"], [1, "jumbotron", "text-center"], [1, "jumbotron-heading"], [1, "container", "mb-4"], [1, "row"], [1, "col-12"], [1, "form-horizontal"], ["id", "legend"], [1, ""], [1, "control-group"], ["for", "fname", 1, "control-label"], [1, "controls"], ["type", "text", "id", "sISBN", "name", "sISBN", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], [1, "help-block"], ["for", "stitle", 1, "control-label"], ["type", "text", "id", "stitle", "name", "stitle", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["for", "sauthors", 1, "control-label"], ["type", "text", "name", "sauthors", "id", "sauthors", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["for", "Price", 1, "control-label"], ["name", "squantity", "type", "text", "id", "squantity", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["for", "publication", 1, "control-label"], ["name", "spublication", "type", "text", "id", "publication", "name", "publication", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["name", "sprice", "type", "text", "id", "Price", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["type", "file", "name", "file", "multiple", "multiple", 3, "change"], ["id", "myImg", "height", "200", "width", "300", 3, "src", 4, "ngFor", "ngForOf"], [1, "btn", "btn-success", 3, "click"], ["id", "myImg", "height", "200", "width", "300", 3, "src"]],
      template: function SellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Simple Ecommerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellComponent_Template_a_click_11_listener() {
            return ctx.routeToHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellComponent_Template_a_click_14_listener() {
            return ctx.routeToUpdateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Update User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellComponent_Template_a_click_17_listener() {
            return ctx.routeToShop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellComponent_Template_a_click_20_listener() {
            return ctx.routeToSell();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellComponent_Template_a_click_28_listener() {
            return ctx.routeToCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "EASY SELLING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "legend", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Now you can sell with best deals...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "ISBN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellComponent_Template_input_ngModelChange_51_listener($event) {
            return ctx.sISBN = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Please provide book's ISBN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "TITLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellComponent_Template_input_ngModelChange_58_listener($event) {
            return ctx.stitle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Enter Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "AUTHORS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellComponent_Template_input_ngModelChange_64_listener($event) {
            return ctx.sauthors = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Enter Authors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellComponent_Template_input_ngModelChange_71_listener($event) {
            return ctx.squantity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Enter Quantity to sell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "PUBLICATIONS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellComponent_Template_input_ngModelChange_78_listener($event) {
            return ctx.spublication = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Enter your book's publication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "PRICE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellComponent_Template_input_ngModelChange_85_listener($event) {
            return ctx.sprice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Enter Price to sell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Upload Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SellComponent_Template_input_change_92_listener($event) {
            return ctx.onFileSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, SellComponent_img_93_Template, 1, 1, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellComponent_Template_button_click_98_listener() {
            return ctx.sellBook();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "ADD BOOK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userCartItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sISBN);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sauthors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.squantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.spublication);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sprice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imageURL);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGwvc2VsbC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sell',
          templateUrl: './sell.component.html',
          styleUrls: ['./sell.component.scss']
        }]
      }], function () {
        return [{
          type: _registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shop/shop.component.ts":
  /*!****************************************!*\
    !*** ./src/app/shop/shop.component.ts ***!
    \****************************************/

  /*! exports provided: ShopComponent */

  /***/
  function srcAppShopShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopComponent", function () {
      return ShopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../cart */
    "./src/app/cart.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ShopComponent_tr_57_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_tr_57_td_13_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var b_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.addToCart(b_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add to Cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShopComponent_tr_57_td_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_tr_57_td_14_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var b_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.viewBookDetails(b_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View Book Details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShopComponent_tr_57_td_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_tr_57_td_15_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var b_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.deleteBook(b_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShopComponent_tr_57_td_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_tr_57_td_16_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var b_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.updateBook(b_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShopComponent_tr_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_tr_57_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var b_r1 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.seeImages(b_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ShopComponent_tr_57_td_13_Template, 4, 0, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ShopComponent_tr_57_td_14_Template, 4, 0, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ShopComponent_tr_57_td_15_Template, 4, 0, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ShopComponent_tr_57_td_16_Template, 4, 0, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var b_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", b_r1.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1.authors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1.publications);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", b_r1.user != ctx_r0.userEmail);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", b_r1.user != ctx_r0.userEmail);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", b_r1.user == ctx_r0.userEmail);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", b_r1.user == ctx_r0.userEmail);
      }
    }

    var ShopComponent = /*#__PURE__*/function () {
      function ShopComponent(_service, _router, _httpClient, _http) {
        _classCallCheck(this, ShopComponent);

        this._service = _service;
        this._router = _router;
        this._httpClient = _httpClient;
        this._http = _http;
        this.bookstore = []; // this.bookstore.user = "hi"; 
        // const bookstore = this.getAllBooks;

        this.userCartItems = this._service.userCartItems;
        this.userEmail = this._service.email;
        this.cartUser = this._service.email;
        this.getAllBooks();
      }

      _createClass(ShopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this.records = ['a','b','c'];
        }
      }, {
        key: "routeToRegisterUser",
        value: function routeToRegisterUser() {
          this._router.navigate(["Register"]);
        }
      }, {
        key: "routeToUpdateUser",
        value: function routeToUpdateUser() {
          this._router.navigate(["update-user"]);
        }
      }, {
        key: "routeToSell",
        value: function routeToSell() {
          this._router.navigate(["sell"]);
        }
      }, {
        key: "routeToShop",
        value: function routeToShop() {
          this._router.navigate(["shop"]);
        }
      }, {
        key: "routeToCart",
        value: function routeToCart() {
          this._router.navigate(["cart"]);
        }
      }, {
        key: "routeToHome",
        value: function routeToHome() {
          this._router.navigate(["home"]);
        }
      }, {
        key: "getAllBooks",
        value: function getAllBooks() {
          var _this6 = this;

          //   this.bookstore = [
          //     {
          //         "id": 1,
          //         "user": "sam@gmail.com",
          //         "title": "aa",
          //         "authors": "a",
          //         "publications": "public",
          //         "price": 120.0,
          //         "quantity": 0,
          //         "isbn": 0
          //     },
          //     {
          //         "id": 2,
          //         "user": "saam@gmail.com",
          //         "title": "bb",
          //         "authors": "b",
          //         "publications": "public",
          //         "price": 120.0,
          //         "quantity": 0,
          //         "isbn": 0
          //     }
          // ];
          this._service.getAllBooksFromRemote().subscribe(function (v) {
            _this6.bookstore = [{
              "id": 1,
              "user": "sam@gmail.com",
              "title": "aa",
              "authors": "a",
              "publications": "public",
              "price": 120.0,
              "quantity": 0,
              "isbn": 0
            }];
            _this6.bookstore = v;
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(book) {
          var bk = new _cart__WEBPACK_IMPORTED_MODULE_1__["Cart"]();
          bk.bookOwner = book.user;
          bk.user = this.cartUser;
          bk.title = book.title;
          bk.quantity = book.quantity;
          bk.publication = book.publication;
          bk.price = book.price;
          bk.isbn = book.isbn;
          bk.authors = book.authors; // book.user = this.cartUser;

          this.userCartItems = this.userCartItems + 1;
          this._service.userCartItems = this.userCartItems;

          this._service.addToCart(bk).subscribe(function (v) {
            alert('Added Book To Cart');
          }); // this._service.addToCart(book);

        }
      }, {
        key: "updateBook",
        value: function updateBook(book) {
          this._service.updateBook.isbn = book.isbn;
          this._service.updateBook = book;

          this._service.canShowUpdateButton(true);

          console.log(this._service.updateBook);

          this._router.navigate(["updateBook"]);
        }
      }, {
        key: "viewBookDetails",
        value: function viewBookDetails(book) {
          this._service.updateBook.isbn = book.isbn;
          this._service.updateBook = book;
          console.log(this._service.updateBook);

          this._service.canShowUpdateButton(false);

          this._router.navigate(["updateBook"]);
        }
      }, {
        key: "deleteBook",
        value: function deleteBook(book) {
          //alert(book.isbn);
          if (confirm(" Deleting the book will remove the book from the customers Carts also. Are you sure, you want to delete?")) {
            this._service.deleteBook(book).subscribe(function (v) {
              alert('Book deleted from store sucessfully');
            });
          } else {
            return;
          }
        }
      }, {
        key: "seeImages",
        value: function seeImages(book) {}
      }]);

      return ShopComponent;
    }();

    ShopComponent.ɵfac = function ShopComponent_Factory(t) {
      return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]));
    };

    ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShopComponent,
      selectors: [["app-shop"]],
      decls: 64,
      vars: 2,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "m-auto"], [1, "nav-item", "m-auto"], [1, "nav-link", 3, "click"], [1, "nav-item"], [1, "form-inline", "my-2", "my-lg-0"], [1, "input-group", "input-group-sm"], ["type", "text", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", "placeholder", "Search...", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", "btn-number"], [1, "fa", "fa-search"], [1, "btn", "btn-success", "btn-sm", "ml-3", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "badge", "badge-light"], [1, "jumbotron", "text-center"], [1, "jumbotron-heading"], ["ng-app", "myApp", "ng-controller", "customersCtrl", 1, "container", "mb-4"], [1, "row"], [1, "col-12"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "col", 1, "text-center"], ["scope", "col", 1, "text-right"], [4, "ngFor", "ngForOf"], [1, "col", "mb-2"], [1, "col-sm-12", "col-md-6", "text-right"], [1, "btn", "btn-lg", "btn-block", "btn-success", "text-uppercase", 3, "click"], ["src", "https://dummyimage.com/50x50/55595c/fff", 3, "click"], [1, "text-right"], ["class", "text-right", 3, "click", 4, "ngIf"], [1, "text-right", 3, "click"], [1, "btn", "btn-sm", "btn-success"], [1, "btn", "btn-sm", "btn-info"], [1, "btn", "btn-sm", "btn-danger"], [1, "fa", "fa-trash"], [1, "fa", "fa-edit"]],
      template: function ShopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Simple Ecommerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_a_click_11_listener() {
            return ctx.routeToHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_a_click_14_listener() {
            return ctx.routeToUpdateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Update User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_a_click_17_listener() {
            return ctx.routeToShop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_a_click_20_listener() {
            return ctx.routeToSell();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_a_click_28_listener() {
            return ctx.routeToCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "HAPPY SHOPPING!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Authors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Publications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ShopComponent_tr_57_Template, 17, 9, "tr", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_button_click_61_listener() {
            return ctx.routeToCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Go To Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userCartItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bookstore);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avc2hvcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shop',
          templateUrl: './shop.component.html',
          styleUrls: ['./shop.component.scss']
        }]
      }], function () {
        return [{
          type: _registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/update-book/update-book.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/update-book/update-book.component.ts ***!
    \******************************************************/

  /*! exports provided: UpdateBookComponent */

  /***/
  function srcAppUpdateBookUpdateBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBookComponent", function () {
      return UpdateBookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../book */
    "./src/app/book.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UpdateBookComponent_label_89_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateBookComponent_input_91_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateBookComponent_input_91_Template_input_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onFileSelected($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateBookComponent_img_92_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
      }

      if (rf & 2) {
        var img_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function UpdateBookComponent_button_93_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateBookComponent_button_93_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var i_r9 = ctx.index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.deleteImage(i_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateBookComponent_button_97_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateBookComponent_button_97_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.updateBook();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UPDATE BOOK");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UpdateBookComponent = /*#__PURE__*/function () {
      function UpdateBookComponent(_service, _router, _httpClient, _http) {
        _classCallCheck(this, UpdateBookComponent);

        this._service = _service;
        this._router = _router;
        this._httpClient = _httpClient;
        this._http = _http;
        this.book = new _book__WEBPACK_IMPORTED_MODULE_1__["Book"]();
        this.ubISBN = '';
        this.ubtitle = '';
        this.ubauthors = '';
        this.ubpublication = '';
        this.ubprice = '';
        this.selectedImage = [];
        this.imageURL = []; //"https://dummyimage.com/50x50/55595c/fff";

        this.userCartItems = this._service.userCartItems;
        this.userEmail = this._service.email;
        this.ubISBN = this._service.updateBook.isbn;
        this.ubtitle = this._service.updateBook.title;
        this.ubauthors = this._service.updateBook.authors;
        this.ubprice = this._service.updateBook.price; //this.ubpublication = this._service.updateBook.publication;

        this.ubquantity = this._service.updateBook.quantity;
        this.book.imageURL = this._service.updateBook.imageURL; //this.fetchImages(this.book.imageURL);

        this.showUpdateButton = this._service.showUpdateButton;
        this.getmages(this._service.updateBook.user, this._service.updateBook.isbn);
      }

      _createClass(UpdateBookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "routeToRegisterUser",
        value: function routeToRegisterUser() {
          this._router.navigate(["Register"]);
        }
      }, {
        key: "routeToUpdateUser",
        value: function routeToUpdateUser() {
          this._router.navigate(["update-user"]);
        }
      }, {
        key: "routeToSell",
        value: function routeToSell() {
          this._router.navigate(["sell"]);
        }
      }, {
        key: "routeToShop",
        value: function routeToShop() {
          this._router.navigate(["shop"]);
        }
      }, {
        key: "routeToCart",
        value: function routeToCart() {
          this._router.navigate(["cart"]);
        }
      }, {
        key: "routeToHome",
        value: function routeToHome() {
          this._router.navigate(["home"]);
        }
      }, {
        key: "updateBook",
        value: function updateBook() {
          var _this7 = this;

          this.book.isbn = this.ubISBN;
          this.book.authors = this.ubauthors;
          this.book.quantity = this.ubquantity; // this.book.publication= moment().startOf('week').toDate();

          this.book.price = this.ubprice;
          this.book.title = this.ubtitle;
          this.book.user = this.userEmail;

          this._service.updateBookFromRemote(this.book).subscribe(function (v) {
            var fd = new FormData();

            for (var y = 0; y < _this7.selectedImage.length; y++) {
              if (_this7.selectedImage[y] != undefined) {
                fd.append('imageFile', _this7.selectedImage[y]);
                fd.append('bookISBN', _this7.book.isbn);
                fd.append('bookOwner', _this7.book.user);

                _this7._service.saveImage(fd).subscribe(function (v) {
                  console.log(v);
                });
              }
            }

            alert('Updated Book To The Store Succesfully');
          });
        }
      }, {
        key: "fetchImages",
        value: function fetchImages(images) {
          var _this8 = this;

          this._service.getUsersImages(images).subscribe(function (v) {
            console.log(v);

            for (var i = 0; i < v.length; i++) {
              // this.imageURL.push(v.Image);
              _this8.imageURL.push(v[i]);
            }
          });
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(i) {
          var _this9 = this;

          if (this.showUpdateButton) {
            console.log(this.imageURL);

            this._service.deleteImage(this.ubISBN, this.userEmail, this.book.imageURL, i).subscribe(function (v) {
              _this9.imageURL.splice(i, 1);

              _this9.selectedImage.splice(i, 1);

              alert("Deleted image & updated book successfully");
            });
          }
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var _this10 = this;

          console.log(event);

          if (event.target.files) {
            for (var i = 0; i < File.length; i++) {
              var reader = new FileReader();
              this.selectedImage.push(event.target.files[i]);
              reader.readAsDataURL(event.target.files[i]);

              reader.onload = function (event) {
                _this10.imageURL.push(event.target.result);
              };
            } //this.selectedImage = event.target.files[0];
            //var reader = new FileReader();
            //reader.readAsDataURL(this.selectedImage);
            //reader.onload = (event: any) => {
            //  this.imageURL.push(event.target.result);
            //}

          }
        }
      }, {
        key: "getmages",
        value: function getmages(user, isbn) {
          var _this11 = this;

          this._service.getImagesOfUser(user, "", isbn).subscribe(function (v) {
            for (var i = 0; i < v.length; i++) {
              // this.imageURL.push(v.Image);
              _this11.imageURL.push(v[i]);
            }
          });
        }
      }]);

      return UpdateBookComponent;
    }();

    UpdateBookComponent.ɵfac = function UpdateBookComponent_Factory(t) {
      return new (t || UpdateBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]));
    };

    UpdateBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateBookComponent,
      selectors: [["app-update-book"]],
      decls: 99,
      vars: 13,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "m-auto"], [1, "nav-item", "m-auto"], [1, "nav-link", 3, "click"], [1, "nav-item"], [1, "form-inline", "my-2", "my-lg-0"], [1, "input-group", "input-group-sm"], ["type", "text", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", "placeholder", "Search...", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", "btn-number"], [1, "fa", "fa-search"], [1, "btn", "btn-success", "btn-sm", "ml-3", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "badge", "badge-light"], [1, "jumbotron", "text-center"], [1, "jumbotron-heading"], [1, "container", "mb-4"], [1, "row"], [1, "col-12"], [1, "form-horizontal"], ["id", "legend"], [1, ""], [1, "control-group"], ["for", "fname", 1, "control-label"], [1, "controls"], ["type", "text", "id", "sISBN", "name", "sISBN", 1, "input-xlarge", 3, "ngModel", "placeholder", "ngModelChange"], [1, "help-block"], ["for", "stitle", 1, "control-label"], ["type", "text", "id", "stitle", "name", "stitle", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["for", "sauthors", 1, "control-label"], ["type", "text", "name", "sauthors", "id", "sauthors", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["for", "Price", 1, "control-label"], ["name", "squantity", "type", "text", "id", "squantity", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["for", "publication", 1, "control-label"], ["name", "spublication", "type", "text", "id", "publication", "name", "publication", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["name", "ubprice", "type", "text", "id", "Price", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["class", "control-label", "for", "Price", 4, "ngIf"], ["type", "file", "name", "file", "multiple", "multiple", 3, "change", 4, "ngIf"], ["id", "myImg", "height", "200", "width", "300", 3, "src", 4, "ngFor", "ngForOf"], ["class", "text-right", "class", "btn btn-sm btn-danger", 3, "click", 4, "ngFor", "ngForOf"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["type", "file", "name", "file", "multiple", "multiple", 3, "change"], ["id", "myImg", "height", "200", "width", "300", 3, "src"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fa", "fa-trash"], [1, "btn", "btn-success", 3, "click"]],
      template: function UpdateBookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Simple Ecommerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateBookComponent_Template_a_click_11_listener() {
            return ctx.routeToHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateBookComponent_Template_a_click_14_listener() {
            return ctx.routeToUpdateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Update User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateBookComponent_Template_a_click_17_listener() {
            return ctx.routeToShop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateBookComponent_Template_a_click_20_listener() {
            return ctx.routeToSell();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateBookComponent_Template_a_click_28_listener() {
            return ctx.routeToCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "EASY SELLING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "legend", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Now you can sell with best deals...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "ISBN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_51_listener($event) {
            return ctx.ubISBN = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Please provide book's ISBN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "TITLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_58_listener($event) {
            return ctx.ubtitle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Enter Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "AUTHORS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_64_listener($event) {
            return ctx.ubauthors = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Enter Authors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_71_listener($event) {
            return ctx.ubquantity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Enter Price to sell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "PUBLICATIONS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_78_listener($event) {
            return ctx.ubpublication = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Enter your book's publication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "PRICE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateBookComponent_Template_input_ngModelChange_85_listener($event) {
            return ctx.ubprice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Enter Price to sell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, UpdateBookComponent_label_89_Template, 2, 0, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, UpdateBookComponent_input_91_Template, 1, 0, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, UpdateBookComponent_img_92_Template, 1, 1, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, UpdateBookComponent_button_93_Template, 3, 0, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, UpdateBookComponent_button_97_Template, 2, 0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userCartItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.ubISBN);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ubISBN);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ubtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ubauthors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ubquantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ubpublication);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ubprice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUpdateButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUpdateButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imageURL);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imageURL);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUpdateButton);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1ib29rL3VwZGF0ZS1ib29rLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-book',
          templateUrl: './update-book.component.html',
          styleUrls: ['./update-book.component.scss']
        }]
      }], function () {
        return [{
          type: _registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/update-user-book/update-user-book.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/update-user-book/update-user-book.component.ts ***!
    \****************************************************************/

  /*! exports provided: UpdateUserBookComponent */

  /***/
  function srcAppUpdateUserBookUpdateUserBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserBookComponent", function () {
      return UpdateUserBookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UpdateUserBookComponent = /*#__PURE__*/function () {
      function UpdateUserBookComponent() {
        _classCallCheck(this, UpdateUserBookComponent);
      }

      _createClass(UpdateUserBookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UpdateUserBookComponent;
    }();

    UpdateUserBookComponent.ɵfac = function UpdateUserBookComponent_Factory(t) {
      return new (t || UpdateUserBookComponent)();
    };

    UpdateUserBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateUserBookComponent,
      selectors: [["app-update-user-book"]],
      decls: 2,
      vars: 0,
      template: function UpdateUserBookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update-user-book works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS11c2VyLWJvb2svdXBkYXRlLXVzZXItYm9vay5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateUserBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-user-book',
          templateUrl: './update-user-book.component.html',
          styleUrls: ['./update-user-book.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/update-user/update-user.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/update-user/update-user.component.ts ***!
    \******************************************************/

  /*! exports provided: UpdateUserComponent */

  /***/
  function srcAppUpdateUserUpdateUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function () {
      return UpdateUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../registration.service */
    "./src/app/registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UpdateUserComponent = /*#__PURE__*/function () {
      function UpdateUserComponent(_service, _router, _httpClient, _http) {
        _classCallCheck(this, UpdateUserComponent);

        this._service = _service;
        this._router = _router;
        this._httpClient = _httpClient;
        this._http = _http;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.uemail = '';
        this.upwd = '';
        this.ufname = '';
        this.ulname = '';
        this.uconfirmpwd = '';
        this.uemail = this._service.email;
      }

      _createClass(UpdateUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "routeToRegisterUser",
        value: function routeToRegisterUser() {
          console.log("register ");

          this._router.navigate(["Register"]);
        }
      }, {
        key: "routeToUpdateUser",
        value: function routeToUpdateUser() {
          this._router.navigate(["update-user"]);
        }
      }, {
        key: "routeToSell",
        value: function routeToSell() {
          this._router.navigate(["sell"]);
        }
      }, {
        key: "routeToShop",
        value: function routeToShop() {
          this._router.navigate(["shop"]);
        }
      }, {
        key: "routeToCart",
        value: function routeToCart() {
          this._router.navigate(["cart"]);
        }
      }, {
        key: "hasNumber",
        value: function hasNumber(myString) {
          return /\d/.test(myString);
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          if (this.upwd != this.uconfirmpwd) {
            alert('Given Paaswords dont match');
            return;
          } //  if(!this.rpwd.length ){
          //    alert('Enter a pwd with a number,a upperCase charecter and a special charector');
          //  }


          if (!this.hasNumber(this.upwd)) {
            alert('Enter a pwd with a number,a upperCase charecter and a special charector');
          }

          this.user.email = this.uemail;
          this.user.fname = this.ufname;
          this.user.lname = this.ulname;
          this.user.password = this.upwd;

          this._service.updateUserFromRemote(this.user).subscribe(function (v) {
            console.log(v.firstname);
            alert("Updated");
          });
        }
      }]);

      return UpdateUserComponent;
    }();

    UpdateUserComponent.ɵfac = function UpdateUserComponent_Factory(t) {
      return new (t || UpdateUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]));
    };

    UpdateUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateUserComponent,
      selectors: [["app-update-user"]],
      decls: 93,
      vars: 6,
      consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet", "integrity", "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], [1, "container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarsExampleDefault", "aria-controls", "navbarsExampleDefault", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarsExampleDefault", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav", "m-auto"], [1, "nav-item", "m-auto"], [1, "nav-link,active", 3, "click"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "form-inline", "my-2", "my-lg-0"], [1, "input-group", "input-group-sm"], ["type", "text", "aria-label", "Small", "aria-describedby", "inputGroup-sizing-sm", "placeholder", "Search...", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", "btn-number"], [1, "fa", "fa-search"], [1, "btn", "btn-success", "btn-sm", "ml-3", 3, "click"], [1, "fa", "fa-shopping-cart"], [1, "badge", "badge-light"], [1, "jumbotron", "text-center"], [1, "jumbotron-heading"], [1, "container", "mb-4"], [1, "row"], [1, "col-12"], [1, "table-responsive"], [1, "form-horizontal"], ["id", "legend"], [1, ""], [1, "control-group"], ["for", "fname", 1, "control-label"], [1, "controls"], ["type", "text", "id", "uemail", "name", "uemail", 1, "input-xlarge", 3, "ngModel", "placeholder", "ngModelChange"], [1, "help-block"], ["type", "text", "id", "ufname", "name", "ufname", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["for", "lname", 1, "control-label"], ["type", "text", "id", "ulname", "name", "ulname", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "control-label"], ["type", "password", "id", "password", "name", "password", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], ["for", "password_confirm", 1, "control-label"], ["name", "upwd", "type", "password", "id", "password_confirm", "placeholder", "", 1, "input-xlarge", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "click"], [1, "col", "mb-2"], [1, "col-sm-12", "col-md-6"], [1, "btn", "btn-block", "btn-light", 3, "click"], [1, "col-sm-12", "col-md-6", "text-right"], [1, "btn", "btn-lg", "btn-block", "btn-success", "text-uppercase", 3, "click"]],
      template: function UpdateUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Simple Ecommerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateUserComponent_Template_a_click_12_listener() {
            return ctx.routeToUpdateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Update User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateUserComponent_Template_a_click_15_listener() {
            return ctx.routeToShop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateUserComponent_Template_a_click_18_listener() {
            return ctx.routeToSell();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateUserComponent_Template_a_click_26_listener() {
            return ctx.routeToCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "E-COMMERCE CART");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "legend", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "UPDATE USER DETAILS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateUserComponent_Template_input_ngModelChange_49_listener($event) {
            return ctx.uemail = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Update Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateUserComponent_Template_input_ngModelChange_56_listener($event) {
            return ctx.ufname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Update First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateUserComponent_Template_input_ngModelChange_63_listener($event) {
            return ctx.ulname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Update Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateUserComponent_Template_input_ngModelChange_70_listener($event) {
            return ctx.uconfirmpwd = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Password should be at least 4 characters with a uppercase and a special charector.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Password (Confirm)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateUserComponent_Template_input_ngModelChange_77_listener($event) {
            return ctx.upwd = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Please confirm password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateUserComponent_Template_button_click_82_listener() {
            return ctx.updateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "UPDATE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateUserComponent_Template_button_click_87_listener() {
            return ctx.routeToShop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Continue Shopping");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateUserComponent_Template_button_click_90_listener() {
            return ctx.routeToCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Go To Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.uemail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.uemail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ufname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ulname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.uconfirmpwd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.upwd);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS11c2VyL3VwZGF0ZS11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-user',
          templateUrl: './update-user.component.html',
          styleUrls: ['./update-user.component.scss']
        }]
      }], function () {
        return [{
          type: _registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user.ts":
  /*!*************************!*\
    !*** ./src/app/user.ts ***!
    \*************************/

  /*! exports provided: User */

  /***/
  function srcAppUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = //  constructor(fname:string,lname:string,email:string,password:string){
    //      this.fname = fname;
    //      this.lname = lname;
    //      this.email = email;
    //      this.password = password;
    //  }
    function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/chandana/a7webapp/webapp/WebClient/src/main/web/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map