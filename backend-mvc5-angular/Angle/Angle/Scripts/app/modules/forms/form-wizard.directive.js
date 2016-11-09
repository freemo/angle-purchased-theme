/**=========================================================
 * Module: form-wizard.js
 * Handles form wizard plugin and validation
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('formWizard', formWizard);

    formWizard.$inject = ['$parse'];
    function formWizard ($parse) {
        var directive = {
            link: link,
            controller: ctrl,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
          var validate = $parse(attrs.validateSteps)(scope),
              wiz = new Wizard(attrs.steps, !!validate, element);
          scope.wizard = wiz.init();
        }

        function Wizard (quantity, validate, element) {

          var self = this;
          self.quantity = parseInt(quantity,10);
          self.validate = validate;
          self.element = element;

          self.init = function() {
            self.createsteps(self.quantity);
            self.go(1); // always start at fist step
            return self;
          };

          self.go = function(step) {

            if ( angular.isDefined(self.steps[step]) ) {
                if(self.validate && step !== 1) { // no need to validate when move to first state
                    var scope = self.element.scope();
                    if(typeof scope.wizardValidate === 'function') {
                        var form = $(self.element).children().children('div').eq(step - 2).children('[ng-form]');
                        if ( ! scope.wizardValidate(form.attr('ng-form')))
                            return false;
                    }
                }

              self.cleanall();
              self.steps[step] = true;
            }
          };

          self.active = function(step) {
            return !!self.steps[step];
          };

          self.cleanall = function() {
            for(var i in self.steps){
              self.steps[i] = false;
            }
          };

          self.createsteps = function(q) {
            self.steps = [];
            for(var i = 1; i <= q; i++) self.steps[i] = false;
          };

        }

    }

    ctrl.$inject = ['$scope'];
    function ctrl($scope) {
        $scope.wizardValidate = function(formName) {
            if(angular.isDefined($scope[formName] )) {
                // Set submitted to perform validation
                $scope[formName].$setSubmitted(true);
                // return valid status of the subform
                return $scope[formName].$valid;
            }
        }
    }

})();
