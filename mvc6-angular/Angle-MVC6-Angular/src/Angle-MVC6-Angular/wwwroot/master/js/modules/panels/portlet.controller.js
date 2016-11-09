(function() {
    'use strict';

    angular
        .module('app.panels')
        .controller('DraggablePanelController', DraggablePanelController);

    DraggablePanelController.$inject = ['$timeout', '$localStorage'];

    function DraggablePanelController($timeout, $localStorage) {
        var vm = this;
        var storageKeyName = 'portletState';

        activate();

        ////////////////

        function activate() {

            vm.panels = [
                [{
                    id: 'panelPortlet1',
                    type: 'default',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet2',
                    type: 'primary',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet3',
                    type: 'success',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }],
                [{
                    id: 'panelPortlet4',
                    type: 'info',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet5',
                    type: 'warning',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet6',
                    type: 'danger',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }],
                [{
                    id: 'panelPortlet7',
                    type: 'inverse',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet8',
                    type: 'purple',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet9',
                    type: 'green',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }]
            ];

            vm.panelList1 = vm.panels[0];
            vm.panelList2 = vm.panels[1];
            vm.panelList3 = vm.panels[2];

            // https://github.com/angular-ui/ui-sortable
            vm.sortablePortletOptions = {
                connectWith: '.portlet-connect',
                handle: '.panel-heading',
                opacity: 0.7,
                placeholder: 'portlet box-placeholder',
                cancel: '.portlet-cancel',
                forcePlaceholderSize: true,
                iframeFix: false,
                tolerance: 'pointer',
                helper: 'original',
                revert: 200,
                forceHelperSize: true,
                update: savePortletOrder,
                create: loadPortletOrder
            };

            function savePortletOrder(event) {
                $timeout(function() {
                    $localStorage[storageKeyName] = angular.toJson(vm.panels);
                });
            }

            function loadPortletOrder(event) {
                var data = angular.fromJson($localStorage[storageKeyName]);
                if (data) {
                    $timeout(function() {
                        vm.panels = data;
                        vm.panelList1 = vm.panels[0];
                        vm.panelList2 = vm.panels[1];
                        vm.panelList3 = vm.panels[2];
                    });
                }
            }

        }
    }
})();