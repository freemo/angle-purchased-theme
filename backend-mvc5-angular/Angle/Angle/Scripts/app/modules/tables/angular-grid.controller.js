/**=========================================================
 * Module: angular-grid.js
 * Example for Angular Grid
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('AngularGridController', AngularGridController);

    AngularGridController.$inject = ['$scope', '$http', '$window', '$timeout'];

    function AngularGridController($scope, $http, $window, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            var resizeEvent = 'resize.ag-grid';
            var $win = $($window); // cache reference for resize

            // Basic
            var columnDefs = [{
                headerName: 'Athlete',
                field: 'athlete',
                width: 150
            }, {
                headerName: 'Age',
                field: 'age',
                width: 90
            }, {
                headerName: 'Country',
                field: 'country',
                width: 120
            }, {
                headerName: 'Year',
                field: 'year',
                width: 90
            }, {
                headerName: 'Date',
                field: 'date',
                width: 110
            }, {
                headerName: 'Sport',
                field: 'sport',
                width: 110
            }, {
                headerName: 'Gold',
                field: 'gold',
                width: 100
            }, {
                headerName: 'Silver',
                field: 'silver',
                width: 100
            }, {
                headerName: 'Bronze',
                field: 'bronze',
                width: 100
            }, {
                headerName: 'Total',
                field: 'total',
                width: 100
            }];

            vm.gridOptions = {
                columnDefs: columnDefs,
                rowData: null,
                onGridReady: function(params) {
                    params.api.sizeColumnsToFit();
                    $win.on(resizeEvent, function() {
                        $timeout(function(){
                            params.api.sizeColumnsToFit();
                        });
                    })
                }
            };

            // Filter Example
            var irishAthletes = ['John Joe Nevin', 'Katie Taylor', 'Paddy Barnes', 'Kenny Egan', 'Darren Sutherland', 'Margaret Thatcher', 'Tony Blair', 'Ronald Regan', 'Barack Obama'];

            var columnDefsFilter = [{
                headerName: 'Athlete',
                field: 'athlete',
                width: 150,
                filter: 'set',
                filterParams: {
                    cellHeight: 20,
                    values: irishAthletes
                }
            }, {
                headerName: 'Age',
                field: 'age',
                width: 90,
                filter: 'number'
            }, {
                headerName: 'Country',
                field: 'country',
                width: 120
            }, {
                headerName: 'Year',
                field: 'year',
                width: 90
            }, {
                headerName: 'Date',
                field: 'date',
                width: 110
            }, {
                headerName: 'Sport',
                field: 'sport',
                width: 110
            }, {
                headerName: 'Gold',
                field: 'gold',
                width: 100,
                filter: 'number'
            }, {
                headerName: 'Silver',
                field: 'silver',
                width: 100,
                filter: 'number'
            }, {
                headerName: 'Bronze',
                field: 'bronze',
                width: 100,
                filter: 'number'
            }, {
                headerName: 'Total',
                field: 'total',
                width: 100,
                filter: 'number'
            }];

            vm.gridOptions1 = {
                columnDefs: columnDefsFilter,
                rowData: null,
                enableFilter: true,
                onGridReady: function(params) {
                    params.api.sizeColumnsToFit();
                    $win.on(resizeEvent, function() {
                        $timeout(function(){
                            params.api.sizeColumnsToFit();
                        });
                    })
                }

            };

            // Pinning Example

            // https://www.ag-grid.com/javascript-grid-pinning/index.php
            var columnDefsPinned = angular.copy(columnDefs);
            columnDefsPinned[0].pinned = 'left';

            vm.gridOptions2 = {
                columnDefs: columnDefsPinned,
                rowData: null,
                pinnedColumnCount: 2,
                onGridReady: function(params) {
                    params.api.sizeColumnsToFit();
                    $win.on(resizeEvent, function() {
                        $timeout(function(){
                            params.api.sizeColumnsToFit();
                        });
                    })
                }
            };

            //-----------------------------
            // Get the data from SERVER
            //-----------------------------

            $http.get('server/ag-owinners.json')
                .then(function(res) {
                    // basic
                    vm.gridOptions.api.setRowData(res.data);
                    vm.gridOptions.api.sizeColumnsToFit();
                    // filter
                    vm.gridOptions1.api.setRowData(res.data);
                    vm.gridOptions1.api.sizeColumnsToFit();

                    // pinning
                    vm.gridOptions2.api.setRowData(res.data);
                    vm.gridOptions2.api.sizeColumnsToFit();
                });

            // turn off event
            $scope.$on('$destroy', function(){
                $win.off(resizeEvent);
            })

        }
    }
})();