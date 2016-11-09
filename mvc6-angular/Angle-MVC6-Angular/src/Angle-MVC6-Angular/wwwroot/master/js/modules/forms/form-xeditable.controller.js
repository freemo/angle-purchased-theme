/**=========================================================
 * Module: form-xeditable.js
 * Form xEditable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormxEditableController', FormxEditableController);

    FormxEditableController.$inject = ['$scope', 'editableOptions', 'editableThemes', '$filter', '$http'];
    function FormxEditableController($scope, editableOptions, editableThemes, $filter, $http) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {

          editableOptions.theme = 'bs3';

          editableThemes.bs3.inputClass = 'input-sm';
          editableThemes.bs3.buttonsClass = 'btn-sm';
          editableThemes.bs3.submitTpl = '<button type="submit" class="btn btn-success"><span class="fa fa-check"></span></button>';
          editableThemes.bs3.cancelTpl = '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">'+
                                           '<span class="fa fa-times text-muted"></span>'+
                                         '</button>';

          vm.user = {
            email: 'email@example.com',
            tel: '123-45-67',
            number: 29,
            range: 10,
            url: 'http://example.com',
            search: 'blabla',
            color: '#6a4415',
            date: null,
            time: new Date(),
            datetime: null,
            month: null,
            week: null,
            desc: 'Sed pharetra euismod dolor, id feugiat ante volutpat eget. '
          };

          // Local select
          // ----------------------------------- 

          vm.user2 = {
            status: 2
          };

          vm.statuses = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'},
            {value: 4, text: 'status4'}
          ];

          vm.showStatus = function() {
            var selected = $filter('filter')(vm.statuses, {value: vm.user2.status});
            return (vm.user2.status && selected.length) ? selected[0].text : 'Not set';
          };

          // select remote
          // ----------------------------------- 

          vm.user3 = {
            id: 4,
            text: 'admin' // original value
          };

          vm.groups = [];

          vm.loadGroups = function() {
            return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function(data) {
              vm.groups = data;
            });
          };

          $scope.$watch('user3.id', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              var selected = $filter('filter')(vm.groups, {id: vm.user3.id});
              vm.user3.text = selected.length ? selected[0].text : null;
            }
          });

          // Typeahead
          // ----------------------------------- 

          vm.user4 = {
            state: 'Arizona'
          };

          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        }
    }
})();
