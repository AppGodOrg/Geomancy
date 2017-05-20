webpackJsonp([7],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new__ = __webpack_require__(291);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewPageModule = (function () {
    function NewPageModule() {
    }
    return NewPageModule;
}());
NewPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__new__["a" /* NewPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new__["a" /* NewPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__new__["a" /* NewPage */]
        ]
    })
], NewPageModule);

//# sourceMappingURL=new.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tetragram_info__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tetragram; });

var Tetragram = (function () {
    function Tetragram(key) {
        if (key === void 0) { key = Math.floor(Math.random() * 15); }
        this.key = key;
        var info = __WEBPACK_IMPORTED_MODULE_0__tetragram_info__["a" /* tetragramInfo */][key];
        this.name = info.name;
        this.translation = info.translation;
        this.desc = info.desc;
        this.element = info.element;
        this.rules = info.rules;
        this.exalted = info.exalted;
        this.fall = info.fall;
        this.detriment = info.detriment;
        this.triplicity = info.triplicity;
        this.phrase = info.phrase;
        this.houseMeanings = info.houseMeanings;
        this.planet = info.planet;
        this.dots = info.dots;
        this.sign = info.sign;
    }
    Tetragram.prototype.getRow = function (num) {
        // get value of row (0 = 1 dot, 1 = 2 dots)
        var shift = num - 1;
        var mask = 0x0001 << shift;
        return (this.key & mask) >> shift;
    };
    Tetragram.prototype.renderRow = function (num) {
        var row = this.getRow(num);
        if (row == 0)
            return '●';
        if (row == 1)
            return '● ●';
    };
    Tetragram.prototype.add = function (tetragram) {
        // add two tetragrams
        var key = (15 - this.key ^ tetragram.key) % 16;
        return new Tetragram(key);
    };
    Tetragram.prototype.getHouseMeaning = function (houseNumber) {
        return this.houseMeanings[houseNumber - 1];
    };
    Tetragram.prototype.reversed = function () {
        // flip entire tetragram
        var key = (this.key >> 3) % 2 * 1
            + (this.key >> 2) % 2 * 2
            + (this.key >> 1) % 2 * 4
            + (this.key >> 0) % 2 * 8;
        return new Tetragram(key);
    };
    Tetragram.prototype.inversed = function () {
        var key = 15 ^ this.key;
        return new Tetragram(key);
    };
    Tetragram.prototype.conversed = function () {
        return this.reversed().inversed();
    };
    Tetragram.generateKey = function (num1, num2, num3, num4) {
        var row1 = (num1 % 2) * 1;
        var row2 = (num2 % 2) * 2;
        var row3 = (num3 % 2) * 4;
        var row4 = (num4 % 2) * 8;
        var key = row1 + row2 + row3 + row4;
        return key;
    };
    Tetragram.getAll = function () {
        return Tetragram.all;
    };
    return Tetragram;
}());

