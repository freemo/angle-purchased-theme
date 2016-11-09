(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .config(appRoutes);
    appRoutes.$inject = ['$stateProvider', 'RouteHelpersProvider'];

    function appRoutes($stateProvider, helper) {

        $stateProvider
            .state('app.buttons', {
                url: '/elements/buttons',
                title: 'Buttons',
                templateUrl: 'modules/elements/client/views/buttons.client.view.html'
            })
            .state('app.colors', {
                url: '/elements/colors',
                title: 'Colors',
                templateUrl: 'modules/elements/client/views/colors.client.view.html'
            })
            .state('app.localization', {
                url: '/elements/localization',
                title: 'Localization',
                templateUrl: 'modules/elements/client/views/localization.client.view.html'
            })
            .state('app.infinite-scroll', {
                url: '/elements/infinite-scroll',
                title: 'Infinite Scroll',
                templateUrl: 'modules/elements/client/views/infinite-scroll.client.view.html',
                resolve: helper.resolveFor('infinite-scroll')
            })
            .state('app.navtree', {
                url: '/elements/navtree',
                title: 'Nav Tree',
                templateUrl: 'modules/elements/client/views/nav-tree.client.view.html',
                resolve: helper.resolveFor('angularBootstrapNavTree')
            })
            .state('app.nestable', {
                url: '/elements/nestable',
                title: 'Nestable',
                templateUrl: 'modules/elements/client/views/nestable.client.view.html',
                resolve: helper.resolveFor('ng-nestable')
            })
            .state('app.sortable', {
                url: '/elements/sortable',
                title: 'Sortable',
                templateUrl: 'modules/elements/client/views/sortable.client.view.html',
                resolve: helper.resolveFor('ui.sortable')
            })
            .state('app.notifications', {
                url: '/elements/notifications',
                title: 'Notifications',
                templateUrl: 'modules/elements/client/views/notifications.client.view.html'
            })
            .state('app.carousel', {
                url: '/elements/carousel',
                title: 'Carousel',
                templateUrl: 'modules/elements/client/views/carousel.client.view.html',
                resolve: helper.resolveFor('angular-carousel')
            })
            .state('app.ngdialog', {
                url: '/elements/ngdialog',
                title: 'ngDialog',
                templateUrl: 'modules/elements/client/views/ngdialog.client.view.html',
                resolve: angular.extend(helper.resolveFor('ngDialog'), {
                    tpl: function() {
                        return {
                            path: 'modules/elements/client/views/ngdialog-template.client.view.html'
                        };
                    }
                }),
                controller: 'DialogIntroCtrl'
            })
            .state('app.sweetalert', {
                url: '/elements/sweetalert',
                title: 'SweetAlert',
                templateUrl: 'modules/elements/client/views/sweetalert.client.view.html',
                resolve: helper.resolveFor('oitozero.ngSweetAlert')
            })
            .state('app.tour', {
                url: '/elements/tour',
                title: 'Tour',
                templateUrl: 'modules/elements/client/views/tour.client.view.html',
                resolve: helper.resolveFor('bm.bsTour')
            })
            .state('app.interaction', {
                url: '/elements/interaction',
                title: 'Interaction',
                templateUrl: 'modules/elements/client/views/interaction.client.view.html'
            })
            .state('app.spinners', {
                url: '/elements/spinners',
                title: 'Spinners',
                templateUrl: 'modules/elements/client/views/spinners.client.view.html',
                resolve: helper.resolveFor('loaders.css', 'spinkit')
            })
            .state('app.dropdown-animations', {
                url: '/elements/dropdown-animations',
                title: 'Dropdown Animations',
                templateUrl: 'modules/elements/client/views/dropdown-animations.client.view.html'
            })
            .state('app.panels', {
                url: '/elements/panels',
                title: 'Panels',
                templateUrl: 'modules/elements/client/views/panels.client.view.html'
            })
            .state('app.portlets', {
                url: '/elements/portlets',
                title: 'Portlets',
                templateUrl: 'modules/elements/client/views/portlets.client.view.html',
				resolve: helper.resolveFor('ui.sortable')
            })
            .state('app.grid', {
                url: '/elements/grid',
                title: 'Grid',
                templateUrl: 'modules/elements/client/views/grid.client.view.html'
            })
            .state('app.grid-masonry', {
                url: '/elements/grid-masonry',
                title: 'Grid Masonry',
                templateUrl: 'modules/elements/client/views/grid-masonry.client.view.html'
            })
            .state('app.grid-masonry-deck', {
                url: '/elements/grid-masonry-deck',
                title: 'Grid Masonry',
                templateUrl: 'modules/elements/client/views/grid-masonry-deck.client.view.html',
                resolve: helper.resolveFor('spinkit', 'akoenig.deckgrid')
            })
            .state('app.typo', {
                url: '/elements/typo',
                title: 'Typo',
                templateUrl: 'modules/elements/client/views/typo.client.view.html'
            })
            .state('app.icons-font', {
                url: '/elements/icons-font',
                title: 'Icons Font',
                templateUrl: 'modules/elements/client/views/icons-font.client.view.html',
                resolve: helper.resolveFor('icons')
            })
            .state('app.icons-weather', {
                url: '/elements/icons-weather',
                title: 'Icons Weather',
                templateUrl: 'modules/elements/client/views/icons-weather.client.view.html',
                resolve: helper.resolveFor('weather-icons', 'skycons')
            });

    }
})();