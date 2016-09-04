import { AppServiceInterface } from 'app/app.service.interface';

import 'app/app.service';

angular.module('selander.li.components.skills.controller', [
    'selander.li.app.service',
    'angular-scroll-animate',
    'angular-parallax',
    'countTo'
])

.controller("skillsController", function(appService: AppServiceInterface, $scope, $sce: ng.ISCEService, $timeout: ng.ITimeoutService){
	var vm = this;

	appService.meta.location = 'skills';

    $scope.releaseAnimation = function(element, scope) {
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
})

;
