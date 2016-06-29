"use strict";
require('angular-strap');
require('angular-scroll');
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
