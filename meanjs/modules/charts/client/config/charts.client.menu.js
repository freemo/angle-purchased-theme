(function() {
    'use strict';

    angular
        .module('app.charts')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Charts',
            state: 'app.charts',
            type: 'dropdown',
            iconClass: 'icon-graph',
            position: 6,
            roles: ['*']
        });
        Menus.addSubMenuItem('sidebar', 'app.charts', {
            title: 'Flot',
            state: 'app.chart-flot',
        });
        Menus.addSubMenuItem('sidebar', 'app.charts', {
            title: 'Radial',
            state: 'app.chart-radial',
        });
        Menus.addSubMenuItem('sidebar', 'app.charts', {
            title: 'Chartjs',
            state: 'app.chart-js',
        });
        Menus.addSubMenuItem('sidebar', 'app.charts', {
            title: 'Rickshaw',
            state: 'app.chart-rickshaw',
        });
        Menus.addSubMenuItem('sidebar', 'app.charts', {
            title: 'Morris',
            state: 'app.chart-morris',
        });
        Menus.addSubMenuItem('sidebar', 'app.charts', {
            title: 'Chartist',
            state: 'app.chart-chartist',
        });

    }

})();