(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Dashboard',
            state: 'app.dash',
            type: 'dropdown',
            iconClass: 'icon-speedometer',
            position: 2,
            roles: ['*']
        });

        Menus.addSubMenuItem('sidebar', 'app.dash', {
            title: 'Dashboard v1',
            state: 'app.dashboard'
        });
        Menus.addSubMenuItem('sidebar', 'app.dash', {
            title: 'Dashboard v2',
            state: 'app.dashboard_v2'
        });
        Menus.addSubMenuItem('sidebar', 'app.dash', {
            title: 'Dashboard v3',
            state: 'app.dashboard_v3'
        });

    }

})();