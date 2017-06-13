webpackJsonp([0,3],{

/***/ 330:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 330;


/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_browser_module__ = __webpack_require__(431);






/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
var platformRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["platformUniversalDynamic"])();
platformRef.bootstrapModule(__WEBPACK_IMPORTED_MODULE_5__app_app_browser_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/client.js.map

/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(58);
var __core_private__ = __webpack_require__(0);
var patch = false;
if (!__core_private__.hasOwnProperty('ViewUtils')) {
    patch = true;
    __core_private__.ViewUtils = __core_private__.view_utils;
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(438);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/__2.1.1.workaround.js.map

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__features_features_component__ = __webpack_require__(433);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';
/**
 * Top-level NgModule "container"
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            /** Root App Component */
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */]],
            /** Our Components */
            declarations: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__features_features_component__["a" /* FeaturesComponent */]],
            imports: [
                /**
                 * NOTE: Needs to be your first import (!)
                 * BrowserModule, HttpModule, and JsonpModule are included
                 */
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/app.browser.module.js.map

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(602),
            styles: [__webpack_require__(600)],
            template: '<app-features></app-features>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/app.component.js.map

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FeaturesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(603),
            styles: [__webpack_require__(599)]
        }), 
        __metadata('design:paramtypes', [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/features.component.js.map

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(604),
            styles: [__webpack_require__(601)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/header.component.js.map

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(432);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/index.js.map

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/environment.js.map

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/polyfills.js.map

/***/ },

/***/ 599:
/***/ function(module, exports) {

module.exports = "/* fonts */\n/* fonts */\n/* core */\n/* common */\nbody {\n  font-family: 'Raleway', sans-serif; }\n  body h1 {\n    display: none; }\n\nh1 {\n  /* background : grey;*/\n  color: #000; }\n\nh2 {\n  /* background : grey;*/ }\n\nh3 {\n  /* background : grey;*/ }\n\nh4 {\n  /* background : grey;*/ }\n\np {\n  /* background : grey;*/ }\n\na {\n  /* background : grey;*/ }\n\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #8197A5;\n  font-family: 'Raleway', sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #8197A5;\n  font-family: 'Raleway', sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #8197A5;\n  font-family: 'Raleway', sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #8197A5;\n  font-family: 'Raleway', sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\ninput {\n  height: 45px;\n  border-radius: 4px;\n  border: 1px solid #E2DFD7;\n  background-color: #FFF;\n  color: #525351;\n  font-family: 'Raleway', sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\nselect {\n  position: relative;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  text-indent: 1px;\n  text-overflow: '';\n  background: white url(assets/images/arrow-drop-down.png) no-repeat right 10px center !important; }\n\nselect::-ms-expand {\n  display: none; }\n\n/* section */\n.dropdown:hover .dropdown-menu {\n  display: block; }\n\n.main-navigation .top-header {\n  padding: 9px 0 8px;\n  background-color: #002756; }\n  .main-navigation .top-header .phone-no-wrapper {\n    float: right; }\n    .main-navigation .top-header .phone-no-wrapper img {\n      float: left;\n      margin-right: 12px; }\n    .main-navigation .top-header .phone-no-wrapper p {\n      float: left;\n      font-family: 'Poppins', sans-serif;\n      font-size: 12px;\n      text-transform: uppercase;\n      color: #b8ceec;\n      font-weight: 400; }\n      .main-navigation .top-header .phone-no-wrapper p a {\n        color: #FFF;\n        font-weight: 700; }\n        .main-navigation .top-header .phone-no-wrapper p a:hover {\n          color: #9C373C; }\n\n.main-navigation .main-nav .navbar-header .navbar-brand {\n  height: auto;\n  padding: 21.5px 15px; }\n  .main-navigation .main-nav .navbar-header .navbar-brand img {\n    height: 57px; }\n\n.main-navigation .main-nav .navbar-nav > li {\n  color: #525351;\n  font-family: 'Poppins', sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  text-transform: uppercase; }\n  .main-navigation .main-nav .navbar-nav > li:hover > a {\n    color: #9C373C; }\n  .main-navigation .main-nav .navbar-nav > li a {\n    padding: 40px 15px; }\n  .main-navigation .main-nav .navbar-nav > li:last-of-type {\n    margin-top: 30px;\n    margin-left: 25px;\n    border-radius: 6px;\n    background-color: #9C373C; }\n    .main-navigation .main-nav .navbar-nav > li:last-of-type > a {\n      padding: 10px 15px;\n      color: #FFF;\n      font-family: 'Poppins', sans-serif;\n      font-size: 12px;\n      font-weight: 700;\n      text-transform: uppercase; }\n    .main-navigation .main-nav .navbar-nav > li:last-of-type:hover {\n      background-color: rgba(156, 55, 60, 0.8); }\n  .main-navigation .main-nav .navbar-nav > li > .dropdown-menu {\n    padding: 0; }\n    .main-navigation .main-nav .navbar-nav > li > .dropdown-menu li {\n      color: #525351;\n      font-family: 'Poppins', sans-serif;\n      font-size: 15px;\n      font-weight: 400;\n      text-transform: uppercase; }\n      .main-navigation .main-nav .navbar-nav > li > .dropdown-menu li:hover > a {\n        color: #9C373C; }\n      .main-navigation .main-nav .navbar-nav > li > .dropdown-menu li a {\n        padding: 15px;\n        border: 1px solid transparent; }\n        .main-navigation .main-nav .navbar-nav > li > .dropdown-menu li a:hover {\n          border-top: 1px solid #E4ECF1;\n          border-bottom: 1px solid #E4ECF1;\n          background-color: #F5F8F8; }\n\n/* overrides */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-feature-settings: \"lnum\";\n  font-feature-settings: \"lnum\"; }\n\nhtml,\nbody,\n* {\n  margin: 0;\n  padding: 0; }\n\ninput,\nbutton,\na,\nimg {\n  outline: none; }\n\nimg {\n  vertical-align: middle; }\n\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\na {\n  text-decoration: none; }\n  a:hover, a:focus, a:active {\n    text-decoration: none; }\n\nul {\n  list-style: none; }\n  ul li {\n    list-style-type: none; }\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -10%, 0);\n    transform: translate3d(0, -10%, 0); }\n  to {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -10%, 0);\n    transform: translate3d(0, -10%, 0); }\n  to {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n    visibility: visible; }\n  to {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n    visibility: visible; }\n  to {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp; }\n\n.features-wrapper {\n  background-image: url(./../../assets/images/features_bg.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 628px;\n  padding-top: 80px;\n  padding-bottom: 80px; }\n  @media (max-width: 767px) {\n    .features-wrapper {\n      height: auto; } }\n\nh2 {\n  color: #ffffff;\n  font-family: 'Poppins', sans-serif;\n  font-size: 32px;\n  font-weight: 500;\n  letter-spacing: -1px;\n  line-height: 46px;\n  padding-bottom: 70px; }\n\nh3 {\n  color: #ffffff;\n  font-family: 'Raleway', sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 28px;\n  text-transform: uppercase;\n  padding-top: 30px;\n  padding-bottom: 10px; }\n\np {\n  /* Style for \"A ClearCap\" */\n  width: 350px;\n  height: 78px;\n  color: #ffffff;\n  font-family: 'Raleway', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 26px; }\n\n.article-wrapper {\n  padding-bottom: 70px; }\n\n.primaryButton {\n  border-radius: 10px;\n  background-color: #9DC400;\n  color: #FFF;\n  font-family: 'Poppins', sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  text-transform: uppercase; }\n  .primaryButton:hover {\n    background-color: #417505; }\n"

/***/ },

/***/ 600:
/***/ function(module, exports) {

module.exports = "h1 {\r\n    display: none;\r\n}"

/***/ },

/***/ 601:
/***/ function(module, exports) {

module.exports = "h1 {\r\n    display: none;\r\n}"

/***/ },

/***/ 602:
/***/ function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n<body>\n    <h1>ClearCaptions provides the most advanced captioning phone that makes communication easier for people with hearing loss\n    </h1>\n\n    <header>\n        <nav class=\"navbar navbar-default navbar-fixed-top main-navigation\">\n            <div class=\"container-fluid top-header\">\n                <div class=\"container\">\n                    <div class=\"phone-no-wrapper\">\n                        <img src=\"./../assets/images/mobile-icon.png\" alt=\"\">\n                        <p>\n                            Order by Phone <a href=\"tel:+18662467850\">+1 866 246 7850</a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"container main-nav\">\n                <!-- Brand and toggle get grouped for better mobile display -->\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#main-nav\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n                    <a class=\"navbar-brand\" href=\"#\"><img src=\"./../assets/images/logo.svg\" alt=\"logo\" /></a>\n                </div>\n\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse\" id=\"main-nav\">\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a href=\"#\">Products</a></li>\n                        <li><a href=\"#\">How it Works</a></li>\n                        <li><a href=\"#\">Professionals</a></li>\n                        <li><a href=\"#\">Support</a></li>\n                        <li class=\"dropdown\">\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">About Us</a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Leadership Team</a></li>\n                                <li><a href=\"#\">News</a></li>\n                                <li><a href=\"#\">Press Releases</a></li>\n                                <li><a href=\"#\">Contact Us</a></li>\n                                <li><a href=\"#\">Careers</a></li>\n                            </ul>\n                        </li>\n                        <li><a href=\"#\">Link</a></li>\n                    </ul>\n                </div>\n                <!-- /.navbar-collapse -->\n            </div>\n            <!-- /.container-fluid -->\n        </nav>\n    </header>\n\n    <main>\n        <h1>Test</h1>\n        <h3>test heading 3</h3>\n        <div>\n            <button type=\"button\" class=\"btn btn-primary\"> Read more </button>\n        </div>\n    </main>\n\n    <footer>\n\n    </footer>\n\n</body>"

/***/ },

/***/ 603:
/***/ function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\">\n<!--features section-->\n<section class=\"features-wrapper\">\n    <div class=\"container text-center\">\n        <h2>More features</h2>\n\n        <div class=\"row article-wrapper\">\n\n\n            <div class=\"col-xs-12 col-md-4\">\n                <article>\n                    <img src=\"./../../assets/images/phone.png\" alt=\"\">\n                    <h3>Free Phone &amp; Captioning</h3>\n                    <p>Captions are provided free-of-charge to people with hearing loss</p>\n                    <a href=\"#\">For more info click here</a>\n                </article>\n            </div>\n\n\n            <div class=\"col-xs-12 col-md-4\">\n                <article>\n                    <img src=\"./../../assets/images/installation.png\" alt=\"\">\n                    <h3>Free Installation</h3>\n                    <p>A ClearCaptions specialist will come to your home to install your phone and train you on how to use it.</p>\n                </article>\n            </div>\n\n            <div class=\"col-xs-12 col-md-4\">\n                <article>\n                    <img src=\"./../../assets/images/ongoing_support.png\" alt=\"\">\n                    <h3>Free Ongoing Support</h3>\n                    <p>Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                </article>\n            </div>\n\n            <!--article wrapper-->\n        </div>\n        <!--row-->\n        <button type=\"button\" class=\"btn primaryButton\">Sign up today</button>\n    </div>\n</section>"

/***/ },

/***/ 604:
/***/ function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ },

/***/ 620:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(331);


/***/ }

},[621]);
//# sourceMappingURL=client.bundle.map