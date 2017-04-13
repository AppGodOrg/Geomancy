webpackJsonp([2],{

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reading_figures__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tetragram_tetragram_module__ = __webpack_require__(887);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingFiguresPageModule", function() { return ReadingFiguresPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReadingFiguresPageModule = (function () {
    function ReadingFiguresPageModule() {
    }
    return ReadingFiguresPageModule;
}());
ReadingFiguresPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reading_figures__["a" /* ReadingFiguresPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reading_figures__["a" /* ReadingFiguresPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_tetragram_tetragram_module__["a" /* TetragramComponentModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__reading_figures__["a" /* ReadingFiguresPage */]
        ]
    })
], ReadingFiguresPageModule);

//# sourceMappingURL=reading-figures.module.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tetragram__ = __webpack_require__(888);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TetragramComponentModule = (function () {
    function TetragramComponentModule() {
    }
    return TetragramComponentModule;
}());
TetragramComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__tetragram__["a" /* TetragramComponent */],
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__tetragram__["a" /* TetragramComponent */]
        ]
    })
], TetragramComponentModule);

//# sourceMappingURL=tetragram.module.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tetragram__ = __webpack_require__(525);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TetragramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TetragramComponent = (function () {
    function TetragramComponent() {
    }
    TetragramComponent.prototype.renderRow = function (key) {
        if (key == 0) {
            return '0';
        }
        else if (key == 1) {
            return '0    0';
        }
    };
    return TetragramComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_tetragram__["a" /* Tetragram */])
], TetragramComponent.prototype, "tetragram", void 0);
TetragramComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'tetragram',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/components/tetragram/tetragram.html"*/'<!-- Generated template for the TetragramComponent component -->\n<div>\n  {{renderRow(tetragram.row0)}}\n</div>\n<div>\n  {{renderRow(tetragram.row1)}}\n</div>\n<div>\n  {{renderRow(tetragram.row2)}}\n</div>\n<div>\n  {{renderRow(tetragram.row3)}}\n</div>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/components/tetragram/tetragram.html"*/
    }),
    __metadata("design:paramtypes", [])
], TetragramComponent);

//# sourceMappingURL=tetragram.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tetragram__ = __webpack_require__(525);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingFiguresPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadingFiguresPage = (function () {
    function ReadingFiguresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.h2i = __WEBPACK_IMPORTED_MODULE_2__models_tetragram__["b" /* houseToInterpretation */];
        this.reading = navParams.get('reading');
    }
    ReadingFiguresPage.prototype.showTetragram = function (tetragram, house) {
        this.navCtrl.push('TetragramPage', { tetragram: tetragram, house: house });
    };
    return ReadingFiguresPage;
}());
ReadingFiguresPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-reading-figures',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/reading-figures/reading-figures.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Figures</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <tetragram [tetragram]="reading.witness1"></tetragram>\n        <p>Left Witness</p>\n      </ion-col>\n      <ion-col col-4>\n        <tetragram [tetragram]="reading.judge"></tetragram>\n        <p>Judge</p>\n      </ion-col>\n      <ion-col col-4>\n        <tetragram [tetragram]="reading.witness0"></tetragram>\n        <p>Right Witness</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3>\n        <tetragram [tetragram]="reading.mother3"></tetragram>\n        <p>Mother 4</p>\n      </ion-col>\n      <ion-col col-3>\n        <tetragram [tetragram]="reading.mother2"></tetragram>\n        <p>Mother 3</p>\n      </ion-col>\n      <ion-col col-3>\n        <tetragram [tetragram]="reading.mother1"></tetragram>\n        <p>Mother 2</p>\n      </ion-col>\n      <ion-col col-3>\n        <tetragram [tetragram]="reading.mother0"></tetragram>\n        <p>Mother 1</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3>\n        <tetragram [tetragram]="reading.daughter3"></tetragram>\n        <p>Daughter 4</p>\n      </ion-col>\n      <ion-col col-3>\n        <tetragram [tetragram]="reading.daughter2"></tetragram>\n        <p>Daughter 3</p>\n      </ion-col>\n      <ion-col col-3>\n        <tetragram [tetragram]="reading.daughter1"></tetragram>\n        <p>Daughter 2</p>\n      </ion-col>\n      <ion-col col-3>\n        <tetragram [tetragram]="reading.daughter0"></tetragram>\n        <p>Daughter 1</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3>\n        <tetragram [tetragram]="reading.nephew3"></tetragram>\n        <p>Nephew 4</p>\n      </ion-col>\n      <ion-col col-3>\n        <tetragram [tetragram]="reading.nephew2"></tetragram>\n        <p>Nephew 3</p>\n      </ion-col>\n      <ion-col col-3>\n        <tetragram [tetragram]="reading.nephew1"></tetragram>\n        <p>Nephew 2</p>\n      </ion-col>\n      <ion-col col-3>\n        <tetragram [tetragram]="reading.nephew0"></tetragram>\n        <p>Nephew 1</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/reading-figures/reading-figures.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ReadingFiguresPage);

//# sourceMappingURL=reading-figures.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map