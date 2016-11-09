(function() {
    'use strict';

    angular
        .module('app.charts')
        .config(appRoutes);
    appRoutes.$inject = ['$stateProvider', 'RouteHelpersProvider'];

    function appRoutes($stateProvider, helper) {

        $stateProvider
            .state('app.chart-flot', {
                url: '/chart/flot',
                title: 'Chart Flot',
                templateUrl: 'modules/charts/client/views/chart-flot.client.view.html',
                resolve: helper.resolveFor('flot-chart', 'flot-chart-plugins')
            })
            .state('app.chart-radial', {
                url: '/chart/radial',
                title: 'Chart Radial',
                templateUrl: 'modules/charts/client/views/chart-radial.client.view.html',
                resolve: helper.resolveFor('classyloader', 'ui.knob', 'easypiechart')
            })
            .state('app.chart-js', {
                url: '/chart/chartjs',
                title: 'Chart JS',
                templateUrl: 'modules/charts/client/views/chart-js.client.view.html',
                resolve: helper.resolveFor('chartjs')
            })
            .state('app.chart-rickshaw', {
                url: '/chart/rickshaw',
                title: 'Chart Rickshaw',
                templateUrl: 'modules/charts/client/views/chart-rickshaw.client.view.html',
                resolve: helper.resolveFor('angular-rickshaw')
            })
            .state('app.chart-morris', {
                url: '/chart/morris',
                title: 'Chart Morris',
                templateUrl: 'modules/charts/client/views/chart-morris.client.view.html',
                resolve: helper.resolveFor('morris')
            })
            .state('app.chart-chartist', {
                url: '/chart/chartist',
                title: 'Chart Chartist',
                templateUrl: 'modules/charts/client/views/chart-chartist.client.view.html',
                resolve: helper.resolveFor('angular-chartist')
            });

    }
})();