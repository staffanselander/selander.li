(function(global) {

    var config = {

        map: {
            'App': 'app',
            'angular': 'node_modules/angular/angular.js',
            'angular-animate': 'node_modules/angular-animate/angular-animate.min.js',
            'angular-route': 'node_modules/angular-route/angular-route.min.js',
            'angular-strap': 'node_modules/angular-strap/dist/angular-strap.js',
            'angular-scroll': 'node_modules/angular-scroll/angular-scroll.js',
            'angular-scroll-animate': 'node_modules/angular-scroll-animate/dist/angular-scroll-animate.js',
            'angular-parallax': 'node_modules/angular-parallax/scripts/angular-parallax.js',
            'angular-count-to': 'node_modules/angular-count-to/src/count-to.js'
        },

        packages: {
            'app': { defaultExtension: 'js' }
        }
    };
    
    System.config(config);
})(this);