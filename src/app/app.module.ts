import 'angular-route';
import 'angular-animate';

import 'App/app.controller';

import 'App/shared/navbar/navbar.component';

import 'App/components/home/home.controller';
import 'App/components/skills/skills.controller';
import 'App/components/experience/experience.controller';


angular.module("selander.li", [
    'ngRoute',
    'ngAnimate',
    'selander.li.app.controller',
    'selander.li.shared.navbar.component',
    'selander.li.components.home.controller',
    'selander.li.components.skills.controller',
    'selander.li.components.experience.controller'
], function() {

})

.config(function($routeProvider, $locationProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled = false;

    $locationProvider.html5Mode(true);

    $routeProvider

    .when('/skills',
    {
        templateUrl: 'app/components/skills/skills.tpl.html',
        controller: 'skillsController',
        controllerAs: 'vm'
    })

    .when('/experience',
    {
        templateUrl: 'app/components/experience/experience.tpl.html',
        controller: 'experienceController'
    })

    .when('/',
    {
        templateUrl: 'app/components/home/home.tpl.html',
        controller: 'homeController'
    })

    .otherwise(
    {
        redirectTo: '/'
    });

})

.run(function run($rootScope: ng.IRootScopeService) {

})

;