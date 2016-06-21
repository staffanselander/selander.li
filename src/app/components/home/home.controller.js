angular.module('selander.li.components.home.controller', [
    'selander.li.app.service'
])
    .controller("homeController", function (appService, $scope) {
    var vm = this;
    appService.meta.location = 'home';
});
