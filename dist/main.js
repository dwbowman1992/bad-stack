(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./client/$$_lazy_route_resource lazy recursive":
/*!*************************************************************!*\
  !*** ./client/$$_lazy_route_resource lazy namespace object ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./client/app/app-routing.module.ts":
/*!******************************************!*\
  !*** ./client/app/app-routing.module.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./client/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/login/login.component */ "./client/app/views/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./client/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./client/app/app.component.html":
/*!***************************************!*\
  !*** ./client/app/app.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./client/app/app.component.scss":
/*!***************************************!*\
  !*** ./client/app/app.component.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/app/app.component.ts":
/*!*************************************!*\
  !*** ./client/app/app.component.ts ***!
  \*************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./client/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./client/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./client/app/app.module.ts":
/*!**********************************!*\
  !*** ./client/app/app.module.ts ***!
  \**********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./client/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./client/app/app.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./client/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/login/login.component */ "./client/app/views/login/login.component.ts");
/* harmony import */ var _views_login_signup_signup_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/login/signup/signup-modal */ "./client/app/views/login/signup/signup-modal.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _directives_typewriter_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/typewriter.directive */ "./client/app/directives/typewriter.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _views_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _views_login_signup_signup_modal__WEBPACK_IMPORTED_MODULE_8__["SignupModalComponent"],
                _directives_typewriter_directive__WEBPACK_IMPORTED_MODULE_10__["TypewriterDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./client/app/directives/typewriter.directive.ts":
/*!*******************************************************!*\
  !*** ./client/app/directives/typewriter.directive.ts ***!
  \*******************************************************/
/*! exports provided: TypewriterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypewriterDirective", function() { return TypewriterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypewriterDirective = /** @class */ (function () {
    function TypewriterDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    TypewriterDirective.prototype.ngOnInit = function () {
        var tempText = this.inputText.split('');
        // this.renderer.addClass(this.el.nativeElement, 'typewriter');
        this.typewriter(tempText);
    };
    TypewriterDirective.prototype.typewriter = function (tempText) {
        var _this = this;
        if (tempText.length) {
            setTimeout(function () {
                _this.el.nativeElement.innerText += tempText.shift();
                _this.typewriter(tempText);
            }, 500);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appTypewriter'),
        __metadata("design:type", String)
    ], TypewriterDirective.prototype, "inputText", void 0);
    TypewriterDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appTypewriter]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TypewriterDirective);
    return TypewriterDirective;
}());



/***/ }),

/***/ "./client/app/guards/auth.guard.ts":
/*!*****************************************!*\
  !*** ./client/app/guards/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./client/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, dataservice) {
        this.router = router;
        this.dataservice = dataservice;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // Check if a 'currentUser' exists in the localStorage object
        // this will return undefined || false if there isn't
        if (this.dataservice.getCurrentUser()) {
            // User is logged in, let's let them through
            return true;
        }
        else {
            // user is not logged in, let's route them to the login page.
            // We will import the Router from @angular/router and assign it in the constructor
            // then we route the user to the login page and pass parameters with the returnURL
            // So we can return to the requested page after login.
            this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./client/app/services/auth.service.ts":
/*!*********************************************!*\
  !*** ./client/app/services/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./client/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var APIEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (email, pwd) {
        return this.http.post(APIEndpoint + 'users/login', {
            email: email,
            password: pwd
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./client/app/services/data.service.ts":
/*!*********************************************!*\
  !*** ./client/app/services/data.service.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.setCurrentUser = function (userData) {
        localStorage.setItem('user', JSON.stringify(userData));
    };
    DataService.prototype.getCurrentUser = function () {
        return localStorage.getItem('user');
    };
    DataService.prototype.removeCurrentUser = function () {
        localStorage.removeItem('user');
    };
    DataService.prototype.getCurrentUserToken = function () {
        return JSON.parse(localStorage.getItem('user')).token;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./client/app/views/dashboard/dashboard.component.html":
/*!*************************************************************!*\
  !*** ./client/app/views/dashboard/dashboard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard\">\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\n    <h1 class=\"navbar-brand\" href=\"#\">{{ title }}</h1>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n  <div id=\"dashboard-content\">\n    Dashboard  Content\n  </div>\n</div>\n"

/***/ }),

