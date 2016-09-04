import 'angular-route';
import 'angular-animate';

import 'app/app.controller';

import 'app/shared/navbar/navbar.component';

import 'app/components/home/home.controller';
import 'app/components/skills/skills.controller';
import 'app/components/experience/experience.controller';

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
        template:    require('./components/skills/skills.html'),
        controller: 'skillsController',
        controllerAs: 'vm'
    })

    .when('/experience',
    {
        template:    require('./components/experience/experience.tpl.html'),
        controller: 'experienceController'
    })

    .when('/',
    {
        template:    require('./components/home/home.tpl.html'),
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