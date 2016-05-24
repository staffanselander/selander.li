angular.module('selander.li.components.experience.controller', [
    'selander.li.app.service'
])

.controller("experienceController", function(appService, $scope){
	var vm = this;

	appService.meta.location = 'experience';
});