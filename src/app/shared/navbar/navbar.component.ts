import 'App/shared/navbar/navbar.controller';

angular.module('selander.li.shared.navbar.component', [
    'selander.li.shared.navbar.controller'
])

.component('navbar', {
	templateUrl: 	'app/shared/navbar/navbar.tpl.html',
    controller:     'navbarController',
	controllerAs: 	'navbar'
})

;
