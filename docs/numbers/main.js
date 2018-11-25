(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align: center; border: solid 2px gray;\">\n  <div class=\"row\">\n    <div class=\"col-md-12 header\">\n      <h1>Códigos</h1>\n    </div>\n  </div>\n  <div class=\"row contenido\">\n    <div class=\"col-md-6 col-xs-12\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h2 class=\"titulo\">Código</h2>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\" style=\"margin-top: 10px; margin-bottom: 10px;\">\n          <ng-select [items]=\"valores\" bindLabel=\"valor\" bindValue=\"posicion\" [(ngModel)]=\"seleccionado\">\n          </ng-select>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-xs-12\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h2 class=\"titulo\">Valor</h2>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\" *ngIf=\"!seleccionado\"  style=\"margin-top: 10px;\">\n          <h3>\n            <i class=\"fa fa-caret-square-o-left\"></i> Seleccionar valor\n          </h3>\n        </div>\n        <div *ngIf=\"seleccionado\" class=\"col-md-10\" style=\"margin-top: 10px;\">\n          <h3 class=\"valor\" id=\"valor\">\n            {{seleccionado}}\n          </h3>\n        </div>\n        <div *ngIf=\"seleccionado\" class=\"col-md-2\" style=\"margin-top: 10px;\">\n          <button class=\"btn btn-branch\" (click)=\"copiar()\"  placement=\"top\" ngbTooltip=\"Tooltip on top\">\n            <i class=\"fa fa-files-o\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 10px;\n  border-radius: 15px; }\n\n.header {\n  background-color: #ff6200;\n  color: white;\n  font-family: 'Chakra Petch', sans-serif;\n  border-top-left-radius: 13px;\n  border-top-right-radius: 13px; }\n\nh3 {\n  font-family: 'Chakra Petch', sans-serif; }\n\n.contenido {\n  padding: 1em; }\n\n.titulo {\n  background-color: #c9c9c9;\n  color: #4e4e4e;\n  padding: 3px;\n  border-radius: 15px; }\n\n.valor {\n  border: 2px dotted #ff6200;\n  color: #4e4e4e;\n  border-radius: 15px; }\n\n.btn-branch {\n  color: white !important;\n  background-color: #ff6200 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb3llY3Rvc1xcbnVtYmVycy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osd0NBQXVDO0VBQ3ZDLDZCQUE0QjtFQUM1Qiw4QkFBNkIsRUFDaEM7O0FBQ0Q7RUFDSSx3Q0FBdUMsRUFDMUM7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSwwQkFBeUI7RUFDekIsZUFBYztFQUNkLGFBQVk7RUFDWixvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSwyQkFBMEI7RUFDMUIsZUFBYztFQUNkLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLHdCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjIwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2hha3JhIFBldGNoJywgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEzcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTNweDtcclxufVxyXG5oMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0NoYWtyYSBQZXRjaCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmNvbnRlbmlkb3tcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG4udGl0dWxve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTtcclxuICAgIGNvbG9yOiAjNGU0ZTRlO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4udmFsb3J7XHJcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgI2ZmNjIwMDtcclxuICAgIGNvbG9yOiAjNGU0ZTRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uYnRuLWJyYW5jaHtcclxuICAgIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MjAwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.valores = [
            { valor: 1, posicion: '205' },
            { valor: 2, posicion: '951' },
            { valor: 3, posicion: '446' },
            { valor: 4, posicion: '777' },
            { valor: 5, posicion: '309' },
            { valor: 6, posicion: '574' },
            { valor: 7, posicion: '486' },
            { valor: 8, posicion: '382' },
            { valor: 9, posicion: '967' },
            { valor: 10, posicion: '416' },
            { valor: 11, posicion: '154' },
            { valor: 12, posicion: '206' },
            { valor: 13, posicion: '185' },
            { valor: 14, posicion: '255' },
            { valor: 15, posicion: '925' },
            { valor: 16, posicion: '578' },
            { valor: 17, posicion: '430' },
            { valor: 18, posicion: '106' },
            { valor: 19, posicion: '161' },
            { valor: 20, posicion: '894' },
            { valor: 21, posicion: '556' },
            { valor: 22, posicion: '375' },
            { valor: 23, posicion: '774' },
            { valor: 24, posicion: '953' },
            { valor: 25, posicion: '310' },
            { valor: 26, posicion: '252' },
            { valor: 27, posicion: '168' },
            { valor: 28, posicion: '640' },
            { valor: 29, posicion: '496' },
            { valor: 30, posicion: '633' },
            { valor: 31, posicion: '479' },
            { valor: 32, posicion: '555' },
            { valor: 33, posicion: '908' },
            { valor: 34, posicion: '187' },
            { valor: 35, posicion: '240' },
            { valor: 36, posicion: '181' },
            { valor: 37, posicion: '589' },
            { valor: 38, posicion: '311' },
            { valor: 39, posicion: '800' },
            { valor: 40, posicion: '179' },
            { valor: 41, posicion: '752' },
            { valor: 42, posicion: '759' },
            { valor: 43, posicion: '105' },
            { valor: 44, posicion: '333' },
            { valor: 45, posicion: '765' },
            { valor: 46, posicion: '260' },
            { valor: 47, posicion: '910' },
            { valor: 48, posicion: '392' },
            { valor: 49, posicion: '699' },
            { valor: 50, posicion: '773' }
        ];
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.copiar = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.seleccionado;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('valor'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "valorDom", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Proyectos\numbers\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map