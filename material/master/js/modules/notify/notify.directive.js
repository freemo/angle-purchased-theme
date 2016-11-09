/**=========================================================
 * Module: notify.js
 * Directive for notify plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.notify')
        .directive('notify', notify);

    notify.$inject = ['$window', 'Notify'];
    function notify ($window, Notify) {

        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              options: '=',
              message: '='
            }
        };
        return directive;

        function link(scope, element) {

          element.on('click', function (e) {
            e.preventDefault();
            Notify.alert(scope.message, scope.options);
          });
        }

    }

})();

