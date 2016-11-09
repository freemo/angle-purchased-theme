/**=========================================================
 * Module: morris.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartMorrisController', ChartMorrisController);

    ChartMorrisController.$inject = ['$timeout', 'Colors'];
    function ChartMorrisController($timeout, Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
         vm.chartdata = [
              { y: '2006', a: 100, b: 90 },
              { y: '2007', a: 75,  b: 65 },
              { y: '2008', a: 50,  b: 40 },
              { y: '2009', a: 75,  b: 65 },
              { y: '2010', a: 50,  b: 40 },
              { y: '2011', a: 75,  b: 65 },
              { y: '2012', a: 100, b: 90 }
          ];

          /* test data update
          $timeout(function(){
            vm.chartdata[0].a = 50;
            vm.chartdata[0].b = 50;
          }, 3000); */

          vm.donutdata = [
            {label: 'Download Sales', value: 12},
            {label: 'In-Store Sales',value: 30},
            {label: 'Mail-Order Sales', value: 20}
          ];

          vm.donutOptions = {
            Colors: [ Colors.byName('danger'), Colors.byName('yellow'), Colors.byName('warning') ],
            resize: true
          };

          vm.barOptions = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            xLabelMargin: 2,
            barColors: [ Colors.byName('info'), Colors.byName('danger') ],
            resize: true
          };

          vm.lineOptions = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Serie A', 'Serie B'],
            lineColors: ['#31C0BE', '#7a92a3'],
            resize: true
          };

          vm.areaOptions = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Serie A', 'Serie B'],
            lineColors: [ Colors.byName('purple'), Colors.byName('info') ],
            resize: true
          };

        }
    }
})();
