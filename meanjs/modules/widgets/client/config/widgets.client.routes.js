(function() {
    'use strict';

    angular
        .module('app.widgets')
        .config(appRoutes);
    appRoutes.$inject = ['$stateProvider', 'RouteHelpersProvider'];

    function appRoutes($stateProvider, helper) {

        $stateProvider
            .state('app.widgets', {
                url: '/widgets',
                templateUrl: 'modules/widgets/client/views/widgets.client.view.html',
                resolve: helper.resolveFor('loadGoogleMapsJS', function() {
                    return loadGoogleMaps();
                }, 'ui.map')
            })

        ;

    }
})();