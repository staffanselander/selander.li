import { AppServiceInterface } from 'app/app.service.interface';


import 'angular-strap';
import 'angular-scroll';

angular.module('selander.li.shared.navbar.controller', [
    'mgcrea.ngStrap.helpers.debounce',
    'mgcrea.ngStrap.helpers.dimensions',
    'mgcrea.ngStrap.affix',
    'duScroll'
])
.controller('navbarController', function(appService: AppServiceInterface, $scope: ng.IScope, $document) {
    var vm = this;

    vm.meta = appService.meta;

    active();

    ////////

    function active() {

    }

    vm.scrollTop = function() {
        $document.scrollTopAnimated(0, 600).then(function() {
            
        });
    };
})

;