Tetragram.all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(function (num) {
    return new Tetragram(num);
});
//# sourceMappingURL=tetragram.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tetragramInfo; });
var tetragramInfo = [
    {
        key: 0,
        name: 'Via',
        translation: 'Way',
        desc: 'Injurious to the goodness of other figures generally, but good for journeys and voyages.',
        planet: 'Moon',
        element: 'Water',
        rules: [4],
        exalted: [2],
        fall: [8],
        detriment: [10],
        triplicity: [12],
        dots: 4,
        sign: 'Cancer',
        phrase: 'Activity',
        houseMeanings: [
            'Evil except for prison.',
            'Indifferent.',
            'Very good in all.',
            'Good in all save love.',
            'Voyages good.',
            'Evil.',
            'Rather good, especially for voyages.',
            'Evil.',
            'Indifferent. Good for journeys.',
            'Good.',
            'Very good.',
            'Excellent.'
        ]
    },
    {
        key: 1,
        name: 'Caput Draconis',
        translation: "Dragon's Head",
        desc: 'Good with good, evil with evil. Gives good issue for gain.',
        planet: 'Venus',
        element: 'Earth',
        rules: [2, 7, 9, 12],
        exalted: [12, 4],
        fall: [6, 10],
        detriment: [1, 8, 3, 6],
        triplicity: [],
        dots: 5,
        sign: 'Sagittarius',
        phrase: 'Preparation',
        houseMeanings: [
            'Good in all things',
            'Good.',
            'Very good.',
            'Good save in war.',
            'Very good.',
            'Good for immorality only.',
            'Good especially for peace.',
            'Good.',
            'Very good.',
            'Good in all.',
            'Good for the church and ecclesiastical gain.',
            'Not very good.'
        ]
    },
    {
        key: 2,
        name: 'Puella',
        translation: 'Maid',
        desc: 'Good in all demands, especially in those things relating to women.',
        planet: 'Venus',
        element: 'Air',
        rules: [2, 7],
        exalted: [12],
        fall: [6],
        detriment: [1, 8],
        triplicity: [3, 11],
        dots: 5,
        sign: 'Libra',
        phrase: 'Harmony',
        houseMeanings: [
            'Good except in war.',
            'Very good.',
            'Good.',
            'Indifferent.',
            'Very good, but notice the aspects.',
            'Good, but especially for debauchery.',
            'Good except for war.',
            'Good.',
            'Good for music. Otherwise only medium.',
            'Good for peace.',
            'Good, and love of ladies.',
            'Good in all.'
        ]
    },
    {
        key: 3,
        name: 'Fortuna Major',
        translation: 'Greater Fortune',
        desc: 'Good for gain in all things where a person has hopes to win.',
        planet: 'Sun',
        element: 'Fire',
        rules: [5],
        exalted: [1],
        fall: [7],
        detriment: [11],
        triplicity: [1, 9],
        dots: 6,
        sign: 'Leo',
        phrase: 'Lasting success',
        houseMeanings: [
            'Good save in secrecy.',
            'Good except in sad things.',
            'Good in all.',
            'Good in all, but melancholy.',
            'Very good in all things.',
            'Very good except for debauchery.',
            'Good in all.',
            'Moderately good.',
            'Very good.',
            'Exceedingly good. Go to superiors.',
            'Very good.',
            'Good in all.'
        ]
    },
    {
        key: 4,
        name: 'Puer',
        translation: 'Child',
        desc: 'Evil in most demands, except in those things relating to war or love.',
        planet: 'Mars',
        element: 'Fire',
        rules: [1, 8],
        exalted: [10],
        fall: [4],
        detriment: [2, 7],
        triplicity: [5, 9],
        dots: 5,
        sign: 'Aries',
        phrase: 'Intensity',
        houseMeanings: [
            'Indifferent. Best in war.',
            'Good, but with trouble.',
            'Good fortune.',
            'Evil, except in war and love.',
            'Medium good.',
            'Medium.',
            'Evil, save in war.',
            'Evil, save for love.',
            'Evil except for war.',
            'Rather evil. But good for love and war. Most other things medium.',
            'Medium; good favor.',
            'Very good in all.'
        ]
    },
    {
        key: 5,
        name: 'Acquisitio',
        translation: 'Gain',
        desc: 'Generally good for profit and gain.',
        planet: 'Jupiter',
        element: 'Fire',
        rules: [9, 12],
        exalted: [4],
        fall: [10],
        detriment: [3, 6],
        triplicity: [1, 5],
        dots: 6,
        sign: 'Sagittarius',
        phrase: 'Acquisition',
        houseMeanings: [
            'Happy, success in all things.',
            'Very prosperous.',
            'Favor and riches.',
            'Good fortune and success.',
            'Good success.',
            'Good–especially if it agrees with the fifth.',
            'Reasonably good.',
            'Rather good, but not very. The sick shall die.',
            'Good in all demands.',
            'Good in suits.',
            'Good in all.',
            'Evil, pain and loss.'
        ]
    },
    {
        key: 6,
        name: 'Carcer',
        translation: 'Prison',
        desc: 'Generally evil. Delay, binding, bar, restriction.',
        planet: 'Saturn',
        element: 'Earth',
        rules: [10, 11],
        exalted: [7],
        fall: [1],
        detriment: [4, 5],
        triplicity: [2, 6],
        dots: 6,
        sign: "Capricorn",
        phrase: 'Limitation',
        houseMeanings: [
            'Evil except to fortify a place.',
            'Good in Saturnine questions; else evil.',
            'Evil.',
            'Good only for melancholy.',
            'Receive a letter within three days. Evil.',
            'Very evil.',
            'Evil.',
            'Very evil.',
            'Evil in all.',
            'Evil save in hidden treasure.',
            'Much anxiety.',
            'Rather good.'
        ]
    },
    {
        key: 7,
        name: 'Tristitia',
        translation: 'Sorrow',
        desc: 'Evil in almost all things.',
        planet: 'Saturn',
        element: 'Air',
        rules: [10, 11],
        exalted: [7],
        fall: [1],
        detriment: [4, 5],
        triplicity: [3, 7],
        dots: 7,
        sign: 'Aquarius',
        phrase: 'Melancholy',
        houseMeanings: [
            'Medium, but good for treasure and fortifying.',
            'Medium, but good to fortify.',
            'Evil in all.',
            'Evil in all.',
            'Very evil.',
            'Evil, except for debauchery.',
            'Evil for inheritance and magic only.',
            'Evil, but in secrecy good.',
            'Evil except for magic.',
            'Evil except for fortifications.',
            'Evil in all.',
            'Evil, but good for magic and treasure.'
        ]
    },
    {
        key: 8,
        name: 'Cauda Draconis',
        translation: "Dragon's Tail",
        desc: 'Good with evil, and evil with good. Good for loss, and for passing out of an affair.',
        planet: 'Mars',
        element: 'Fire',
        rules: [8, 10, 11],
        exalted: [10, 7],
        fall: [4, 1],
        detriment: [2, 7, 4, 5],
        triplicity: [],
        dots: 5,
        sign: 'Virgo',
        phrase: 'An ending',
        houseMeanings: [
            'Destroy figure if it falls here! Makes judgment worthless.',
            'Very evil.',
            'Evil in all.',
            'Good especially for conclusion of the matter.',
            'Very evil.',
            'Rather good.',
            'Evil, war, and fire.',
            'No good, except for magic.',
            'Good for science only. Bad for journeys. Robbery.',
            'Evil save in works of fire.',
            'Evil save for favors.',
            'Rather good.',
        ]
    },
    {
        key: 9,
        name: 'Conjunctio',
        translation: 'Connection',
        desc: 'Good with good, or evil with evil. Recovery from things lost.',
        planet: 'Mercury',
        element: 'Earth',
        rules: [3, 6],
        exalted: [11],
        fall: [5],
        detriment: [9, 12],
        triplicity: [2, 10],
        dots: 6,
        sign: 'Virgo',
        phrase: 'Combination',
        houseMeanings: [
            'Good with good, evil with evil.',
            'Commonly good.',
            'Good fortune.',
            'Good save for health; see the eighth.',
            'Medium',
            'Good for immorality only.',
            'Rather good.',
            'Evil, death.',
            'Medium good.',
            'For love, good. For sickness, evil.',
            'Good in all.',
            'Medium. Bad for prisoners.'
        ]
    },
    {
        key: 10,
        name: 'Amissio',
        translation: 'Loss',
        desc: 'Good for loss of substance and sometimes for love, but very bad for gain.',
        planet: 'Venus',
        element: 'Earth',
        rules: [2, 7],
        exalted: [12],
        fall: [6],
        detriment: [1, 8],
        triplicity: [10],
        dots: 6,
        sign: 'Taurus',
        phrase: 'Sacrifice',
        houseMeanings: [
            'Ill in all things but for prisoners.',
            'Very ill for money, but good for love.',
            'Ill end–except for quarrels.',
            'Ill in all.',
            'Evil except for agriculture.',
            'Rather evil for love.',
            'Very good for love, otherwise evil.',
            'Excellent in all questions.',
            'Evil in all things.',
            'Evil except for favor with women.',
            'Good for love, otherwise bad.',
            'Evil in all things.'
        ]
    },
    {
        key: 11,
        name: 'Albus',
        translation: 'White',
        desc: 'Good for profit and for entering into a place or undertaking.',
        planet: 'Mercury',
        element: 'Air',
        rules: [3, 6],
        exalted: [11],
        fall: [5],
        detriment: [9, 12],
        triplicity: [7, 11],
        dots: 7,
        sign: 'Gemini',
        phrase: 'Wisdom',
        houseMeanings: [
            'Good for marriage. Mercurial. Peace.',
            'Good in all.',
            'Very good.',
            'Very good except in war.',
            'Good.',
            'Good in all things.',
            'Good except in all things.',
            'Good.',
            'A messenger brings a letter.',
            'Excellent in all.',
            'Very good.',
            'Marvelously good.'
        ]
    },
    {
        key: 12,
        name: 'Fortuna Minor',
        translation: 'Lesser Fortune',
        desc: 'Good in any manner in which a person wishes to proceed quickly.',
        planet: 'Sun',
        element: 'Fire',
        rules: [5],
        exalted: [1],
        fall: [7],
        detriment: [11],
        triplicity: [1, 9],
        dots: 6,
        sign: 'Leo',
        phrase: 'Temporary success',
        houseMeanings: [
            'Speed in victory and in love, but choleric.',
            'Very good.',
            'Good–but wrathful.',
            'Haste; rather evil except for peace.',
            'Good in all things.',
            'Medium in all.',
            'Evil except for war or love.',
            'Evil generally.',
            'Good, but choleric.',
            'Good, except for peace.',
            'Good, especially for love.',
            'Good, except for alternation, or for serving another.'
        ]
    },
    {
        key: 13,
        name: 'Rubeus',
        translation: 'Red',
        desc: 'Evil in all that is good and good in all that is evil.',
        planet: 'Mars',
        element: 'Water',
        rules: [1, 8],
        exalted: [10],
        fall: [4],
        detriment: [2, 7],
        triplicity: [12],
        dots: 7,
        sign: 'Scorpio',
        phrase: 'Toxicity',
        houseMeanings: [
            'Destroy the figure if it falls here! It makes the judgement worthless.',
            'Evil in all demands.',
            'Evil except to let blood.',
            'Evil except in war and Fire.',
            'Evil save for love, and sowing seed.',
            'Evil except for bloodletting.',
            'Evil except for war and fire.',
            'Evil.',
            'Very evil.',
            'Dissolute. Love, fire.',
            'Evil, except to let blood.',
            'Evil in all things.'
        ]
    },
    {
        key: 14,
        name: 'Laetitia',
        translation: 'Joy',
        desc: 'Good for joy, present or to come.',
        planet: 'Jupiter',
        element: 'Water',
        rules: [9, 12],
        exalted: [4],
        fall: [10],
        detriment: [3, 6],
        triplicity: [4, 8],
        dots: 7,
        sign: 'Pisces',
        phrase: 'Happiness',
        houseMeanings: [
            'Good, except in war.',
            'Sickly.',
            'Ill.',
            'Mainly good.',
            'Excellently good.',
            'Evil generally.',
            'Indifferent.',
            'Evil generally.',
            'Very good.',
            'Good, rather in war than in peace.',
            'Good in all.',
            'Evil generally.'
        ]
    },
    {
        key: 15,
        name: 'Populus',
        translation: 'People',
        desc: 'Sometimes good and sometimes bad; good with good, and evil with evil.',
        planet: 'Moon',
        element: 'Water',
        rules: [4],
        exalted: [2],
        fall: [8],
        detriment: [10],
        triplicity: [12],
        dots: 8,
        sign: 'Cancer',
        phrase: 'Passivity',
        houseMeanings: [
            'Good in marriages.',
            'Medium good.',
            'Rather good than bad.',
            'Good in all but love.',
            'Good in most things.',
            'Good.',
            'In war good; else medium.',
            'Evil.',
            'Look for letters.',
            'Good.',
            'Good in all.',
            'Very evil.'
        ]
    }
];
//# sourceMappingURL=tetragram.info.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return houseInfo; });
var houseInfo = [
    {
        number: 1,
        title: 'Self',
        description: '',
        phrase: 'yourself',
        sign: 'Aries',
        topics: ['Self', 'Life', 'Health', 'First Impressions']
    },
    {
        number: 2,
        title: 'Resources',
        description: '',
        phrase: 'wealth',
        sign: 'Taurus',
        topics: ['Wealth', 'Resources', 'Self-esteem', 'Survival']
    },
    {
        number: 3,
        title: 'Communication',
        description: '',
        phrase: 'perception',
        sign: 'Gemini',
        topics: ['Siblings', 'Friends', 'Short Journeys', 'Traffic']
    },
    {
        number: 4,
        title: 'Home and Family',
        description: '',
        phrase: 'your home',
        sign: 'Cancer',
        topics: ['Family', 'Inheritence', 'Home', 'Mother']
    },
    {
        number: 5,
        title: 'Pleasure and Creativity',
        description: '',
        phrase: 'creativity',
        sign: 'Leo',
        topics: ['Children', 'Romance', 'Gambling', 'Love']
    },
    {
        number: 6,
        title: 'Work and Service',
        description: '',
        phrase: 'daily work',
        sign: 'Virgo',
        topics: ['Work', 'Habits', 'Service', 'Illness']
    },
    {
        number: 7,
        title: 'Partnership',
        description: '',
        phrase: 'partnerships',
        sign: 'Libra',
        topics: ['Marriage', 'Partnerships', 'Enemies (Public)', 'Negotiation']
    },
    {
        number: 8,
        title: 'Power and the Psyche',
        description: '',
        phrase: 'power',
        sign: 'Scorpio',
        topics: ['Deaths', 'Occult Abilities', 'Sex', 'Inheritance']
    },
    {
        number: 9,
        title: 'Philosophy and Education',
        description: '',
        phrase: 'education',
        sign: 'Sagittarius',
        topics: ['Long Journeys', 'Religion', 'Education', 'Philosophy']
    },
    {
        number: 10,
        title: 'Career and Public Life',
        description: '',
        phrase: 'career',
        sign: 'Capricorn',
        topics: ['Fame', 'Business', 'Reputation', 'Father']
    },
    {
        number: 11,
        title: 'the World',
        description: '',
        phrase: 'the world',
        sign: 'Aquarius',
        topics: ['Society', 'Hopes', 'Humanity', 'Social Media']
    },
    {
        number: 12,
        title: 'Spirituality',
        description: '',
        phrase: 'spirituality',
        sign: 'Pisces',
        topics: ['Spirituality', 'Sacrifice', 'Enemies (Secret)', 'The Unknown']
    }
];
//# sourceMappingURL=house.info.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_house_info__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_tetragram__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewPage = (function () {
    function NewPage(navCtrl, modCtrl, loadingCtrl, storage, alertCtrl, actionCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.modCtrl = modCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.actionCtrl = actionCtrl;
        this.formBuilder = formBuilder;
        this.startDisabled = false;
        this.readingType = 'automatic';
        this.question = '';
        this.topic = '';
        this.row = {};
        // load topics
        var nestedTopics = __WEBPACK_IMPORTED_MODULE_3__models_house_info__["a" /* houseInfo */].map(function (house) { return house.topics; });
        this.topics = [].concat.apply([], nestedTopics);
        this.topics.sort();
        this.topics.unshift('None');
        // set 'None' as default topic
        this.topic = this.topics[0];
        // create tips
        this.tips = [
            'Ask a yes or no question for the most accurate results.',
            'Choose a question that you feel strongly about for the most meaningful insights.',
            'Leave the question and topic blank if you feel like it. All you need to do is click "create."',
            'Manually generate the numbers to create a more powerful divination.',
            'All of your readings are kept 100% private. Nobody can see them but you.',
        ];
        // manual
        this.manualForm = formBuilder.group({
            row_1: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_2: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_3: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_4: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_5: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_6: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_7: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_8: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_9: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_10: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_11: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_12: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_13: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_14: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_15: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            row_16: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required]
        });
    }
    NewPage.prototype.createReading = function () {
        var _this = this;
        this.startDisabled = true;
        var readingData;
        if (this.topic == 'None') {
            this.topic = '';
        }
        // generate data for automatic readings
        if (this.readingType == 'automatic') {
            readingData = {
                question: this.question,
                topic: this.topic,
                date: Date.now(),
                key0: Math.floor(Math.random() * 15),
                key1: Math.floor(Math.random() * 15),
                key2: Math.floor(Math.random() * 15),
                key3: Math.floor(Math.random() * 15)
            };
        }
        // generate data for manual readings
        if (this.readingType == 'manual') {
            var row = this.row;
            readingData = {
                question: this.question,
                topic: this.topic,
                date: Date.now(),
                key0: __WEBPACK_IMPORTED_MODULE_4__models_tetragram__["a" /* Tetragram */].generateKey(row[1], row[2], row[3], row[4]),
                key1: __WEBPACK_IMPORTED_MODULE_4__models_tetragram__["a" /* Tetragram */].generateKey(row[5], row[6], row[7], row[8]),
                key2: __WEBPACK_IMPORTED_MODULE_4__models_tetragram__["a" /* Tetragram */].generateKey(row[9], row[10], row[11], row[12]),
                key3: __WEBPACK_IMPORTED_MODULE_4__models_tetragram__["a" /* Tetragram */].generateKey(row[13], row[14], row[15], row[16])
            };
        }
        // clear manual data
        Object.keys(this.row).forEach(function (r) {
            _this.row[r] = '';
        });
        // reset inputs
        this.question = '';
        this.topic = 'None';
        this.startDisabled = false;
        this.navCtrl.push('ReadingPage', {
            question: readingData.question,
            topic: readingData.topic,
            date: readingData.date,
            key0: readingData.key0,
            key1: readingData.key1,
            key2: readingData.key2,
            key3: readingData.key3
        });
    };
    NewPage.prototype.showMore = function () {
        var _this = this;
        var actionSheet = this.actionCtrl.create({
            title: 'More',
            buttons: [
                {
                    text: 'Load Reading',
                    handler: function () {
                        _this.navCtrl.push('HistoryPage');
                    }
                },
                /*{
                  text: 'Show Introduction',
                  handler: () => {
                    let introMod = this.modCtrl.create('TutorialPage')
                    introMod.present()
                  }
                },*/
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    return NewPage;
}());
NewPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-new',template:/*ion-inline-start:"/Users/adam/AppGod/geomancy/src/pages/new/new.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Geomancy</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showMore()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div padding-vertical>\n    <ion-segment [(ngModel)]="readingType">\n      <ion-segment-button value="automatic">Automatic</ion-segment-button>\n      <ion-segment-button value="manual">Manual</ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <ion-list no-lines>\n\n    <ion-item padding>\n      <ion-label stacked>Question</ion-label>\n      <ion-textarea [(ngModel)]="question" rows="3"\n        placeholder="Enter question here (optional)"></ion-textarea>\n    </ion-item>\n\n    <ion-item padding>\n      <ion-label>Topic</ion-label>\n      <ion-select [(ngModel)]="topic">\n        <ion-option\n          [selected]="t == topic"\n          [value]="t"\n          *ngFor="let t of topics">\n          {{t}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n\n  <p class="instructions" padding-vertical *ngIf="readingType == \'manual\'">\n    Make 16 rows of a random number of dots on the ground or on a piece of paper. Then, enter the number of dots in each row below.\n  </p>\n\n  <ion-list *ngIf="readingType == \'manual\'" no-lines>\n\n    <form [formGroup]="manualForm">\n\n      <ion-item *ngFor="let num of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]">\n\n        <ion-label fixed>Row {{num}}</ion-label>\n\n        <ion-input [formControlName]="\'row_\' + num" type="number" [(ngModel)]="row[num]"></ion-input>\n\n      </ion-item>\n\n    </form>\n  </ion-list>\n\n  <p *ngIf="readingType == \'manual\' && !manualForm.valid" class="instructions">\n    You must enter a number into each row before proceeding.\n  </p>\n\n  <button ion-button block large\n    *ngIf="readingType == \'manual\'"\n    color="primary"\n    (tap)="createReading()"\n    [disabled]="startDisabled || !manualForm.valid">\n    Create Reading\n  </button>\n\n  <button ion-button block large\n    *ngIf="readingType == \'automatic\'"\n    color="primary"\n    (tap)="createReading()"\n    [disabled]="startDisabled">\n    Create Reading\n  </button>\n\n  <div class="tips" *ngIf="readingType == \'automatic\'">\n    Some tips:\n    <ul>\n      <li *ngFor="let tip of tips">{{tip}}</li>\n    </ul>\n  </div>\n\n  <br>\n\n</ion-content>\n'/*ion-inline-end:"/Users/adam/AppGod/geomancy/src/pages/new/new.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */]])
], NewPage);

//# sourceMappingURL=new.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map