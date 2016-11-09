(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardV3Controller', DashboardV3Controller);

    DashboardV3Controller.$inject = ['$rootScope'];
    function DashboardV3Controller($rootScope) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // SPLINE
          // ----------------------------------- 

          vm.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: ($rootScope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };


          vm.seriesData = {
            'CA': 11100,   // Canada
            'DE': 2510,    // Germany
            'FR': 3710,    // France
            'AU': 5710,    // Australia
            'GB': 8310,    // Great Britain
            'RU': 9310,    // Russia
            'BR': 6610,    // Brazil
            'IN': 7810,    // India
            'CN': 4310,    // China
            'US': 839,     // USA
            'SA': 410      // Saudi Arabia
          };
          
          vm.markersData = [
            { latLng:[41.90, 12.45],  name:'Vatican City'          },
            { latLng:[43.73, 7.41],   name:'Monaco'                },
            { latLng:[-0.52, 166.93], name:'Nauru'                 },
            { latLng:[-8.51, 179.21], name:'Tuvalu'                },
            { latLng:[7.11,171.06],   name:'Marshall Islands'      },
            { latLng:[17.3,-62.73],   name:'Saint Kitts and Nevis' },
            { latLng:[3.2,73.22],     name:'Maldives'              },
            { latLng:[35.88,14.5],    name:'Malta'                 },
            { latLng:[41.0,-71.06],   name:'New England'           },
            { latLng:[12.05,-61.75],  name:'Grenada'               },
            { latLng:[13.16,-59.55],  name:'Barbados'              },
            { latLng:[17.11,-61.85],  name:'Antigua and Barbuda'   },
            { latLng:[-4.61,55.45],   name:'Seychelles'            },
            { latLng:[7.35,134.46],   name:'Palau'                 },
            { latLng:[42.5,1.51],     name:'Andorra'               }
          ];
        }
    }
})();