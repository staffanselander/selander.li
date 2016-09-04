import { AppServiceInterface } from 'app/app.service.interface';

import 'app/app.service';

export default angular.module('selander.li.app.controller', [
    'selander.li.app.service',
])

.controller("appController", function(appService: AppServiceInterface, $scope: ng.IScope) {
    var vm = this;

    vm.meta = appService.meta;
})

;