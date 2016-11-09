(function() {
    'use strict';

    angular
        .module('app.maps')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Maps',
            state: 'app.maps',
            type: 'dropdown',
            iconClass: 'icon-map',
            position: 8,
            roles: ['*']
        });

        Menus.addSubMenuItem('sidebar', 'app.maps', {title: 'Maps Google', state: 'app.maps-google'});
        Menus.addSubMenuItem('sidebar', 'app.maps', {title: 'Maps Vector', state: 'app.maps-vector'});

    }

})();
