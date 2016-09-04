var ac_main =
webpackJsonpac__name_([2,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular = __webpack_require__(2);
	__webpack_require__(8);
	__webpack_require__(14);
	angular.element(document).ready(function () {
	    angular.bootstrap(document.documentElement, ['selander.li']);
	});
	

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	angular.module('selander.li.app.service', [])
	    .factory('appService', function () {
	    return {
	        meta: {
	            location: 'home'
	        }
	    };
	});
	

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = angular.module('selander.li.app.controller', [
	    'selander.li.app.service',
	])
	    .controller("appController", function (appService, $scope) {
	    var vm = this;
	    vm.meta = appService.meta;
	});
	

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(4);
	__webpack_require__(3);
	__webpack_require__(7);
	__webpack_require__(12);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(9);
	angular.module("selander.li", [
	    'ngRoute',
	    'ngAnimate',
	    'selander.li.app.controller',
	    'selander.li.shared.navbar.component',
	    'selander.li.components.home.controller',
	    'selander.li.components.skills.controller',
	    'selander.li.components.experience.controller'
	], function () {
	})
	    .config(function ($routeProvider, $locationProvider, $compileProvider) {
	    $compileProvider.debugInfoEnabled = false;
	    $locationProvider.html5Mode(true);
	    $routeProvider
	        .when('/skills', {
	        template: __webpack_require__(17),
	        controller: 'skillsController',
	        controllerAs: 'vm'
	    })
	        .when('/experience', {
	        template: __webpack_require__(15),
	        controller: 'experienceController'
	    })
	        .when('/', {
	        template: __webpack_require__(16),
	        controller: 'homeController'
	    })
	        .otherwise({
	        redirectTo: '/'
	    });
	})
	    .run(function run($rootScope) {
	});
	

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	angular.module('selander.li.components.experience.controller', [
	    'selander.li.app.service'
	])
	    .controller("experienceController", function (appService, $scope) {
	    var vm = this;
	    appService.meta.location = 'experience';
	});
	

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = angular.module('selander.li.components.home.controller', [
	    'selander.li.app.service'
	])
	    .controller("homeController", function (appService, $scope) {
	    var vm = this;
	    appService.meta.location = 'home';
	});
	

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	angular.module('selander.li.components.skills.controller', [
	    'selander.li.app.service',
	    'angular-scroll-animate',
	    'angular-parallax',
	    'countTo'
	])
	    .controller("skillsController", function (appService, $scope, $sce, $timeout) {
	    var vm = this;
	    appService.meta.location = 'skills';
	    $scope.releaseAnimation = function (element, scope) {
	        var resource = scope.$parent.resource;
	        if (!resource.showFlow) {
	            resource.countTo = resource.percentage;
	            resource.showFlow = true;
	            $scope.$apply();
	        }
	    };
	    vm.sections = [
	        {
	            title: 'Collaboration & Enviroment',
	            content: $sce.trustAsHtml([
	                "<h3>Fundamental</h3>",
	                "<p>Good collaboration creates success. Following standards and working togheter is key. Being consistent in a team avoids confusion when working togheter.<br>",
	                "<strong>Git</strong> <small>(Code | Version management)</small> and <strong>Docker</strong> <small>(Enviroment management)</small> are great tools in team development.",
	                "</p>",
	                "<p>Somebody once said, if you do something more than 10 times. Automate it. You should, automating takes almost no time using <strong>Gulp</strong> or <strong>Grunt</strong></p>"
	            ].join('')),
	            resources: [
	                {
	                    title: 'git',
	                    image: 'git.png',
	                    percentage: 100,
	                    countFrom: 0,
	                    countTo: 0,
	                    showFlow: false
	                },
	                {
	                    title: 'docker',
	                    image: 'docker.png',
	                    percentage: 85,
	                    countFrom: 0,
	                    countTo: 0,
	                    showFlow: false
	                },
	                {
	                    title: 'docker',
	                    image: 'gulp-and-grunt.png',
	                    percentage: 85,
	                    countFrom: 0,
	                    countTo: 0,
	                    showFlow: false
	                }
	            ]
	        },
	        {
	            title: 'Back-end',
	            content: $sce.trustAsHtml(["<h3>PHP Lover, no fanboy</h3>",
	                "<p><strong>PHP</strong> is surely a favorite. It's still evolving and becoming something better. It's great for small applications but also have shown to be really stable and scalable aswell. Like <strong>Hungrig.se's</strong> backend for example.</p>",
	                "<p><strong>Node.js</strong> is a strong competetor today. Building desktop applications have gotten easy using <strong>Electron</strong>. Setting up development tasks is a breath, Node.js could easily scale with the help of <strong>TypeScript</strong>.</p>"].join('')),
	            resources: [
	                {
	                    title: 'php',
	                    image: 'php.png',
	                    percentage: 100,
	                    countFrom: 0,
	                    countTo: 0,
	                    showFlow: false
	                },
	                {
	                    title: 'laravel',
	                    image: 'laravel.png',
	                    percentage: 90,
	                    countFrom: 0,
	                    countTo: 0,
	                    showFlow: false
	                },
	                {
	                    title: 'nodejs',
	                    image: 'nodejs.png',
	                    percentage: 70,
	                    countFrom: 0,
	                    countTo: 0,
	                    showFlow: false
	                }
	            ]
	        },
	        {
	            title: 'Front-end',
	            content: $sce.trustAsHtml(["<h3>Look & Feel</h3>",
	                "<p>Javascript has taken off, especially in the webs front-end area. Writing applications with <strong>Angular</strong> is a breeze. Of all the frameworks like <strong>Vue.js</strong>, <strong>Backbone</strong>, <strong>Ember</strong> <strong>Angular</strong> fits my way of developing. With <strong>Angular2</strong> and <strong>TypeScript</strong> principles like <strong>SOLID</strong> are easier to follow. Which is great!</p>",
	                "<p>Knowing a-lot of frameworks isn't everything. Being comfortable using tools like <strong>Photoshop</strong> & <strong>Sketch</strong> is necessary when working close to a designer.</p>"].join('')),
	            resources: [
	                {
	                    title: 'angular',
	                    image: 'angular.png',
	                    percentage: 90,
	                    countFrom: 0,
	                    countTo: 0,
	                    showFlow: false
	                },
	                {
	                    title: 'jQuery',
	                    image: 'jquery.png',
	                    percentage: 100,
	                    countFrom: 0,
	                    countTo: 0,
	                    showFlow: false
	                },
	                {
	                    title: 'photoshop',
	                    image: 'photoshop.png',
	                    percentage: 75,
	                    countFrom: 0,
	                    countTo: 0,
	                    showFlow: false
	                }
	            ]
	        }
	    ];
	});
	

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(13);
	angular.module('selander.li.shared.navbar.component', [
	    'selander.li.shared.navbar.controller'
	])
	    .component('navbar', {
	    template: __webpack_require__(18),
	    controller: 'navbarController',
	    controllerAs: 'navbar'
	});
	

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	__webpack_require__(5);
	angular.module('selander.li.shared.navbar.controller', [
	    'mgcrea.ngStrap.helpers.debounce',
	    'mgcrea.ngStrap.helpers.dimensions',
	    'mgcrea.ngStrap.affix',
	    'duScroll'
	])
	    .controller('navbarController', function (appService, $scope, $document) {
	    var vm = this;
	    vm.meta = appService.meta;
	    active();
	    ////////
	    function active() {
	    }
	    vm.scrollTop = function () {
	        $document.scrollTopAnimated(0, 600).then(function () {
	        });
	    };
	});
	

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"experience\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t\t<div class=\"fullout-container\">\n\t\t\t\t<h2 class=\"fillouts-heading\">Current occupation</h2>\n\t\t\t\t<div class=\"fillouts\">\n\t\t\t\t\t<div class=\"fillout\">\n\t\t\t\t\t\t<a href=\"http://restaurangonline.se\">\n\t\t\t\t\t\t\t<img src=\"public/img/restaurangonline-logo.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<p class=\"text\">RestaurangOnline</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"fillout\">\n\t\t\t\t\t\t<a href=\"http://hungrig.se\">\n\t\t\t\t\t\t\t<img src=\"public/img/hungrig-logo.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<p class=\"text\">Hungrig.se</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tHungrig.se is developed by the RestaurangOnline team. RestaurangOnline and Hungrig.se is the solution for food delivery and takeaway. I joined this magnificant team 2014.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"col-md-6\">\n\t\t\t<div class=\"fillout-container\">\n\t\t\t\t<h2 class=\"fillouts-heading\">Private projects</h2>\n\t\t\t\t<div class=\"fillouts\">\n\t\t\t\t\t<div class=\"fillout\">\n\t\t\t\t\t\t<a href=\"http://restaurangonline.se\">\n\t\t\t\t\t\t\t<img src=\"public/img/ratchet-logo.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<p class=\"text\">Ratchet<span>Webdesign</span></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRatchet is websockets for PHP. I made the coding & design for the website.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\t</div>\n</div>"

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<h1>A GENTLE INTRODUCTION</h1>\n<p>I'm a full stack webdeveloper, No fuzz</p>\n<p>You probably need me.</p>"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container-fluid main-heading\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 text-center\">\n\t\t\t<h1>Full stack &lt;/<span>dev</span>&gt;eloper</h1>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container-fluid this-is-me\">\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 text-center\">\n\t\t\t<img src=\"public/img/selfies.png\" class=\"selfie\">\n\t\t\t<h2>Hello!</h2>\n            <p class=\"header-paragraph\">I’m <strong>Staffan Selander</strong>.<br><small><a href=\"mailto:staffan@selander.mobi\" class=\"email\">staffan@selander.mobi</a></small></p>\n\t\t</div>\n\t</div>\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <p>A full stack developer of the web and the internet of things!<br>\n            Writing code, developing new designs, backend or frontend, at the office or in the shower</p>\n            <p>My main focus is webdevelopment. But I also have Cisco diplomas in networking.</p>\n        </div>\n        <div class=\"col-md-6\">\n            <p>\n            My strength lies in writing backends preferably with PHP. Also very good with Javascript for the front-end.</p>\n            <p>There are many frameworks & languages to mention. It's important to know what tool is the right one for the Job.</p>\n        </div>\n    </div>\n\n    <div class=\"header-seperator\"></div>\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n            <p>I have taken out some of the web technologies I use and I think should be in the spotlight and put them below!<br>\n            There are so many technologies, but let's just pick a few!</p>\n        </div>\n    </div>\n\n    <br><br>\n\n    <div ng-repeat=\"section in vm.sections\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 text-center\">\n                <h2 class=\"section-header\">{{ section.title }}</h2>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"hidden-xs col-sm-6 col-md-6 col-lg-6\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12\" ng-bind-html=\"section.content\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5 col-sm-offset-1 col-md-offset-1 col-lg-offset-1\">\n                <div class=\"chart-wrapper\" ng-repeat=\"resource in section.resources\">\n                    <div class=\"chart-image-wrapper\">\n                        <img ng-src=\"{{'public/img/components/skills/' + resource.image}}\">\n                    </div>\n                    <div class=\"chart-tile-wrapper\">\n                        <div class=\"chart-tile\">\n                            <div class=\"chart-tile-fillout hold-animation\" ng-class=\"{ 'hold-animation': !resource.showFlow }\" when-visible=\"releaseAnimation\" ng-style=\"{ 'width': resource.percentage + '%' }\">\n                                <span>\n                                    <span value=\"{{ resource.countFrom }}\" count-to=\"{{resource.countTo}}\" duration=\"2\">{{ resource.percentage }}</span>\n                                    <span>%</span>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-xs-12 hidden-sm hidden-md hidden-lg\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12\" ng-bind-html=\"section.content\">\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"row\" ng-if=\"$index !== vm.sections.length - 1\">\n            <div class=\"col-xs-12\">\n                <hr class=\"section-seperator\">\n            </div>\n        </div>\n\n    </div>\n\n</div>\n<div class=\"work-section restaurang-online\" parallax-background parallax-ratio=\"-.8\" >\n    <div class=\"work-section-inner-wrapper\">\n        <div class=\"container this-is-me\">\n            <h2 class=\"text-center\">Current work: Restaurang Online</h2>\n\n            <div class=\"icons-container text-center\">\n                <a href=\"http://hungrig.se\">\n                    <img src=\"/public/img/hungrig-logo.png\">\n                </a>\n                <a href=\"http://restaurangonline.se\">\n                    <img src=\"/public/img/restaurangonline-logo.png\">\n                </a>\n            </div>\n\n            <p><strong>RestaurangOnline</strong> is a IT company with clients/restaurants all over Sweden.<br>\n            The company's goal is to setup and manage a food-delivery system for restaurants<br>\n            <br>\n            My main objective at the company is developing and maintaining the systems for <strong>350+ restaurant</strong>. Which includes food-delivery, giftcards, table-reservations, events, and smartphone applications using all tools necessary. <br>\n            <br>\n            Behind the scenes im also working close to the other team-members, developing <strong>Hungrig.se</strong>, it's <strong>API</strong> and <strong>RestaurangOnline's CMS</strong>. Meanwhile i'm also responsible for the team's <strong>development environment</strong> with the help of Docker.</p>\n        <p><strong>2014 - now</strong></p>\n        </div>\n    </div>\n</div>\n\n<div class=\"footer\">Designed & Developed by <strong>@staffanselander</strong></div>"

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div class=\"navigation-wrapper\" ng-class=\"{ 'blob-active': navbar.expandBlob}\" data-offset-top=\"10\" bs-affix>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <h1><a href=\"/\" ng-click=\"navbar.scrollTop()\">Staffan Selander .li</a></h1>\n                <div class=\"navigation-blob-wrapper\" ng-class=\"{ 'active': navbar.expandBlob}\">\n                    <div class=\"navigation-blob\" ng-click=\"navbar.expandBlob = !navbar.expandBlob\">\n                        <span></span>\n                        <span></span>\n                        <span></span>\n                    </div>\n                    <div class=\"icons-wrapper\" ng-click=\"navbar.expandBlob = false\">\n                        <a href=\"/\" ng-click=\"navbar.scrollTop()\" ng-class=\"{ 'selected': navbar.meta.location === 'home' }\">\n                            <i class=\"fa fa-home\"></i>\n                        </a>\n                        <a href=\"experience\" ng-click=\"navbar.scrollTop()\" ng-class=\"{ 'selected': navbar.meta.location === 'experience' }\">\n                            <i class=\"fa fa-bookmark\"></i>\n                        </a>\n                        <a href=\"skills\" ng-class=\"{ 'selected': navbar.meta.location === 'skills' }\">\n                            <i class=\"fa fa-user\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }
]);
//# sourceMappingURL=main.map