import 'app/shared/navbar/navbar.controller';

angular.module('selander.li.shared.navbar.component', [
    'selander.li.shared.navbar.controller'
])

.component('navbar', {
	template: 	    require('./navbar.html'),
    controller:     'navbarController',
	controllerAs: 	'navbar'
})

;
    