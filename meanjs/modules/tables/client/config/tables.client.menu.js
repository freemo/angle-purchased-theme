(function() {
    'use strict';

    angular
        .module('app.tables')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Tables',
            state: 'app.table',
            type: 'dropdown',
            iconClass: 'icon-grid',
            position: 7,
            roles: ['*']
        });

        Menus.addSubMenuItem('sidebar', 'app.table', {title: 'Standard',     state: 'app.table-standard'});
        Menus.addSubMenuItem('sidebar', 'app.table', {title: 'Extended',     state: 'app.table-extended'});
        Menus.addSubMenuItem('sidebar', 'app.table', {title: 'DataTables',   state: 'app.table-datatable'});
        Menus.addSubMenuItem('sidebar', 'app.table', {title: 'ngTables',     state: 'app.table-ngtable'});
        Menus.addSubMenuItem('sidebar', 'app.table', {title: 'uiGrid',       state: 'app.table-uigrid'});
        Menus.addSubMenuItem('sidebar', 'app.table', {title: 'xEditable',    state: 'app.table-xeditable'});
        Menus.addSubMenuItem('sidebar', 'app.table', {title: 'Angular Grid', state: 'app.table-angulargrid'});

    }

})();