/**=========================================================
 * Module: UIGridController
  =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('UIGridController', UIGridController);

    UIGridController.$inject = ['uiGridConstants', '$http'];

    function UIGridController(uiGridConstants, $http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Basic example
            // ----------------------------------- 

            vm.gridOptions = {
                rowHeight: 34,
                data: [{
                    'name': 'Wilder Gonzales',
                    'gender': 'male',
                    'company': 'Geekko'
                }, {
                    'name': 'Georgina Schultz',
                    'gender': 'female',
                    'company': 'Suretech'
                }, {
                    'name': 'Carroll Buchanan',
                    'gender': 'male',
                    'company': 'Ecosys'
                }, {
                    'name': 'Valarie Atkinson',
                    'gender': 'female',
                    'company': 'Hopeli'
                }, {
                    'name': 'Schroeder Mathews',
                    'gender': 'male',
                    'company': 'Polarium'
                }, {
                    'name': 'Ethel Price',
                    'gender': 'female',
                    'company': 'Enersol'
                }, {
                    'name': 'Claudine Neal',
                    'gender': 'female',
                    'company': 'Sealoud'
                }, {
                    'name': 'Beryl Rice',
                    'gender': 'female',
                    'company': 'Velity'
                }, {
                    'name': 'Lynda Mendoza',
                    'gender': 'female',
                    'company': 'Dogspa'
                }, {
                    'name': 'Sarah Massey',
                    'gender': 'female',
                    'company': 'Bisba'
                }, {
                    'name': 'Robles Boyle',
                    'gender': 'male',
                    'company': 'Comtract'
                }, {
                    'name': 'Evans Hickman',
                    'gender': 'male',
                    'company': 'Parleynet'
                }, {
                    'name': 'Dawson Barber',
                    'gender': 'male',
                    'company': 'Dymi'
                }, {
                    'name': 'Bruce Strong',
                    'gender': 'male',
                    'company': 'Xyqag'
                }, {
                    'name': 'Nellie Whitfield',
                    'gender': 'female',
                    'company': 'Exospace'
                }, {
                    'name': 'Jackson Macias',
                    'gender': 'male',
                    'company': 'Aquamate'
                }, {
                    'name': 'Pena Pena',
                    'gender': 'male',
                    'company': 'Quarx'
                }, {
                    'name': 'Lelia Gates',
                    'gender': 'female',
                    'company': 'Proxsoft'
                }, {
                    'name': 'Letitia Vasquez',
                    'gender': 'female',
                    'company': 'Slumberia'
                }, {
                    'name': 'Trevino Moreno',
                    'gender': 'male',
                    'company': 'Conjurica'
                }]
            };

            // Complex example
            // ----------------------------------- 

            var data = [];

            vm.gridOptionsComplex = {
                showGridFooter: true,
                showColumnFooter: true,
                enableFiltering: true,
                columnDefs: [{
                    field: 'name',
                    width: '13%'
                }, {
                    field: 'address.street',
                    aggregationType: uiGridConstants.aggregationTypes.sum,
                    width: '13%'
                }, {
                    field: 'age',
                    aggregationType: uiGridConstants.aggregationTypes.avg,
                    aggregationHideLabel: true,
                    width: '13%'
                }, {
                    name: 'ageMin',
                    field: 'age',
                    aggregationType: uiGridConstants.aggregationTypes.min,
                    width: '13%',
                    displayName: 'Age for min'
                }, {
                    name: 'ageMax',
                    field: 'age',
                    aggregationType: uiGridConstants.aggregationTypes.max,
                    width: '13%',
                    displayName: 'Age for max'
                }, {
                    name: 'customCellTemplate',
                    field: 'age',
                    width: '14%',
                    footerCellTemplate: '<div class="ui-grid-cell-contents bg-info text-center">Custom HTML</div>'
                }, {
                    name: 'registered',
                    field: 'registered',
                    width: '20%',
                    cellFilter: 'date',
                    footerCellFilter: 'date',
                    aggregationType: uiGridConstants.aggregationTypes.max
                }],
                data: data,
                onRegisterApi: function(gridApi) {
                    vm.gridApi = gridApi;
                }
            };

            $http.get('server/uigrid-complex.json')
                .success(function(data) {
                    data.forEach(function(row) {
                        row.registered = Date.parse(row.registered);
                    });
                    vm.gridOptionsComplex.data = data;
                });

            // Demo for pagination
            vm.gridOptions1 = {
                paginationPageSizes: [25, 50, 75],
                paginationPageSize: 25,
                columnDefs: [{
                    name: 'name'
                }, {
                    name: 'gender'
                }, {
                    name: 'company'
                }]
            };

            $http.get('server/uigrid-100.json')
                .success(function(data) {
                    vm.gridOptions1.data = data;
                });

            // Demo for menu selection
            vm.gridOptions2 = {
                columnDefs: [{
                    field: 'name'
                }, {
                    field: 'gender',
                    visible: false
                }, {
                    field: 'company'
                }],
                enableGridMenu: true,
                enableSelectAll: true
            };

            $http.get('server/uigrid-100.json')
            .success(function (data) {
              vm.gridOptions2.data = data;
            });

        }
    }
})();