/***/ "./client/app/views/dashboard/dashboard.component.scss":
/*!*************************************************************!*\
  !*** ./client/app/views/dashboard/dashboard.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboard {\n  width: 100vw;\n  background-image: linear-gradient(to right, #4ECDC4, #556270);\n  height: 100em; }\n  #dashboard h1 {\n    font-family: \"Times New Roman\", Times, serif;\n    display: inline;\n    margin: 10px 0 10px 0;\n    font-size: 30px; }\n  .navbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0%;\n  background-color: transparent; }\n"

/***/ }),

/***/ "./client/app/views/dashboard/dashboard.component.ts":
/*!***********************************************************!*\
  !*** ./client/app/views/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./client/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./client/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var APIEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataservice, http) {
        var _this = this;
        this.dataservice = dataservice;
        this.http = http;
        this.title = 'BadStack';
        this.tokenInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(10000).subscribe(function (x) {
            _this.checkToken();
        });
    }
    DashboardComponent.prototype.checkToken = function () {
        var _this = this;
        var token = this.dataservice.getCurrentUserToken();
        this.http
            .request('GET', 'api/session/isAuthenticated', {
            responseType: 'json',
            params: {
                token: token
            }
        })
            .subscribe(function (data) {
            if (!data.authenticated) {
                _this.dataservice.removeCurrentUser();
                _this.tokenInterval.unsubscribe();
            }
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./client/app/views/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./client/app/views/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./client/app/views/login/login.component.html":
/*!*****************************************************!*\
  !*** ./client/app/views/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\" #loginElem>\n  <nav class=\"navbar navbar-light bg-light\">\n  <span class=\"navbar-text\">\n    <form (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n      <div>\n        <input type=\"email\" class=\"form-control\" name=\"email\" aria-describedby=\"email\" placeholder=\"Email\" [(ngModel)]=\"credentials.email\" required>\n        <input type=\"password\" class=\"form-control\" name=\"pwd\" placeholder=\"Password\" [(ngModel)]=\"credentials.pwd\" required>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n      <app-signup-modal></app-signup-modal>\n    </form>\n  </span>\n  </nav>\n  <div class=\"login-container col-sm\">\n    <h1 appTypewriter=\"BadStack\"></h1><span><h1 class=\"typewriter\">|</h1></span>\n  </div>\n  <!--div class=\"login-container-bottom-pan bounce-animated bounce\" (tap)=\"onTap($event)\">\n\n  </div-->\n</div>\n"

/***/ }),

/***/ "./client/app/views/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./client/app/views/login/login.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  width: 100%;\n  height: 100vh;\n  background-image: linear-gradient(to right, #4ECDC4, #556270); }\n  .login-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    height: 300px;\n    margin-top: -150px;\n    /* half of you height */\n    width: 400px;\n    margin-left: -200px;\n    /* half of you width */\n    padding: 10px 25px 10px 25px; }\n  .login-container h1 {\n      font-family: \"Times New Roman\", Times, serif;\n      display: inline;\n      margin: 10px 0 10px 0;\n      font-size: 72px; }\n  .login-container label {\n      margin-top: 10px;\n      font-family: \"Times New Roman\", Times, serif;\n      color: black; }\n  .login-container input:focus {\n      -webkit-transition: all 0.30s ease-in-out;\n      -moz-transition: all 0.30s ease-in-out;\n      -ms-transition: all 0.30s ease-in-out;\n      -o-transition: all 0.30s ease-in-out;\n      outline: none;\n      border: 1px solid lightgrey; }\n  .login-container-bottom-pan {\n    width: 100%;\n    position: absolute;\n    bottom: 0px;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 90px; }\n  /* typewriter effect */\n  .typewriter {\n  -webkit-animation: blink-caret .5s linear infinite;\n          animation: blink-caret .5s linear infinite; }\n  @-webkit-keyframes blink-caret {\n  100% {\n    opacity: 0; } }\n  @keyframes blink-caret {\n  100% {\n    opacity: 0; } }\n  /* fade out effect */\n  .animated {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n  @-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n  @keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n  .fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut; }\n  .bounce {\n  -webkit-animation-name: bounce;\n          animation-name: bounce; }\n  @-webkit-keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); } }\n  @keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); } }\n  .bounce-animated {\n  -webkit-animation-duration: 2.5s;\n  animation-duration: 2.5s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n  #signup-modal-content {\n  margin-top: 20px; }\n  #signup-form {\n  margin-top: 10px; }\n"

/***/ }),

