(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .service('SidebarLoader', SidebarLoader);

    SidebarLoader.$inject = [];

    function SidebarLoader() {
        this.getMenu = getMenu;

        ////////////////

        function getMenu(onReady, onError) {

            onError = onError || function(msg) {
                alert('Failure loading menu: ' + msg);
            };

            Meteor.call('sidebar', 1, 2, function(error, data) {
                if (error) {
                    onError(error);
                } else {
                    onReady(data);
                }
            });

        }
    }
})();