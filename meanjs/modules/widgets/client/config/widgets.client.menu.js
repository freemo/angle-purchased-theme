(function() {
    'use strict';

    angular
        .module('app.widgets')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Widgets',
            state: 'app.widgets',
            type: 'item',
            iconClass: 'icon-grid',
            position: 3,
            roles: ['*']
        });

    }

})();