/***/ "./client/app/views/login/login.component.ts":
/*!***************************************************!*\
  !*** ./client/app/views/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./client/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auth, modalService, route, dataService) {
        this.router = router;
        this.auth = auth;
        this.modalService = modalService;
        this.route = route;
        this.dataService = dataService;
        this.credentials = {
            email: '',
            pwd: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // We checked for validation in HTML so our credentials should not be blank.
        this.auth.login(this.credentials.email, this.credentials.pwd).subscribe(function (data) {
            if (data.message === false) {
                // if invalid login, reset the form
                _this.credentials.email = '';
                _this.credentials.pwd = '';
            }
            else {
                // if we get here, there is no error, the return is valid
                // Let's first save the info into local storage for later use. We can parse this back
                // into an object later
                _this.dataService.setCurrentUser(data);
                // route user to the return URL
                setTimeout(function () {
                    _this.router.navigateByUrl(_this.returnURL);
                }, 10);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./client/app/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./client/app/views/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./client/app/views/login/signup/signup-modal.html":
/*!*********************************************************!*\
  !*** ./client/app/views/login/signup/signup-modal.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button style=\"margin-left:10px\" type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Signup</button>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Signup</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form (ngSubmit)=\"s.form.valid && signup()\" #s=\"ngForm\" novalidate id=\"signup-form\">\n      <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter name\" [(ngModel)]=\"signupCredentials.name\" required>\n      </div>\n      <div class=\"form-group\">\n        <label>Email address</label>\n        <input type=\"email\" class=\"form-control\" name=\"email\" aria-describedby=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"signupCredentials.email\" required>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"pwd\" placeholder=\"Password\" [(ngModel)]=\"signupCredentials.pwd\" required>\n      </div>\n      <div class=\"form-group\">\n        <label>Phone Number</label>\n        <input type=\"text\" class=\"form-control\" name=\"phone\" placeholder=\"xxxxxxxxxx\" [(ngModel)]=\"signupCredentials.phone\" required>\n      </div>\n      <div class=\"modal-footer col-sm\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modalRef.hide()\">Close</button>\n        <button type=\"submit\" class=\"btn btn-primary\">Signup</button>\n      </div>\n    </form>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./client/app/views/login/signup/signup-modal.ts":
/*!*******************************************************!*\
  !*** ./client/app/views/login/signup/signup-modal.ts ***!
  \*******************************************************/
/*! exports provided: SignupModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModalComponent", function() { return SignupModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./client/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./client/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/data.service */ "./client/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var APIEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
var SignupModalComponent = /** @class */ (function () {
    function SignupModalComponent(modalService, http, router, auth, route, dataservice) {
        this.modalService = modalService;
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.route = route;
        this.dataservice = dataservice;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.signupCredentials = {
            email: '',
            pwd: '',
            name: '',
            phone: ''
        };
    }
    SignupModalComponent.prototype.ngOnInit = function () {
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    };
    SignupModalComponent.prototype.signup = function () {
        var _this = this;
        this.http.post(APIEndpoint + 'users', {
            name: this.signupCredentials.name,
            email: this.signupCredentials.email,
            password: this.signupCredentials.pwd,
            phone: this.signupCredentials.phone
        }).subscribe(function (data) {
            _this.auth.login(_this.signupCredentials.email, _this.signupCredentials.pwd).subscribe(function (data) {
                if (data.message === false) {
                    // if invalid login, reset the form
                    _this.signupCredentials.email = '';
                    _this.signupCredentials.pwd = '';
                }
                else {
                    // if we get here, there is no error, the return is valid
                    // Let's first save the info into local storage for later use. We can parse this back
                    // into an object later
                    _this.dataservice.setCurrentUser(data);
                    // route user to the return URL
                    setTimeout(function () {
                        _this.router.navigateByUrl(_this.returnURL);
                    }, 10);
                }
            });
            _this.modalRef.hide();
            // add bootstrap alert
        }, function (err) {
            _this.signupCredentials.name = '';
            _this.signupCredentials.email = '';
            _this.signupCredentials.pwd = '';
            _this.signupCredentials.phone = '';
            _this.modalRef.hide();
            // add bootstrap alert
        });
    };
    SignupModalComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SignupModalComponent.prototype, "add", void 0);
    SignupModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-modal',
            template: __webpack_require__(/*! ./signup-modal.html */ "./client/app/views/login/signup/signup-modal.html")
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], SignupModalComponent);
    return SignupModalComponent;
}());



/***/ }),

/***/ "./client/environments/environment.ts":
/*!********************************************!*\
  !*** ./client/environments/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./client/main.ts":
/*!************************!*\
  !*** ./client/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./client/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./client/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./client/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dylanbowman/bad-stack/client/main.ts */"./client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map