import * as angular from 'angular';
import 'app/app.module';
import 'styles/main.scss';


angular.element(document).ready(function() {
    angular.bootstrap(document.documentElement, ['selander.li']);
});