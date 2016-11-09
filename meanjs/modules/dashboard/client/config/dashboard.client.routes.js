(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .config(appRoutes);
    appRoutes.$inject = ['$stateProvider', 'RouteHelpersProvider'];

    function appRoutes($stateProvider, helper) {

        $stateProvider
            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: 'modules/dashboard/client/views/dashboard.client.view.html',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'weather-icons')
            })
            .state('app.dashboard_v2', {
                url: '/dashboard/v2',
                title: 'Dashboard v2',
                templateUrl: 'modules/dashboard/client/views/dashboard_v2.client.view.html',
                controller: 'DashboardV2Controller',
                controllerAs: 'dash2',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins')
            })
            .state('app.dashboard_v3', {
                url: '/dashboard/v3',
                title: 'Dashboard v3',
                controller: 'DashboardV3Controller',
                controllerAs: 'dash3',
                templateUrl: 'modules/dashboard/client/views/dashboard_v3.client.view.html',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins', 'vector-map', 'vector-map-maps')
            });

    }
})();