angular.module('selander.li.components.experience.controller', [
    'selander.li.app.service'
])

.controller("experienceController", function(appService: AppServiceInterface, $scope: ng.IScope){
	var vm = this;

	appService.meta.location = 'experience';
});