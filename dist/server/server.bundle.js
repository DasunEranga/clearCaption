module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__server_routes__ = __webpack_require__(11);










// App
var app = __WEBPACK_IMPORTED_MODULE_3_express__();
var ROOT = __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_2_path__["resolve"](__dirname, '..'));
var port = process.env.PORT || 4200;
/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["enableProdMode"])();
}
/**
 * Express View
 */
app.engine('.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__["createEngine"])({}));
app.set('views', __WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'));
app.set('view engine', 'html');
/**
 * Enable compression
 */
app.use(__WEBPACK_IMPORTED_MODULE_4_compression__());
/**
 * serve static files
 */
app.use('/', __WEBPACK_IMPORTED_MODULE_3_express__["static"](__WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'), { index: false }));
/**
 * place your api routes here
 */
// app.use('/api', api);
/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        ngModule: __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__["a" /* AppModule */],
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp);
__WEBPACK_IMPORTED_MODULE_9__server_routes__["a" /* routes */].forEach(function (route) {
    app.get("/" + route, ngApp);
    app.get("/" + route + "/*", ngApp);
});
/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/server.js.map

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(18);
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
var __universal__ = __webpack_require__(21);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/__2.1.1.workaround.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
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
            template: __webpack_require__(15),
            styles: [__webpack_require__(13)],
            template: '<app-features></app-features>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/app.component.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__features_features_component__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.browser.ts` are identical, at the moment(!)
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
                 * NodeModule, NodeHttpModule, NodeJsonpModule are included
                 */
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/app.node.module.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
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
            template: __webpack_require__(16),
            styles: [__webpack_require__(12)]
        }), 
        __metadata('design:paramtypes', [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/features.component.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
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
            template: __webpack_require__(17),
            styles: [__webpack_require__(14)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/header.component.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/index.js.map

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/polyfills.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
var routes = [];
//# sourceMappingURL=C:/xampp/htdocs/clearCaption/src/server.routes.js.map

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = "/* fonts */\n/* fonts */\n/* core */\n/* common */\nbody {\n  font-family: 'Raleway', sans-serif; }\n  body h1 {\n    display: none; }\n\nh1 {\n  /* background : grey;*/\n  color: #000; }\n\nh2 {\n  /* background : grey;*/ }\n\nh3 {\n  /* background : grey;*/ }\n\nh4 {\n  /* background : grey;*/ }\n\np {\n  /* background : grey;*/ }\n\na {\n  /* background : grey;*/ }\n\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #8197A5;\n  font-family: 'Raleway', sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #8197A5;\n  font-family: 'Raleway', sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #8197A5;\n  font-family: 'Raleway', sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #8197A5;\n  font-family: 'Raleway', sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\ninput {\n  height: 45px;\n  border-radius: 4px;\n  border: 1px solid #E2DFD7;\n  background-color: #FFF;\n  color: #525351;\n  font-family: 'Raleway', sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\nselect {\n  position: relative;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  text-indent: 1px;\n  text-overflow: '';\n  background: white url(assets/images/arrow-drop-down.png) no-repeat right 10px center !important; }\n\nselect::-ms-expand {\n  display: none; }\n\n/* section */\n.dropdown:hover .dropdown-menu {\n  display: block; }\n\n.main-navigation .top-header {\n  padding: 9px 0 8px;\n  background-color: #002756; }\n  .main-navigation .top-header .phone-no-wrapper {\n    float: right; }\n    .main-navigation .top-header .phone-no-wrapper img {\n      float: left;\n      margin-right: 12px; }\n    .main-navigation .top-header .phone-no-wrapper p {\n      float: left;\n      font-family: 'Poppins', sans-serif;\n      font-size: 12px;\n      text-transform: uppercase;\n      color: #b8ceec;\n      font-weight: 400; }\n      .main-navigation .top-header .phone-no-wrapper p a {\n        color: #FFF;\n        font-weight: 700; }\n        .main-navigation .top-header .phone-no-wrapper p a:hover {\n          color: #9C373C; }\n\n.main-navigation .main-nav .navbar-header .navbar-brand {\n  height: auto;\n  padding: 21.5px 15px; }\n  .main-navigation .main-nav .navbar-header .navbar-brand img {\n    height: 57px; }\n\n.main-navigation .main-nav .navbar-nav > li {\n  color: #525351;\n  font-family: 'Poppins', sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  text-transform: uppercase; }\n  .main-navigation .main-nav .navbar-nav > li:hover > a {\n    color: #9C373C; }\n  .main-navigation .main-nav .navbar-nav > li a {\n    padding: 40px 15px; }\n  .main-navigation .main-nav .navbar-nav > li:last-of-type {\n    margin-top: 30px;\n    margin-left: 25px;\n    border-radius: 6px;\n    background-color: #9C373C; }\n    .main-navigation .main-nav .navbar-nav > li:last-of-type > a {\n      padding: 10px 15px;\n      color: #FFF;\n      font-family: 'Poppins', sans-serif;\n      font-size: 12px;\n      font-weight: 700;\n      text-transform: uppercase; }\n    .main-navigation .main-nav .navbar-nav > li:last-of-type:hover {\n      background-color: rgba(156, 55, 60, 0.8); }\n  .main-navigation .main-nav .navbar-nav > li > .dropdown-menu {\n    padding: 0; }\n    .main-navigation .main-nav .navbar-nav > li > .dropdown-menu li {\n      color: #525351;\n      font-family: 'Poppins', sans-serif;\n      font-size: 15px;\n      font-weight: 400;\n      text-transform: uppercase; }\n      .main-navigation .main-nav .navbar-nav > li > .dropdown-menu li:hover > a {\n        color: #9C373C; }\n      .main-navigation .main-nav .navbar-nav > li > .dropdown-menu li a {\n        padding: 15px;\n        border: 1px solid transparent; }\n        .main-navigation .main-nav .navbar-nav > li > .dropdown-menu li a:hover {\n          border-top: 1px solid #E4ECF1;\n          border-bottom: 1px solid #E4ECF1;\n          background-color: #F5F8F8; }\n\n/* overrides */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-feature-settings: \"lnum\";\n  font-feature-settings: \"lnum\"; }\n\nhtml,\nbody,\n* {\n  margin: 0;\n  padding: 0; }\n\ninput,\nbutton,\na,\nimg {\n  outline: none; }\n\nimg {\n  vertical-align: middle; }\n\nh1,\nh2,\nh3,\np {\n  margin: 0;\n  padding: 0; }\n\na {\n  text-decoration: none; }\n  a:hover, a:focus, a:active {\n    text-decoration: none; }\n\nul {\n  list-style: none; }\n  ul li {\n    list-style-type: none; }\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -10%, 0);\n    transform: translate3d(0, -10%, 0); }\n  to {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -10%, 0);\n    transform: translate3d(0, -10%, 0); }\n  to {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n    visibility: visible; }\n  to {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n    visibility: visible; }\n  to {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp; }\n\n.features-wrapper {\n  background-image: url(./../../assets/images/features_bg.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 628px;\n  padding-top: 80px;\n  padding-bottom: 80px; }\n  @media (max-width: 767px) {\n    .features-wrapper {\n      height: auto; } }\n\nh2 {\n  color: #ffffff;\n  font-family: 'Poppins', sans-serif;\n  font-size: 32px;\n  font-weight: 500;\n  letter-spacing: -1px;\n  line-height: 46px;\n  padding-bottom: 70px; }\n\nh3 {\n  color: #ffffff;\n  font-family: 'Raleway', sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 28px;\n  text-transform: uppercase;\n  padding-top: 30px;\n  padding-bottom: 10px; }\n\np {\n  /* Style for \"A ClearCap\" */\n  width: 350px;\n  height: 78px;\n  color: #ffffff;\n  font-family: 'Raleway', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 26px; }\n\n.article-wrapper {\n  padding-bottom: 70px; }\n\n.primaryButton {\n  border-radius: 10px;\n  background-color: #9DC400;\n  color: #FFF;\n  font-family: 'Poppins', sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  text-transform: uppercase; }\n  .primaryButton:hover {\n    background-color: #417505; }\n"

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = "h1 {\r\n    display: none;\r\n}"

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = "h1 {\r\n    display: none;\r\n}"

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n<body>\n    <h1>ClearCaptions provides the most advanced captioning phone that makes communication easier for people with hearing loss\n    </h1>\n\n    <header>\n        <nav class=\"navbar navbar-default navbar-fixed-top main-navigation\">\n            <div class=\"container-fluid top-header\">\n                <div class=\"container\">\n                    <div class=\"phone-no-wrapper\">\n                        <img src=\"./../assets/images/mobile-icon.png\" alt=\"\">\n                        <p>\n                            Order by Phone <a href=\"tel:+18662467850\">+1 866 246 7850</a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"container main-nav\">\n                <!-- Brand and toggle get grouped for better mobile display -->\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#main-nav\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n                    <a class=\"navbar-brand\" href=\"#\"><img src=\"./../assets/images/logo.svg\" alt=\"logo\" /></a>\n                </div>\n\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse\" id=\"main-nav\">\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a href=\"#\">Products</a></li>\n                        <li><a href=\"#\">How it Works</a></li>\n                        <li><a href=\"#\">Professionals</a></li>\n                        <li><a href=\"#\">Support</a></li>\n                        <li class=\"dropdown\">\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">About Us</a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Leadership Team</a></li>\n                                <li><a href=\"#\">News</a></li>\n                                <li><a href=\"#\">Press Releases</a></li>\n                                <li><a href=\"#\">Contact Us</a></li>\n                                <li><a href=\"#\">Careers</a></li>\n                            </ul>\n                        </li>\n                        <li><a href=\"#\">Link</a></li>\n                    </ul>\n                </div>\n                <!-- /.navbar-collapse -->\n            </div>\n            <!-- /.container-fluid -->\n        </nav>\n    </header>\n\n    <main>\n        <h1>Test</h1>\n        <h3>test heading 3</h3>\n        <div>\n            <button type=\"button\" class=\"btn btn-primary\"> Read more </button>\n        </div>\n    </main>\n\n    <footer>\n\n    </footer>\n\n</body>"

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\">\n<!--features section-->\n<section class=\"features-wrapper\">\n    <div class=\"container text-center\">\n        <h2>More features</h2>\n\n        <div class=\"row article-wrapper\">\n\n\n            <div class=\"col-xs-12 col-md-4\">\n                <article>\n                    <img src=\"./../../assets/images/phone.png\" alt=\"\">\n                    <h3>Free Phone &amp; Captioning</h3>\n                    <p>Captions are provided free-of-charge to people with hearing loss</p>\n                    <a href=\"#\">For more info click here</a>\n                </article>\n            </div>\n\n\n            <div class=\"col-xs-12 col-md-4\">\n                <article>\n                    <img src=\"./../../assets/images/installation.png\" alt=\"\">\n                    <h3>Free Installation</h3>\n                    <p>A ClearCaptions specialist will come to your home to install your phone and train you on how to use it.</p>\n                </article>\n            </div>\n\n            <div class=\"col-xs-12 col-md-4\">\n                <article>\n                    <img src=\"./../../assets/images/ongoing_support.png\" alt=\"\">\n                    <h3>Free Ongoing Support</h3>\n                    <p>Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                </article>\n            </div>\n\n            <!--article wrapper-->\n        </div>\n        <!--row-->\n        <button type=\"button\" class=\"btn primaryButton\">Sign up today</button>\n    </div>\n</section>"

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2QzN2QxNzdhMDgzMWJmYmE3ZWEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM5REEsMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0d1QjtBQUNTO0FBQ0o7QUFDTTtBQUNRO0FBQ1k7QUFDUjtBQUNHO0FBQ087QUFDaEI7QUFFeEMsTUFBTTtBQUVOLElBQU0sR0FBRyxHQUFJLHFDQUFPLEVBQUUsQ0FBQztBQUN2QixJQUFNLElBQUksR0FBRywwQ0FBUyxDQUFDLDZDQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdEQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBRXRDOztHQUVHO0FBQ0gsRUFBRSxDQUFDLENBQUMsOEVBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzNCLG9GQUFjLEVBQUUsQ0FBQztBQUNuQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSw0RkFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEMsR0FB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Ozs7Ozs7QUNBeGYsK0M7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLHVFOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEseUQ7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLGtEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxvQzs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic2VydmVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb3J5IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vcnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0Mik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2QzN2QxNzdhMDgzMWJmYmE3ZWEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogdGhlIHBvbHlmaWxscyBtdXN0IGJlIHRoZSBmaXJzdCB0aGluZyBpbXBvcnRlZFxuICovXG5pbXBvcnQgJy4vcG9seWZpbGxzLnRzJztcbmltcG9ydCAnLi9fXzIuMS4xLndvcmthcm91bmQudHMnOyAvLyB0ZW1wb3JhcnkgdW50aWwgMi4xLjEgdGhpbmdzIGFyZSBwYXRjaGVkIGluIENvcmVcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IHsgY3JlYXRlRW5naW5lIH0gZnJvbSAnYW5ndWxhcjItZXhwcmVzcy1lbmdpbmUnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5ub2RlLm1vZHVsZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vc2VydmVyLnJvdXRlcyc7XG5cbi8vIEFwcFxuXG5jb25zdCBhcHAgID0gZXhwcmVzcygpO1xuY29uc3QgUk9PVCA9IHBhdGguam9pbihwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKSk7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MjAwO1xuXG4vKipcbiAqIGVuYWJsZSBwcm9kIG1vZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXG4gKi9cbmlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4gIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbi8qKlxuICogRXhwcmVzcyBWaWV3XG4gKi9cbmFwcC5lbmdpbmUoJy5odG1sJywgY3JlYXRlRW5naW5lKHt9KSk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihST09ULCAnY2xpZW50JykpO1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaHRtbCcpO1xuXG4vKipcbiAqIEVuYWJsZSBjb21wcmVzc2lvblxuICovXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vKipcbiAqIHNlcnZlIHN0YXRpYyBmaWxlc1xuICovXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSwge2luZGV4OiBmYWxzZX0pKTtcblxuLyoqXG4gKiBwbGFjZSB5b3VyIGFwaSByb3V0ZXMgaGVyZVxuICovXG4vLyBhcHAudXNlKCcvYXBpJywgYXBpKTtcblxuLyoqXG4gKiBib290c3RyYXAgdW5pdmVyc2FsIGFwcFxuICogQHBhcmFtIHJlcVxuICogQHBhcmFtIHJlc1xuICovXG5mdW5jdGlvbiBuZ0FwcChyZXE6IGFueSwgcmVzOiBhbnkpIHtcbiAgcmVzLnJlbmRlcignaW5kZXgnLCB7XG4gICAgcmVxLFxuICAgIHJlcyxcbiAgICBuZ01vZHVsZTogQXBwTW9kdWxlLFxuICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgIGJhc2VVcmw6ICcvJyxcbiAgICByZXF1ZXN0VXJsOiByZXEub3JpZ2luYWxVcmwsXG4gICAgb3JpZ2luVXJsOiByZXEuaG9zdG5hbWVcbiAgfSk7XG59XG5cbi8qKlxuICogdXNlIHVuaXZlcnNhbCBmb3Igc3BlY2lmaWMgcm91dGVzXG4gKi9cbmFwcC5nZXQoJy8nLCBuZ0FwcCk7XG5yb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gIGFwcC5nZXQoYC8ke3JvdXRlfWAsIG5nQXBwKTtcbiAgYXBwLmdldChgLyR7cm91dGV9LypgLCBuZ0FwcCk7XG59KTtcblxuLyoqXG4gKiBpZiB5b3Ugd2FudCB0byB1c2UgdW5pdmVyc2FsIGZvciBhbGwgcm91dGVzLCB5b3UgY2FuIHVzZSB0aGUgJyonIHdpbGRjYXJkXG4gKi9cblxuYXBwLmdldCgnKicsIGZ1bmN0aW9uIChyZXE6IGFueSwgcmVzOiBhbnkpIHtcbiAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgY29uc3QgcG9qbyA9IHtzdGF0dXM6IDQwNCwgbWVzc2FnZTogJ05vIENvbnRlbnQnfTtcbiAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHBvam8sIG51bGwsIDIpO1xuICByZXMuc3RhdHVzKDQwNCkuc2VuZChqc29uKTtcbn0pO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci50cyIsIi8qXG4gKiBUSElTIElTIFRFTVBPUkFSWSBUTyBQQVRDSCAyLjEuMSsgQ29yZSBidWdzXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmxldCBfX2NvbXBpbGVyX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG52YXIgX19jb3JlX3ByaXZhdGVfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xubGV0IHBhdGNoOiBCb29sZWFuID0gZmFsc2U7XG5cbmlmICghX19jb3JlX3ByaXZhdGVfXy5oYXNPd25Qcm9wZXJ0eSgnVmlld1V0aWxzJykpIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgX19jb3JlX3ByaXZhdGVfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XG59XG5cbmlmICghX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIChfX2NvbXBpbGVyX18pLl9fY29tcGlsZXJfcHJpdmF0ZV9fID0ge1xuICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXG4gICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICB9XG59XG5cbnZhciBfX3VuaXZlcnNhbF9fOiBhbnkgPSByZXF1aXJlKCdhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18nKTtcbmlmIChwYXRjaCkge1xuICAgIF9fdW5pdmVyc2FsX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xuICAgIF9fdW5pdmVyc2FsX18uQ3NzU2VsZWN0b3IgPSBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fXzIuMS4xLndvcmthcm91bmQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXSxcbiAgdGVtcGxhdGU6JzxhcHAtZmVhdHVyZXM+PC9hcHAtZmVhdHVyZXM+J1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdhcHAgd29ya3MhJztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi8qKlxuICogVGhpcyBmaWxlIGFuZCBgbWFpbi5icm93c2VyLnRzYCBhcmUgaWRlbnRpY2FsLCBhdCB0aGUgbW9tZW50KCEpXG4gKiBCeSBzcGxpdHRpbmcgdGhlc2UsIHlvdSdyZSBhYmxlIHRvIGNyZWF0ZSBsb2dpYywgaW1wb3J0cywgZXRjIHRoYXQgYXJlIFwiUGxhdGZvcm1cIiBzcGVjaWZpYy5cbiAqIElmIHlvdSB3YW50IHlvdXIgY29kZSB0byBiZSBjb21wbGV0ZWx5IFVuaXZlcnNhbCBhbmQgZG9uJ3QgbmVlZCB0aGF0XG4gKiBZb3UgY2FuIGFsc28ganVzdCBoYXZlIDEgZmlsZSwgdGhhdCBpcyBpbXBvcnRlZCBpbnRvIGJvdGhcbiAqIGNsaWVudC50cyBhbmQgc2VydmVyLnRzXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWF0dXJlc0NvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBpbXBvcnQgeyBhcHBSb3V0ZXMgfSBmcm9tICcuL2FwcC9hcHAucm91dGluZyc7XG5cbi8qKlxuICogVG9wLWxldmVsIE5nTW9kdWxlIFwiY29udGFpbmVyXCJcbiAqL1xuQE5nTW9kdWxlKHtcbiAgLyoqIFJvb3QgQXBwIENvbXBvbmVudCAqL1xuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXG4gIC8qKiBPdXIgQ29tcG9uZW50cyAqL1xuICBkZWNsYXJhdGlvbnM6IFsgQXBwQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIEZlYXR1cmVzQ29tcG9uZW50IF0sXG4gIGltcG9ydHM6IFtcbiAgICAvKipcbiAgICAgKiBOT1RFOiBOZWVkcyB0byBiZSB5b3VyIGZpcnN0IGltcG9ydCAoISlcbiAgICAgKiBOb2RlTW9kdWxlLCBOb2RlSHR0cE1vZHVsZSwgTm9kZUpzb25wTW9kdWxlIGFyZSBpbmNsdWRlZFxuICAgICAqL1xuICAgIFVuaXZlcnNhbE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICAgIC8qKlxuICAgICAqIHVzaW5nIHJvdXRlc1xuICAgICAqL1xuICAgIC8vIFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcylcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mZWF0dXJlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWF0dXJlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzJ11cbiAgLy8gc3R5bGVVcmxzOiBbJy4vLi4vLi4vYXNzZXRzL3Njc3MvcGFnZXMvX2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCJleHBvcnQgKiBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC50cyIsIi8vIFRoZSBmaWxlIGNvbnRlbnRzIGZvciB0aGUgY3VycmVudCBlbnZpcm9ubWVudCB3aWxsIG92ZXJ3cml0ZSB0aGVzZSBkdXJpbmcgYnVpbGQuXG4vLyBUaGUgYnVpbGQgc3lzdGVtIGRlZmF1bHRzIHRvIHRoZSBkZXYgZW52aXJvbm1lbnQgd2hpY2ggdXNlcyBgZW52aXJvbm1lbnQudHNgLCBidXQgaWYgeW91IGRvXG4vLyBgdW5nIGJ1aWxkIC0tZW52PXByb2RgIHRoZW4gYGVudmlyb25tZW50LnByb2QudHNgIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuLy8gVGhlIGxpc3Qgb2Ygd2hpY2ggZW52IG1hcHMgdG8gd2hpY2ggZmlsZSBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXItY2xpLmpzb25gLlxuXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XG4gIHByb2R1Y3Rpb246IGZhbHNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIi8vIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgMiBhbmQgaXMgbG9hZGVkIGJlZm9yZVxuLy8gdGhlIGFwcC4gWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cblxuaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJztcbmltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0JztcbmltcG9ydCAnY29yZS1qcy9lczYvZnVuY3Rpb24nO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L251bWJlcic7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9kYXRlJztcbmltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXAnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcblxuaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wb2x5ZmlsbHMudHMiLCIvKipcbiAqIFNlcnZlci1zaWRlIHJvdXRlcy4gT25seSB0aGUgbGlzdGVkIHJvdXRlcyBzdXBwb3J0IGh0bWw1cHVzaHN0YXRlLlxuICogSGFzIHRvIG1hdGNoIGNsaWVudCBzaWRlIHJvdXRlcy5cbiAqXG4gKiBJbmRleCAoLykgcm91dGUgZG9lcyBub3QgaGF2ZSB0byBiZSBsaXN0ZWQgaGVyZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXG4gKiAnaG9tZScsICdhYm91dCdcbiAqIF07XG4gKiovXG5leHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcblxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIGZvbnRzICovXFxuLyogZm9udHMgKi9cXG4vKiBjb3JlICovXFxuLyogY29tbW9uICovXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmOyB9XFxuICBib2R5IGgxIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcblxcbmgxIHtcXG4gIC8qIGJhY2tncm91bmQgOiBncmV5OyovXFxuICBjb2xvcjogIzAwMDsgfVxcblxcbmgyIHtcXG4gIC8qIGJhY2tncm91bmQgOiBncmV5OyovIH1cXG5cXG5oMyB7XFxuICAvKiBiYWNrZ3JvdW5kIDogZ3JleTsqLyB9XFxuXFxuaDQge1xcbiAgLyogYmFja2dyb3VuZCA6IGdyZXk7Ki8gfVxcblxcbnAge1xcbiAgLyogYmFja2dyb3VuZCA6IGdyZXk7Ki8gfVxcblxcbmEge1xcbiAgLyogYmFja2dyb3VuZCA6IGdyZXk7Ki8gfVxcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXFxuICBjb2xvcjogIzgxOTdBNTtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNTAwOyB9XFxuXFxuOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIC8qIEZpcmVmb3ggMTkrICovXFxuICBjb2xvcjogIzgxOTdBNTtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNTAwOyB9XFxuXFxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAvKiBJRSAxMCsgKi9cXG4gIGNvbG9yOiAjODE5N0E1O1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG5cXG46LW1vei1wbGFjZWhvbGRlciB7XFxuICAvKiBGaXJlZm94IDE4LSAqL1xcbiAgY29sb3I6ICM4MTk3QTU7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcblxcbmlucHV0IHtcXG4gIGhlaWdodDogNDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMkRGRDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgY29sb3I6ICM1MjUzNTE7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcblxcbnNlbGVjdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICB0ZXh0LWluZGVudDogMXB4O1xcbiAgdGV4dC1vdmVyZmxvdzogJyc7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoYXNzZXRzL2ltYWdlcy9hcnJvdy1kcm9wLWRvd24ucG5nKSBuby1yZXBlYXQgcmlnaHQgMTBweCBjZW50ZXIgIWltcG9ydGFudDsgfVxcblxcbnNlbGVjdDo6LW1zLWV4cGFuZCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLyogc2VjdGlvbiAqL1xcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudSB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5tYWluLW5hdmlnYXRpb24gLnRvcC1oZWFkZXIge1xcbiAgcGFkZGluZzogOXB4IDAgOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjc1NjsgfVxcbiAgLm1haW4tbmF2aWdhdGlvbiAudG9wLWhlYWRlciAucGhvbmUtbm8td3JhcHBlciB7XFxuICAgIGZsb2F0OiByaWdodDsgfVxcbiAgICAubWFpbi1uYXZpZ2F0aW9uIC50b3AtaGVhZGVyIC5waG9uZS1uby13cmFwcGVyIGltZyB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4OyB9XFxuICAgIC5tYWluLW5hdmlnYXRpb24gLnRvcC1oZWFkZXIgLnBob25lLW5vLXdyYXBwZXIgcCB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICBjb2xvcjogI2I4Y2VlYztcXG4gICAgICBmb250LXdlaWdodDogNDAwOyB9XFxuICAgICAgLm1haW4tbmF2aWdhdGlvbiAudG9wLWhlYWRlciAucGhvbmUtbm8td3JhcHBlciBwIGEge1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgICAgICAubWFpbi1uYXZpZ2F0aW9uIC50b3AtaGVhZGVyIC5waG9uZS1uby13cmFwcGVyIHAgYTpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiAjOUMzNzNDOyB9XFxuXFxuLm1haW4tbmF2aWdhdGlvbiAubWFpbi1uYXYgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiAyMS41cHggMTVweDsgfVxcbiAgLm1haW4tbmF2aWdhdGlvbiAubWFpbi1uYXYgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCBpbWcge1xcbiAgICBoZWlnaHQ6IDU3cHg7IH1cXG5cXG4ubWFpbi1uYXZpZ2F0aW9uIC5tYWluLW5hdiAubmF2YmFyLW5hdiA+IGxpIHtcXG4gIGNvbG9yOiAjNTI1MzUxO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuICAubWFpbi1uYXZpZ2F0aW9uIC5tYWluLW5hdiAubmF2YmFyLW5hdiA+IGxpOmhvdmVyID4gYSB7XFxuICAgIGNvbG9yOiAjOUMzNzNDOyB9XFxuICAubWFpbi1uYXZpZ2F0aW9uIC5tYWluLW5hdiAubmF2YmFyLW5hdiA+IGxpIGEge1xcbiAgICBwYWRkaW5nOiA0MHB4IDE1cHg7IH1cXG4gIC5tYWluLW5hdmlnYXRpb24gLm1haW4tbmF2IC5uYXZiYXItbmF2ID4gbGk6bGFzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlDMzczQzsgfVxcbiAgICAubWFpbi1uYXZpZ2F0aW9uIC5tYWluLW5hdiAubmF2YmFyLW5hdiA+IGxpOmxhc3Qtb2YtdHlwZSA+IGEge1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgICBjb2xvcjogI0ZGRjtcXG4gICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG4gICAgLm1haW4tbmF2aWdhdGlvbiAubWFpbi1uYXYgLm5hdmJhci1uYXYgPiBsaTpsYXN0LW9mLXR5cGU6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCA1NSwgNjAsIDAuOCk7IH1cXG4gIC5tYWluLW5hdmlnYXRpb24gLm1haW4tbmF2IC5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudSB7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gICAgLm1haW4tbmF2aWdhdGlvbiAubWFpbi1uYXYgLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51IGxpIHtcXG4gICAgICBjb2xvcjogIzUyNTM1MTtcXG4gICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG4gICAgICAubWFpbi1uYXZpZ2F0aW9uIC5tYWluLW5hdiAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUgbGk6aG92ZXIgPiBhIHtcXG4gICAgICAgIGNvbG9yOiAjOUMzNzNDOyB9XFxuICAgICAgLm1haW4tbmF2aWdhdGlvbiAubWFpbi1uYXYgLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51IGxpIGEge1xcbiAgICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyB9XFxuICAgICAgICAubWFpbi1uYXZpZ2F0aW9uIC5tYWluLW5hdiAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUgbGkgYTpob3ZlciB7XFxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTRFQ0YxO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U0RUNGMTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjhGODsgfVxcblxcbi8qIG92ZXJyaWRlcyAqL1xcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcXFwibG51bVxcXCI7XFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFxcXCJsbnVtXFxcIjsgfVxcblxcbmh0bWwsXFxuYm9keSxcXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG5pbnB1dCxcXG5idXR0b24sXFxuYSxcXG5pbWcge1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbmltZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIGE6aG92ZXIsIGE6Zm9jdXMsIGE6YWN0aXZlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgdWwgbGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXG5cXG4uYW5pbWF0ZWQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwJSwgMCk7IH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAlLCAwKTsgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBub25lOyB9IH1cXG5cXG4uZmFkZUluRG93biB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dFVwIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7IH0gfVxcblxcbi5mYWRlT3V0VXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcDsgfVxcblxcbi5mZWF0dXJlcy13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVhdHVyZXNfYmcucG5nKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiA2MjhweDtcXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAuZmVhdHVyZXMtd3JhcHBlciB7XFxuICAgICAgaGVpZ2h0OiBhdXRvOyB9IH1cXG5cXG5oMiB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBsaW5lLWhlaWdodDogNDZweDtcXG4gIHBhZGRpbmctYm90dG9tOiA3MHB4OyB9XFxuXFxuaDMge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cXG5cXG5wIHtcXG4gIC8qIFN0eWxlIGZvciBcXFwiQSBDbGVhckNhcFxcXCIgKi9cXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNzhweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMjZweDsgfVxcblxcbi5hcnRpY2xlLXdyYXBwZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7IH1cXG5cXG4ucHJpbWFyeUJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlEQzQwMDtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuICAucHJpbWFyeUJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTc1MDU7IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImgxIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJoMSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxsaW5rIGhyZWY9XFxcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWFscGhhLjYvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXFxcIiByZWw9XFxcInN0eWxlc2hlZXRcXFwiPlxcblxcbjxib2R5PlxcbiAgICA8aDE+Q2xlYXJDYXB0aW9ucyBwcm92aWRlcyB0aGUgbW9zdCBhZHZhbmNlZCBjYXB0aW9uaW5nIHBob25lIHRoYXQgbWFrZXMgY29tbXVuaWNhdGlvbiBlYXNpZXIgZm9yIHBlb3BsZSB3aXRoIGhlYXJpbmcgbG9zc1xcbiAgICA8L2gxPlxcblxcbiAgICA8aGVhZGVyPlxcbiAgICAgICAgPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC10b3AgbWFpbi1uYXZpZ2F0aW9uXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgdG9wLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwaG9uZS1uby13cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi8uLi9hc3NldHMvaW1hZ2VzL21vYmlsZS1pY29uLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcmRlciBieSBQaG9uZSA8YSBocmVmPVxcXCJ0ZWw6KzE4NjYyNDY3ODUwXFxcIj4rMSA4NjYgMjQ2IDc4NTA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBtYWluLW5hdlxcXCI+XFxuICAgICAgICAgICAgICAgIDwhLS0gQnJhbmQgYW5kIHRvZ2dsZSBnZXQgZ3JvdXBlZCBmb3IgYmV0dGVyIG1vYmlsZSBkaXNwbGF5IC0tPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIiNtYWluLW5hdlxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPjxpbWcgc3JjPVxcXCIuLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmdcXFwiIGFsdD1cXFwibG9nb1xcXCIgLz48L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIENvbGxlY3QgdGhlIG5hdiBsaW5rcywgZm9ybXMsIGFuZCBvdGhlciBjb250ZW50IGZvciB0b2dnbGluZyAtLT5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXFxcIiBpZD1cXFwibWFpbi1uYXZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5Qcm9kdWN0czwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5Ib3cgaXQgV29ya3M8L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+UHJvZmVzc2lvbmFsczwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5TdXBwb3J0PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiBhcmlhLWhhc3BvcHVwPVxcXCJ0cnVlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+QWJvdXQgVXM8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+TGVhZGVyc2hpcCBUZWFtPC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+TmV3czwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPlByZXNzIFJlbGVhc2VzPC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+Q29udGFjdCBVczwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkNhcmVlcnM8L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5MaW5rPC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPCEtLSAvLm5hdmJhci1jb2xsYXBzZSAtLT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8IS0tIC8uY29udGFpbmVyLWZsdWlkIC0tPlxcbiAgICAgICAgPC9uYXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICA8bWFpbj5cXG4gICAgICAgIDxoMT5UZXN0PC9oMT5cXG4gICAgICAgIDxoMz50ZXN0IGhlYWRpbmcgMzwvaDM+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gUmVhZCBtb3JlIDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvbWFpbj5cXG5cXG4gICAgPGZvb3Rlcj5cXG5cXG4gICAgPC9mb290ZXI+XFxuXFxuPC9ib2R5PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxsaW5rIGhyZWY9XFxcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2Nzcy9ib290c3RyYXAubWluLmNzc1xcXCIgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIj5cXG48IS0tZmVhdHVyZXMgc2VjdGlvbi0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJmZWF0dXJlcy13cmFwcGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgIDxoMj5Nb3JlIGZlYXR1cmVzPC9oMj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBhcnRpY2xlLXdyYXBwZXJcXFwiPlxcblxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9waG9uZS5wbmdcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMz5GcmVlIFBob25lICZhbXA7IENhcHRpb25pbmc8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+Q2FwdGlvbnMgYXJlIHByb3ZpZGVkIGZyZWUtb2YtY2hhcmdlIHRvIHBlb3BsZSB3aXRoIGhlYXJpbmcgbG9zczwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiPkZvciBtb3JlIGluZm8gY2xpY2sgaGVyZTwvYT5cXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbnN0YWxsYXRpb24ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDM+RnJlZSBJbnN0YWxsYXRpb248L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+QSBDbGVhckNhcHRpb25zIHNwZWNpYWxpc3Qgd2lsbCBjb21lIHRvIHlvdXIgaG9tZSB0byBpbnN0YWxsIHlvdXIgcGhvbmUgYW5kIHRyYWluIHlvdSBvbiBob3cgdG8gdXNlIGl0LjwvcD5cXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vbmdvaW5nX3N1cHBvcnQucG5nXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDM+RnJlZSBPbmdvaW5nIFN1cHBvcnQ8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+Q3JhcyBtYXR0aXMgY29uc2VjdGV0dXIgcHVydXMgc2l0IGFtZXQgZmVybWVudHVtLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvcD5cXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDwhLS1hcnRpY2xlIHdyYXBwZXItLT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPCEtLXJvdy0tPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gcHJpbWFyeUJ1dHRvblxcXCI+U2lnbiB1cCB0b2RheTwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG48L3NlY3Rpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8cD5cXG4gIGhlYWRlciB3b3JrcyFcXG48L3A+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tcGlsZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21waWxlclwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbXByZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2FycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZGF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIlxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIlxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbnVtYmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L29iamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCJcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWludFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWdleHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIlxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc2V0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCJcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zeW1ib2xcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIlxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczcvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==