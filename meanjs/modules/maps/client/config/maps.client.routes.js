(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .config(appRoutes);
    appRoutes.$inject = ['$stateProvider', 'RouteHelpersProvider'];

    function appRoutes($stateProvider, helper) {

        $stateProvider
            .state('app.maps-google', {
                url: '/maps/google',
                title: 'Maps Google',
                templateUrl: 'modules/maps/client/views/maps-google.client.view.html',
                resolve: helper.resolveFor('loadGoogleMapsJS', function() {
                    return loadGoogleMaps();
                }, 'ui.map')
            })
            .state('app.maps-vector', {
                url: '/maps/vector',
                title: 'Maps Vector',
                templateUrl: 'modules/maps/client/views/maps-vector.client.view.html',
                controller: 'VectorMapController',
                controllerAs: 'vmap',
                resolve: helper.resolveFor('vector-map', 'vector-map-maps')
            });

    }
})();