(function() {
    'use strict';

    angular
        .module('app.elements')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Elements',
            state: 'app.elements',
            type: 'dropdown',
            iconClass: 'icon-chemistry',
            position: 4,
            roles: ['*']
        });

        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Buttons',           state: 'app.buttons'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Notifications',     state: 'app.notifications'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'ngDialog',          state: 'app.ngdialog'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Sweet Alert',       state: 'app.sweetalert'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Tour',              state: 'app.tour'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Interaction',       state: 'app.interaction'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Carousel',          state: 'app.carousel'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Spinners',          state: 'app.spinners'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Dropdown',          state: 'app.dropdown-animations'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Nav Tree',          state: 'app.navtree'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Nestable',          state: 'app.nestable'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Sortable',          state: 'app.sortable'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Panels',            state: 'app.panels'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Portlets',          state: 'app.portlets'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Grid',              state: 'app.grid'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Grid Masonry',      state: 'app.grid-masonry'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Grid Masonry Deck', state: 'app.grid-masonry-deck'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Typography',        state: 'app.typo'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Font Icons',        state: 'app.icons-font'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Weather Icons',     state: 'app.icons-weather'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Colors',            state: 'app.colors'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Localization',      state: 'app.localization'});
        Menus.addSubMenuItem('sidebar', 'app.elements', {title: 'Infinite scroll',   state: 'app.infinite-scroll'});

    }

})();