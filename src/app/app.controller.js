"use strict";
require('App/app.service');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('selander.li.app.controller', [
    'selander.li.app.service',
])
    .controller("appController", function (appService, $scope) {
    var vm = this;
    vm.meta = appService.meta;
});
