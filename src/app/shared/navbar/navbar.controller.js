angular.module('selander.li.shared.navbar.controller', [
    'mgcrea.ngStrap.helpers.debounce',
    'mgcrea.ngStrap.helpers.dimensions',
    'mgcrea.ngStrap.affix',
    'duScroll'
])
.controller('navbarController', function($document) {
    var vm = this;


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
