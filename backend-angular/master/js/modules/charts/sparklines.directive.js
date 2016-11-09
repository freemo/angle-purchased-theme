/**=========================================================
 * Module: sparkline.js
 * SparkLines Mini Charts
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('sparkline', sparkline);

    function sparkline () {
        var directive = {
            restrict: 'EA',
            scope: {
              'sparkline': '='
            },
            controller: Controller
        };
        return directive;

    }
    Controller.$inject = ['$scope', '$element', '$timeout', '$window'];
    function Controller($scope, $element, $timeout, $window) {
      var runSL = function(){
        initSparLine();
      };
      // generate a unique resize event so we can detach later
      var resizeEventId = 'resize.sparkline' + $scope.$id;

      $timeout(runSL);

      function initSparLine() {
        var options = $scope.sparkline,
            data = $element.data();

        if(!options) // if no scope options, try with data attributes
          options = data;
        else
          if(data) // data attributes overrides scope options
            options = angular.extend({}, options, data);

        options.type = options.type || 'bar'; // default chart is bar
        options.disableHiddenCheck = true;

        $element.sparkline('html', options);

        if(options.resize) {
          $($window).on(resizeEventId, function(){
            $element.sparkline('html', options);
          });
        }
      }

      $scope.$on('$destroy', function(){
        $($window).off(resizeEventId);
      });

    }


})();
