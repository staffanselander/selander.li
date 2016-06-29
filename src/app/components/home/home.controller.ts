export default angular.module('selander.li.components.home.controller', [
    'selander.li.app.service'
])

.controller("homeController", function(appService: AppServiceInterface, $scope: ng.IScope){
	var vm = this;

	appService.meta.location = 'home';
})

;