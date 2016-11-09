/*!
 * 
 * Angle - Bootstrap Admin App + AngularJS Material
 * 
 * Version: 3.5.1
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 * 
 */

// APP START
// ----------------------------------- 

(function() {
    'use strict';

    angular
        .module('angle', [
            'app.core',
            'app.routes',
            'app.sidebar',
            'app.navsearch',
            'app.preloader',
            'app.loadingbar',
            'app.translate',
            'app.settings',
            'app.maps',
            'app.utils',
            'app.material'
        ]);
})();


(function() {
    'use strict';

    angular
        .module('app.colors', []);
})();
(function() {
    'use strict';

    angular
        .module('app.core', [
            'ngRoute',
            'ngAnimate',
            'ngStorage',
            'ngCookies',
            'pascalprecht.translate',
            'ui.bootstrap',
            'ui.router',
            'oc.lazyLoad',
            'cfp.loadingBar',
            'ngSanitize',
            'ngResource',
            'ui.utils',
            'ngAria',
            'ngMessages'
        ]);
})();
(function() {
    'use strict';

    angular
        .module('app.lazyload', []);
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar', []);
})();
(function() {
    'use strict';

    angular
        .module('app.maps', []);
})();
(function() {
    'use strict';

    angular
        .module('app.material', [
            'ngMaterial'
          ]);
})();
(function() {
    'use strict';

    angular
        .module('app.navsearch', []);
})();
(function() {
    'use strict';

    angular
        .module('app.preloader', []);
})();


(function() {
    'use strict';

    angular
        .module('app.routes', [
            'app.lazyload'
        ]);
})();
(function() {
    'use strict';

    angular
        .module('app.settings', []);
})();
(function() {
    'use strict';

    angular
        .module('app.sidebar', []);
})();
(function() {
    'use strict';

    angular
        .module('app.translate', []);
})();
(function() {
    'use strict';

    angular
        .module('app.utils', [
          'app.colors'
          ]);
})();

(function() {
    'use strict';

    angular
        .module('app.colors')
        .constant('APP_COLORS', {
          'primary':                '#3F51B5',
          'success':                '#4CAF50',
          'info':                   '#2196F3',
          'warning':                '#FF9800',
          'danger':                 '#F44336',
          'inverse':                '#607D8B',
          'green':                  '#009688',
          'pink':                   '#E91E63',
          'purple':                 '#673AB7',
          'dark':                   '#263238',
          'yellow':                 '#FFEB3B',
          'gray-darker':            '#232735',
          'gray-dark':              '#3a3f51',
          'gray':                   '#dde6e9',
          'gray-light':             '#e4eaec',
          'gray-lighter':           '#edf1f2'
        })
        ;
})();
/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.colors')
        .service('Colors', Colors);

    Colors.$inject = ['APP_COLORS'];
    function Colors(APP_COLORS) {
        this.byName = byName;

        ////////////////

        function byName(name) {
          return (APP_COLORS[name] || '#fff');
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.core')
        .config(coreConfig);

    coreConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$animateProvider'];
    function coreConfig($controllerProvider, $compileProvider, $filterProvider, $provide, $animateProvider){

      var core = angular.module('app.core');
      // registering components after bootstrap
      core.controller = $controllerProvider.register;
      core.directive  = $compileProvider.directive;
      core.filter     = $filterProvider.register;
      core.factory    = $provide.factory;
      core.service    = $provide.service;
      core.constant   = $provide.constant;
      core.value      = $provide.value;

      // Disables animation on items with class .ng-no-animation
      $animateProvider.classNameFilter(/^((?!(ng-no-animation)).)*$/);

      // Improve performance disabling debugging features
      // $compileProvider.debugInfoEnabled(false);

    }

})();
/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('APP_MEDIAQUERY', {
          'desktopLG':             1200,
          'desktop':                992,
          'tablet':                 768,
          'mobile':                 480
        })
      ;

})();
(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$state', '$stateParams',  '$window', '$templateCache', 'Colors'];
    
    function appRun($rootScope, $state, $stateParams, $window, $templateCache, Colors) {
      
      // Set reference to access them from any scope
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.$storage = $window.localStorage;

      // Uncomment this to disable template cache
      /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          if (typeof(toState) !== 'undefined'){
            $templateCache.remove(toState.templateUrl);
          }
      });*/

      // Allows to use branding color with interpolation
      // {{ colorByName('primary') }}
      $rootScope.colorByName = Colors.byName;

      // cancel click event easily
      $rootScope.cancel = function($event) {
        $event.stopPropagation();
      };

      // Hooks Example
      // ----------------------------------- 

      // Hook not found
      $rootScope.$on('$stateNotFound',
        function(event, unfoundState/*, fromState, fromParams*/) {
            console.log(unfoundState.to); // "lazy.state"
            console.log(unfoundState.toParams); // {a:1, b:2}
            console.log(unfoundState.options); // {inherit:false} + default options
        });
      // Hook error
      $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error){
          console.log(error);
        });
      // Hook success
      $rootScope.$on('$stateChangeSuccess',
        function(/*event, toState, toParams, fromState, fromParams*/) {
          // display new view from top
          $window.scrollTo(0, 0);
          // Save the route title
          $rootScope.currTitle = $state.current.title;
        });

      // Load a title dynamically
      $rootScope.currTitle = $state.current.title;
      $rootScope.pageTitle = function() {
        var title = $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
        document.title = title;
        return title;
      };      

    }

})();


(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .config(lazyloadConfig);

    lazyloadConfig.$inject = ['$ocLazyLoadProvider', 'APP_REQUIRES'];
    function lazyloadConfig($ocLazyLoadProvider, APP_REQUIRES){

      // Lazy Load modules configuration
      $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: APP_REQUIRES.modules
      });

    }
})();
(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
          // jQuery based and standalone scripts
          scripts: {
            'modernizr':          ['vendor/modernizr/modernizr.custom.js'],
            'icons':              ['vendor/fontawesome/css/font-awesome.min.css',
                                   'vendor/simple-line-icons/css/simple-line-icons.css'],
            'weather-icons':      ['vendor/weather-icons/css/weather-icons.min.css',
                                   'vendor/weather-icons/css/weather-icons-wind.min.css'],
            'loadGoogleMapsJS':   ['vendor/load-google-maps/load-google-maps.js']
          },
          // Angular based script (use the right module name)
          modules: [
            // {name: 'toaster', files: ['vendor/angularjs-toaster/toaster.js', 'vendor/angularjs-toaster/toaster.css']}
            {name: 'ui.map',                    files: ['vendor/angular-ui-map/ui-map.js']}
          ]
        })
        ;

})();

(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .config(loadingbarConfig)
        ;
    loadingbarConfig.$inject = ['cfpLoadingBarProvider'];
    function loadingbarConfig(cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeBar = true;
      cfpLoadingBarProvider.includeSpinner = false;
      cfpLoadingBarProvider.latencyThreshold = 500;
      cfpLoadingBarProvider.parentSelector = '.wrapper > section';
    }
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .run(loadingbarRun)
        ;
    loadingbarRun.$inject = ['$rootScope', '$timeout', 'cfpLoadingBar'];
    function loadingbarRun($rootScope, $timeout, cfpLoadingBar){

      // Loading bar transition
      // ----------------------------------- 
      var thBar;
      $rootScope.$on('$stateChangeStart', function() {
          if($('.wrapper > section').length) // check if bar container exists
            thBar = $timeout(function() {
              cfpLoadingBar.start();
            }, 0); // sets a latency Threshold
      });
      $rootScope.$on('$stateChangeSuccess', function(event) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            $timeout.cancel(thBar);
            cfpLoadingBar.complete();
          });
      });

    }

})();
/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('ModalGmapController', ModalGmapController);

    ModalGmapController.$inject = ['$uibModal'];
    function ModalGmapController($uibModal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.open = function (size) {

            //var modalInstance =
            $uibModal.open({
              templateUrl: '/myModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', '$timeout'];
          function ModalInstanceCtrl($scope, $uibModalInstance, $timeout) {

            $uibModalInstance.opened.then(function () {
              var position = new google.maps.LatLng(33.790807, -117.835734);

              $scope.mapOptionsModal = {
                zoom: 14,
                center: position,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };

              // we use timeout to wait maps to be ready before add a markers
              $timeout(function(){
                // 1. Add a marker at the position it was initialized
                new google.maps.Marker({
                  map: $scope.myMapModal,
                  position: position
                });
                // 2. Trigger a resize so the map is redrawed
                google.maps.event.trigger($scope.myMapModal, 'resize');
                // 3. Move to the center if it is misaligned
                $scope.myMapModal.panTo(position);
              });

            });

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };

          }

        }
    }

})();


(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('GMapController', GMapController);

    GMapController.$inject = ['$timeout'];
    function GMapController($timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          var position = [
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.787453, -117.835858)
            ];
          
          vm.addMarker = addMarker;
          // we use timeout to wait maps to be ready before add a markers
          $timeout(function(){
            addMarker(vm.myMap1, position[0]);
            addMarker(vm.myMap2, position[1]);
            addMarker(vm.myMap3, position[2]);
            addMarker(vm.myMap5, position[3]);
          });

          vm.mapOptions1 = {
            zoom: 14,
            center: position[0],
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
          };

          vm.mapOptions2 = {
            zoom: 19,
            center: position[1],
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          vm.mapOptions3 = {
            zoom: 14,
            center: position[2],
            mapTypeId: google.maps.MapTypeId.SATELLITE
          };

          vm.mapOptions4 = {
            zoom: 14,
            center: position[3],
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          // for multiple markers
          $timeout(function(){
            addMarker(vm.myMap4, position[3]);
            addMarker(vm.myMap4, position[4]);
          });

          // custom map style
          var MapStyles = [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#bdd1f9'}]},{'featureType':'all','elementType':'labels.text.fill','stylers':[{'color':'#334165'}]},{featureType:'landscape',stylers:[{color:'#e9ebf1'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#c5c6c6'}]},{featureType:'road.arterial',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'road.local',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'transit',elementType:'geometry',stylers:[{color:'#d8dbe0'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#cfd5e0'}]},{featureType:'administrative',stylers:[{visibility:'on'},{lightness:33}]},{featureType:'poi.park',elementType:'labels',stylers:[{visibility:'on'},{lightness:20}]},{featureType:'road',stylers:[{color:'#d8dbe0',lightness:20}]}];
          vm.mapOptions5 = {
            zoom: 14,
            center: position[3],
            styles: MapStyles,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
          };

          ///////////////
          
          function addMarker(map, position) {
            return new google.maps.Marker({
              map: map,
              position: position
            });
          }

        }
    }
})();


(function() {
    'use strict';
    // Used only for the BottomSheetExample
    angular
        .module('app.material')
        .config(materialConfig)
        ;
    materialConfig.$inject = ['$mdIconProvider'];
    function materialConfig($mdIconProvider){
      $mdIconProvider
        .icon('share-arrow', 'app/img/icons/share-arrow.svg', 24)
        .icon('upload', 'app/img/icons/upload.svg', 24)
        .icon('copy', 'app/img/icons/copy.svg', 24)
        .icon('print', 'app/img/icons/print.svg', 24)
        .icon('hangout', 'app/img/icons/hangout.svg', 24)
        .icon('mail', 'app/img/icons/mail.svg', 24)
        .icon('message', 'app/img/icons/message.svg', 24)
        .icon('copy2', 'app/img/icons/copy2.svg', 24)
        .icon('facebook', 'app/img/icons/facebook.svg', 24)
        .icon('twitter', 'app/img/icons/twitter.svg', 24);
    }
})();


(function() {
    'use strict';

    angular
        .module('app.material')
        .controller('MDAutocompleteCtrl', MDAutocompleteCtrl)
        .controller('MDBottomSheetCtrl', MDBottomSheetCtrl)
        .controller('MDListBottomSheetCtrl', MDListBottomSheetCtrl)
        .controller('MDGridBottomSheetCtrl', MDGridBottomSheetCtrl)
        .controller('MDCheckboxCtrl', MDCheckboxCtrl)
        .controller('MDRadioCtrl', MDRadioCtrl)
        .controller('MDSwitchCtrl', MDSwitchCtrl)
        .controller('MDDialogCtrl', MDDialogCtrl)
        .controller('MDSliderCtrl', MDSliderCtrl)
        .controller('MDSelectCtrl', MDSelectCtrl)
        .controller('MDInputCtrl', MDInputCtrl)
        .controller('MDProgressCtrl', MDProgressCtrl)
        .controller('MDSidenavCtrl', MDSidenavCtrl)
        .controller('MDSubheaderCtrl', MDSubheaderCtrl)
        .controller('MDToastCtrl', MDToastCtrl)
          .controller('ToastCtrl', ToastCtrl)
        .controller('MDTooltipCtrl', MDTooltipCtrl)
        .controller('BottomSheetExample', BottomSheetExample)
          .controller('ListBottomSheetCtrl', ListBottomSheetCtrl)
          .controller('GridBottomSheetCtrl', GridBottomSheetCtrl)
        ;

    /*
      MDAutocompleteCtrl
     */
    MDAutocompleteCtrl.$inject = ['$scope', '$timeout', '$q'];
    function MDAutocompleteCtrl($scope, $timeout, $q) {
      var self = this;

      self.states        = loadAll();
      self.selectedItem  = null;
      self.searchText    = null;
      self.querySearch   = querySearch;
      self.simulateQuery = false;
      self.isDisabled    = false;

      // use $timeout to simulate remote dataservice call
      function querySearch (query) {
        var results = query ? self.states.filter( createFilterFor(query) ) : [],
            deferred;
        if (self.simulateQuery) {
          deferred = $q.defer();
          $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
          return deferred.promise;
        } else {
          return results;
        }
      }

      function loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming';

        return allStates.split(/, +/g).map( function (state) {
          return {
            value: state.toLowerCase(),
            display: state
          };
        });
      }

          /**
           * Create filter function for a query string
           */
          function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
              return (state.value.indexOf(lowercaseQuery) === 0);
            };

          }
        }

    /*
    MDBottomSheetCtrl
     */
    MDBottomSheetCtrl.$inject = ['$scope', '$timeout', '$mdBottomSheet'];
    function MDBottomSheetCtrl($scope, $timeout, $mdBottomSheet) {
      $scope.alert = '';

      $scope.showListBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
          templateUrl: 'bottom-sheet-list-template.html',
          controller: 'ListBottomSheetCtrl',
          targetEvent: $event
        }).then(function(clickedItem) {
          $scope.alert = clickedItem.name + ' clicked!';
        });
      };

      $scope.showGridBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
          templateUrl: 'bottom-sheet-grid-template.html',
          controller: 'GridBottomSheetCtrl',
          targetEvent: $event
        }).then(function(clickedItem) {
          $scope.alert = clickedItem.name + ' clicked!';
        });
      };
    }
    /*
    MDListBottomSheetCtrl
     */
    MDListBottomSheetCtrl.$inject = ['$scope', '$mdBottomSheet'];
    function MDListBottomSheetCtrl($scope, $mdBottomSheet) {

      $scope.items = [
        { name: 'Share', icon: 'share' },
        { name: 'Upload', icon: 'upload' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Print this page', icon: 'print' },
      ];

      $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
      };
    }
    /*
    MDGridBottomSheetCtrl
     */
    MDGridBottomSheetCtrl.$inject = ['$scope', '$mdBottomSheet'];
    function MDGridBottomSheetCtrl($scope, $mdBottomSheet) {

      $scope.items = [
        { name: 'Hangout', icon: 'hangout' },
        { name: 'Mail', icon: 'mail' },
        { name: 'Message', icon: 'message' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Facebook', icon: 'facebook' },
        { name: 'Twitter', icon: 'twitter' },
      ];

      $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
      };
    }
    /*
    MDCheckboxCtrl
     */
    MDCheckboxCtrl.$inject = ['$scope'];
    function MDCheckboxCtrl($scope) {

      $scope.data = {};
      $scope.data.cb1 = true;
      $scope.data.cb2 = false;
      $scope.data.cb3 = false;
      $scope.data.cb4 = false;
      $scope.data.cb5 = false;
    }
    /*
    MDRadioCtrl
     */
    MDRadioCtrl.$inject = ['$scope'];
    function MDRadioCtrl($scope) {

        $scope.data = {
          group1 : 'Banana',
          group2 : '2',
          group3 : 'avatar-1'
        };

        $scope.avatarData = [{
            id: 'svg-1',
            title: 'avatar 1',
            value: 'avatar-1'
          },{
            id: 'svg-2',
            title: 'avatar 2',
            value: 'avatar-2'
          },{
            id: 'svg-3',
            title: 'avatar 3',
            value: 'avatar-3'
        }];

        $scope.radioData = [
          { label: 'Apple', value: 1 },
          { label: 'Banana', value: 2 },
          { label: 'Mango', value: '3', isDisabled: true }
        ];


        $scope.submit = function() {
          alert('submit');
        };

        var vals = ['Apple', 'Banana', 'Mango', 'Grape', 'Melon', 'Strawberry', 'Kiwi'];
        $scope.addItem = function() {
          var rval = vals[Math.floor(Math.random() * vals.length)];
          $scope.radioData.push({ label: rval, value: rval });
        };

        $scope.removeItem = function() {
          $scope.radioData.pop();
        };
    }
    /*
    MDSwitchCtrl
     */
    MDSwitchCtrl.$inject = ['$scope'];
    function MDSwitchCtrl($scope) {
      $scope.data = {
        cb1: true,
        cb4: true
      };
      
      $scope.onChange = function(cbState){
         $scope.message = 'The switch is now: ' + cbState;
      };
    }
    /*
    MDDialogCtrl
     */
    MDDialogCtrl.$inject = ['$scope', '$mdDialog'];
    function MDDialogCtrl($scope, $mdDialog) {
      $scope.alert = '';

      $scope.showAlert = function(ev) {
        $mdDialog.show(
          $mdDialog.alert()
            .title('This is an alert title')
            .content('You can specify some description text in here.')
            .ariaLabel('Password notification')
            .ok('Got it!')
            .targetEvent(ev)
        );
      };

      $scope.showConfirm = function(ev) {
        var confirm = $mdDialog.confirm()
          .title('Would you like to delete your debt?')
          .content('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .ok('Please do it!')
          .cancel('Sounds like a scam')
          .targetEvent(ev);

        $mdDialog.show(confirm).then(function() {
          $scope.alert = 'You decided to get rid of your debt.';
        }, function() {
          $scope.alert = 'You decided to keep your debt.';
        });
      };

      $scope.showAdvanced = function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'dialog1.tmpl.html',
          targetEvent: ev,
        })
        .then(function(answer) {
          $scope.alert = 'You said the information was \'' + answer + '\'.';
        }, function() {
          $scope.alert = 'You cancelled the dialog.';
        });
      };
      DialogController.$inject = ['$scope', '$mdDialog'];
      function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
          $mdDialog.hide();
        };

        $scope.cancel = function() {
          $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };
      }
    }
    /*
    MDSliderCtrl
     */
    MDSliderCtrl.$inject = ['$scope'];
    function MDSliderCtrl($scope) {

      $scope.color = {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255)
      };

      $scope.rating1 = 3;
      $scope.rating2 = 2;
      $scope.rating3 = 4;

      $scope.disabled1 = 0;
      $scope.disabled2 = 70;
    }
    /*
    MDSelectCtrl
     */
    function MDSelectCtrl() {
      
      var vm = this;
      
      vm.userState = '';
      vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
          'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
          'WY').split(' ').map(function (state) { return { abbrev: state }; });

      vm.sizes = [
          'small (12-inch)',
          'medium (14-inch)',
          'large (16-inch)',
          'insane (42-inch)'
      ];
      vm.toppings = [
        { category: 'meat', name: 'Pepperoni' },
        { category: 'meat', name: 'Sausage' },
        { category: 'meat', name: 'Ground Beef' },
        { category: 'meat', name: 'Bacon' },
        { category: 'veg', name: 'Mushrooms' },
        { category: 'veg', name: 'Onion' },
        { category: 'veg', name: 'Green Pepper' },
        { category: 'veg', name: 'Green Olives' }
      ];
    }
    /*
    MDInputCtrl
     */
    MDInputCtrl.$inject = ['$scope'];
    function MDInputCtrl($scope) {
      $scope.user = {
        title: 'Developer',
        email: 'ipsum@lorem.com',
        firstName: '',
        lastName: '' ,
        company: 'Google' ,
        address: '1600 Amphitheatre Pkwy' ,
        city: 'Mountain View' ,
        state: 'CA' ,
        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
        postalCode : '94043'
      };
      $scope.project = {
        description: 'Nuclear Missile Defense System',
        clientName: 'Bill Clinton',
        rate: 500
      };
    }
    /*
    MDProgressCtrl
     */
    MDProgressCtrl.$inject = ['$scope', '$interval'];
    function MDProgressCtrl($scope, $interval) {
        $scope.mode = 'query';
        $scope.determinateValue = 30;
        $scope.determinateValue2 = 30;

        $interval(function() {
          $scope.determinateValue += 1;
          $scope.determinateValue2 += 1.5;
          if ($scope.determinateValue > 100) {
            $scope.determinateValue = 30;
            $scope.determinateValue2 = 30;
          }
        }, 100, 0, true);

        $interval(function() {
          $scope.mode = ($scope.mode === 'query' ? 'determinate' : 'query');
        }, 7200, 0, true);
    }
    /*
    MDSidenavCtrl
     */
    MDSidenavCtrl.$inject = ['$scope', '$timeout', '$mdSidenav', '$log'];
    function MDSidenavCtrl($scope, $timeout, $mdSidenav, $log) {
      $scope.toggleLeft = function() {
        $mdSidenav('left').toggle()
                          .then(function(){
                              $log.debug('toggle left is done');
                          });
      };
      $scope.toggleRight = function() {
        $mdSidenav('right').toggle()
                            .then(function(){
                              $log.debug('toggle RIGHT is done');
                            });
      };
      $scope.closeLeft = function() {
        $mdSidenav('left').close()
                          .then(function(){
                            $log.debug('close LEFT is done');
                          });

      };
      $scope.closeRight = function() {
        $mdSidenav('right').close()
                            .then(function(){
                              $log.debug('close RIGHT is done');
                            });
      };
    }
    /*
    MDSubheaderCtrl
     */
    MDSubheaderCtrl.$inject = ['$scope'];
    function MDSubheaderCtrl($scope) {
        $scope.messages = [
          {
            face : 'app/img/user/10.jpg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: 'I\'ll be in your neighborhood doing errands'
          },
          {
            face : 'app/img/user/01.jpg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: 'I\'ll be in your neighborhood doing errands'
          },
          {
            face : 'app/img/user/02.jpg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: 'I\'ll be in your neighborhood doing errands'
          },
          {
            face : 'app/img/user/03.jpg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: 'I\'ll be in your neighborhood doing errands'
          },
          {
            face : 'app/img/user/04.jpg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: 'I\'ll be in your neighborhood doing errands'
          },
          {
            face : 'app/img/user/05.jpg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: 'I\'ll be in your neighborhood doing errands'
          },
          {
            face : 'app/img/user/06.jpg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: 'I\'ll be in your neighborhood doing errands'
          },
          {
            face : 'app/img/user/07.jpg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: 'I\'ll be in your neighborhood doing errands'
          },
          {
            face : 'app/img/user/08.jpg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: 'I\'ll be in your neighborhood doing errands'
          },
          {
            face : 'app/img/user/09.jpg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: 'I\'ll be in your neighborhood doing errands'
          },
          {
            face : 'app/img/user/11.jpg',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: 'I\'ll be in your neighborhood doing errands'
          },
        ];
    }
    /*
    MDToastCtrl
     */
    MDToastCtrl.$inject = ['$scope', '$mdToast'];
    function MDToastCtrl($scope, $mdToast) {

      $scope.toastPosition = {
        bottom: false,
        top: true,
        left: false,
        right: true
      };

      $scope.getToastPosition = function() {
        return Object.keys($scope.toastPosition)
          .filter(function(pos) { return $scope.toastPosition[pos]; })
          .join(' ');
      };

      $scope.showCustomToast = function() {
        $mdToast.show({
          controller: 'ToastCtrl',
          templateUrl: 'toast-template.html',
          hideDelay: 60000,
          parent:'#toastcontainer',
          position: $scope.getToastPosition()
        });
      };

      $scope.showSimpleToast = function() {
        $mdToast.show(
          $mdToast.simple()
            .content('Simple Toast!')
            .position($scope.getToastPosition())
            .hideDelay(30000)
        );
      };

      $scope.showActionToast = function() {
        var toast = $mdToast.simple()
              .content('Action Toast!')
              .action('OK')
              .highlightAction(false)
              .position($scope.getToastPosition());

        $mdToast.show(toast).then(function() {
          alert('You clicked \'OK\'.');
        });
      };
    }
    /*
    ToastCtrl
     */
    ToastCtrl.$inject = ['$scope', '$mdToast'];
    function ToastCtrl($scope, $mdToast) {
      $scope.closeToast = function() {
        $mdToast.hide();
      };
    }
    /*
    MDTooltipCtrl
     */
    MDTooltipCtrl.$inject = ['$scope'];
    function MDTooltipCtrl($scope) {
      $scope.demo = {};
    }
    /*
    BottomSheetExample
     */
    BottomSheetExample.$inject = ['$scope', '$timeout', '$mdBottomSheet'];
    function BottomSheetExample($scope, $timeout, $mdBottomSheet) {
      $scope.alert = '';

      $scope.showListBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
          templateUrl: 'bottom-sheet-list-template.html',
          controller: 'ListBottomSheetCtrl',
          targetEvent: $event,
          parent: '#bottomsheetcontainer'
        }).then(function(clickedItem) {
          $scope.alert = clickedItem.name + ' clicked!';
        });
      };

      $scope.showGridBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
          templateUrl: 'bottom-sheet-grid-template.html',
          controller: 'GridBottomSheetCtrl',
          targetEvent: $event,
          parent: '#bottomsheetcontainer'
        }).then(function(clickedItem) {
          $scope.alert = clickedItem.name + ' clicked!';
        });
      };
    }
    /*
    ListBottomSheetCtrl
     */
    ListBottomSheetCtrl.$inject = ['$scope', '$mdBottomSheet'];
    function ListBottomSheetCtrl($scope, $mdBottomSheet) {

      $scope.items = [
        { name: 'Share', icon: 'share-arrow' },
        { name: 'Upload', icon: 'upload' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Print this page', icon: 'print' },
      ];

      $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
      };
    }
    /*
    GridBottomSheetCtrl
     */
    GridBottomSheetCtrl.$inject = ['$scope', '$mdBottomSheet'];
    function GridBottomSheetCtrl($scope, $mdBottomSheet) {
      $scope.items = [
        { name: 'Hangout', icon: 'hangout' },
        { name: 'Mail', icon: 'mail' },
        { name: 'Message', icon: 'message' },
        { name: 'Copy', icon: 'copy2' },
        { name: 'Facebook', icon: 'facebook' },
        { name: 'Twitter', icon: 'twitter' },
      ];

      $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
      };
    }


})();

(function() {
    'use strict';
    // Used only for the BottomSheetExample
    angular
        .module('app.material')
        .run(materialRun)
        ;
    materialRun.$inject = ['$http', '$templateCache'];
    function materialRun($http, $templateCache){
      var urls = [
        'app/img/icons/share-arrow.svg',
        'app/img/icons/upload.svg',
        'app/img/icons/copy.svg',
        'app/img/icons/print.svg',
        'app/img/icons/hangout.svg',
        'app/img/icons/mail.svg',
        'app/img/icons/message.svg',
        'app/img/icons/copy2.svg',
        'app/img/icons/facebook.svg',
        'app/img/icons/twitter.svg'
      ];

      angular.forEach(urls, function(url) {
        $http.get(url, {cache: $templateCache});
      });

    }

})();

(function() {
    'use strict';

    angular
        .module('app.material')
        .controller('MaterialWidgetsController', MaterialWidgetsController);

    MaterialWidgetsController.$inject = ['Colors'];
    function MaterialWidgetsController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.sparkOption1 = {
            type : 'line',
            width : '100%',
            height : '140px',
            tooltipOffsetX : -20,
            tooltipOffsetY : 20,
            lineColor : Colors.byName('success'),
            fillColor : Colors.byName('success'),
            spotColor : 'rgba(0,0,0,.26)',
            minSpotColor : 'rgba(0,0,0,.26)',
            maxSpotColor : 'rgba(0,0,0,.26)',
            highlightSpotColor : 'rgba(0,0,0,.26)',
            highlightLineColor : 'rgba(0,0,0,.26)',
            spotRadius : 2,
            tooltipPrefix : '',
            tooltipSuffix : ' Visits',
            tooltipFormat : '{{prefix}}{{y}}{{suffix}}',
            chartRangeMin: 0,
            resize: true
          };

          vm.sparkOptionPie = {
            type: 'pie',
            width : '2em',
            height : '2em',
            sliceColors: [ Colors.byName('success'), Colors.byName('gray-light')]
          };
        
        }
    }
})();
/**=========================================================
 * Module: navbar-search.js
 * Navbar search toggler * Auto dismiss on ESC key
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.navsearch')
        .directive('searchOpen', searchOpen)
        .directive('searchDismiss', searchDismiss);

    //
    // directives definition
    // 
    
    function searchOpen () {
        var directive = {
            controller: searchOpenController,
            restrict: 'A'
        };
        return directive;

    }

    function searchDismiss () {
        var directive = {
            controller: searchDismissController,
            restrict: 'A'
        };
        return directive;
        
    }

    //
    // Contrller definition
    // 
    
    searchOpenController.$inject = ['$scope', '$element', 'NavSearch'];
    function searchOpenController ($scope, $element, NavSearch) {
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', NavSearch.toggle);
    }

    searchDismissController.$inject = ['$scope', '$element', 'NavSearch'];
    function searchDismissController ($scope, $element, NavSearch) {
      
      var inputSelector = '.navbar-form input[type="text"]';

      $(inputSelector)
        .on('click', function (e) { e.stopPropagation(); })
        .on('keyup', function(e) {
          if (e.keyCode === 27) // ESC
            NavSearch.dismiss();
        });
        
      // click anywhere closes the search
      $(document).on('click', NavSearch.dismiss);
      // dismissable options
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', NavSearch.dismiss);
    }

})();


/**=========================================================
 * Module: nav-search.js
 * Services to share navbar search functions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.navsearch')
        .service('NavSearch', NavSearch);

    function NavSearch() {
        this.toggle = toggle;
        this.dismiss = dismiss;

        ////////////////

        var navbarFormSelector = 'form.navbar-form';

        function toggle() {
          var navbarForm = $(navbarFormSelector);

          navbarForm.toggleClass('open');

          var isOpen = navbarForm.hasClass('open');

          navbarForm.find('input')[isOpen ? 'focus' : 'blur']();
        }

        function dismiss() {
          $(navbarFormSelector)
            .removeClass('open') // Close control
            .find('input[type="text"]').blur() // remove focus
            // .val('') // Empty input
            ;
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.preloader')
        .directive('preloader', preloader);

    preloader.$inject = ['$animate', '$timeout', '$q'];
    function preloader ($animate, $timeout, $q) {

        var directive = {
            restrict: 'EAC',
            template: 
              '<div class="preloader-progress">' +
                  '<div class="preloader-progress-bar" ' +
                       'ng-style="{width: loadCounter + \'%\'}"></div>' +
              '</div>'
            ,
            link: link
        };
        return directive;

        ///////

        function link(scope, el) {

          scope.loadCounter = 0;

          var counter  = 0,
              timeout;

          // disables scrollbar
          angular.element('body').css('overflow', 'hidden');
          // ensure class is present for styling
          el.addClass('preloader');

          appReady().then(endCounter);

          timeout = $timeout(startCounter);

          ///////

          function startCounter() {

            var remaining = 100 - counter;
            counter = counter + (0.015 * Math.pow(1 - Math.sqrt(remaining), 2));

            scope.loadCounter = parseInt(counter, 10);

            timeout = $timeout(startCounter, 20);
          }

          function endCounter() {

            $timeout.cancel(timeout);

            scope.loadCounter = 100;

            $timeout(function(){
              // animate preloader hiding
              $animate.addClass(el, 'preloader-hidden');
              // retore scrollbar
              angular.element('body').css('overflow', '');
            }, 300);
          }

          function appReady() {
            var deferred = $q.defer();
            var viewsLoaded = 0;
            // if this doesn't sync with the real app ready
            // a custom event must be used instead
            var off = scope.$on('$viewContentLoaded', function () {
              viewsLoaded ++;
              // we know there are at least two views to be loaded 
              // before the app is ready (1-index.html 2-app*.html)
              if ( viewsLoaded === 2) {
                // with resolve this fires only once
                $timeout(function(){
                  deferred.resolve();
                }, 3000);

                off();
              }

            });

            return deferred.promise;
          }

        } //link
    }

})();
/**=========================================================
 * Module: helpers.js
 * Provides helper functions for routes definition
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.routes')
        .provider('RouteHelpers', RouteHelpersProvider)
        ;

    RouteHelpersProvider.$inject = ['APP_REQUIRES'];
    function RouteHelpersProvider(APP_REQUIRES) {

      /* jshint validthis:true */
      return {
        // provider access level
        basepath: basepath,
        resolveFor: resolveFor,
        // controller access level
        $get: function() {
          return {
            basepath: basepath,
            resolveFor: resolveFor
          };
        }
      };

      // Set here the base of the relative path
      // for all app views
      function basepath(uri) {
        return 'app/views/' + uri;
      }

      // Generates a resolve object by passing script names
      // previously configured in constant.APP_REQUIRES
      function resolveFor() {
        var _args = arguments;
        return {
          deps: ['$ocLazyLoad','$q', function ($ocLL, $q) {
            // Creates a promise chain for each argument
            var promise = $q.when(1); // empty promise
            for(var i=0, len=_args.length; i < len; i ++){
              promise = andThen(_args[i]);
            }
            return promise;

            // creates promise to chain dynamically
            function andThen(_arg) {
              // also support a function that returns a promise
              if(typeof _arg === 'function')
                  return promise.then(_arg);
              else
                  return promise.then(function() {
                    // if is a module, pass the name. If not, pass the array
                    var whatToLoad = getRequired(_arg);
                    // simple error check
                    if(!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                    // finally, return a promise
                    return $ocLL.load( whatToLoad );
                  });
            }
            // check and returns required data
            // analyze module items with the form [name: '', files: []]
            // and also simple array of script files (for not angular js)
            function getRequired(name) {
              if (APP_REQUIRES.modules)
                  for(var m in APP_REQUIRES.modules)
                      if(APP_REQUIRES.modules[m].name && APP_REQUIRES.modules[m].name === name)
                          return APP_REQUIRES.modules[m];
              return APP_REQUIRES.scripts && APP_REQUIRES.scripts[name];
            }

          }]};
      } // resolveFor

    }


})();


/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper){
        
        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/app/welcome');

        // 
        // Application Routes
        // -----------------------------------   
        $stateProvider
          .state('app', {
              url: '/app',
              abstract: true,
              templateUrl: helper.basepath('app.html'),
              resolve: helper.resolveFor('modernizr', 'icons')
          })
          .state('app.welcome', {
              url: '/welcome',
              title: 'Welcome',
              templateUrl: helper.basepath('welcome.html')
          })
          //
          // Material 
          // ----------------------------------- 
          .state('app.cards', {
            url: '/cards',
            title: 'Material Cards',
            templateUrl: helper.basepath( 'material.cards.html' )
          })
          .state('app.forms', {
            url: '/forms',
            title: 'Material Forms',
            templateUrl: helper.basepath( 'material.forms.html' )
          })
          .state('app.whiteframe', {
            url: '/whiteframe',
            title: 'Material Whiteframe',
            templateUrl: helper.basepath( 'material.whiteframe.html' )
          })
          .state('app.matcolors', {
            url: '/matcolors',
            title: 'Material Colors',
            templateUrl: helper.basepath( 'material.colors.html' )
          })
          .state('app.lists', {
            url: '/lists',
            title: 'Material Lists',
            templateUrl: helper.basepath( 'material.lists.html' )
          })
          .state('app.inputs', {
            url: '/inputs',
            title: 'Material Inputs',
            templateUrl: helper.basepath( 'material.inputs.html' )
          })
          .state('app.matwidgets', {
            url: '/matwidgets',
            title: 'Material Widgets',
            templateUrl: helper.basepath( 'material.widgets.html' ),
            resolve: helper.resolveFor('weather-icons', 'loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'ui.map')
          })
          .state('app.ngmaterial', {
            url: '/ngmaterial',
            title: 'ngMaterial',
            templateUrl: helper.basepath( 'material.ngmaterial.html' )
          })    
          // 
          // CUSTOM RESOLVES
          //   Add your own resolves properties
          //   following this object extend
          //   method
          // ----------------------------------- 
          // .state('app.someroute', {
          //   url: '/some_url',
          //   templateUrl: 'path_to_template.html',
          //   controller: 'someController',
          //   resolve: angular.extend(
          //     helper.resolveFor(), {
          //     // YOUR RESOLVES GO HERE
          //     }
          //   )
          // })
          ;

    } // routesConfig

})();


(function() {
    'use strict';

    angular
        .module('app.settings')
        .run(settingsRun);

    settingsRun.$inject = ['$rootScope', '$localStorage'];

    function settingsRun($rootScope, $localStorage){


      // User Settings
      // -----------------------------------
      $rootScope.user = {
        name:     'John',
        job:      'ng-developer',
        picture:  'app/img/user/02.jpg'
      };

      // Hides/show user avatar on sidebar from any element
      $rootScope.toggleUserBlock = function(){
        $rootScope.$broadcast('toggleUserBlock');
      };

      // Global Settings
      // -----------------------------------
      $rootScope.app = {
        name: 'Angle',
        description: 'Angular Bootstrap Admin Template',
        year: ((new Date()).getFullYear()),
        layout: {
          isFixed: true,
          isCollapsed: false,
          isBoxed: false,
          isRTL: false,
          horizontal: false,
          isFloat: false,
          asideHover: false,
          theme: null,
          asideScrollbar: false,
          isCollapsedText: false
        },
        useFullLayout: false,
        hiddenFooter: false,
        offsidebarOpen: false,
        asideToggled: false,
        viewAnimation: 'ng-fadeInUp'
      };

      // Setup the layout mode
      $rootScope.app.layout.horizontal = ( $rootScope.$stateParams.layout === 'app-h') ;

      // Restore layout settings [*** UNCOMMENT TO ENABLE ***]
      // if( angular.isDefined($localStorage.layout) )
      //   $rootScope.app.layout = $localStorage.layout;
      // else
      //   $localStorage.layout = $rootScope.app.layout;
      //
      // $rootScope.$watch('app.layout', function () {
      //   $localStorage.layout = $rootScope.app.layout;
      // }, true);

      // Close submenu when sidebar change from collapsed to normal
      $rootScope.$watch('app.layout.isCollapsed', function(newValue) {
        if( newValue === false )
          $rootScope.$broadcast('closeSidebarMenu');
      });

    }

})();

/**=========================================================
 * Module: sidebar-menu.js
 * Handle sidebar collapsible elements
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$rootScope', '$scope', '$state', 'SidebarLoader', 'Utils'];
    function SidebarController($rootScope, $scope, $state, SidebarLoader,  Utils) {

        activate();

        ////////////////

        function activate() {
          var collapseList = [];

          // demo: when switch from collapse to hover, close all items
          var watchOff1 = $rootScope.$watch('app.layout.asideHover', function(oldVal, newVal){
            if ( newVal === false && oldVal === true) {
              closeAllBut(-1);
            }
          });


          // Load menu from json file
          // -----------------------------------

          SidebarLoader.getMenu(sidebarReady);

          function sidebarReady(items) {
            $scope.menuItems = items;
          }

          // Handle sidebar and collapse items
          // ----------------------------------

          $scope.getMenuItemPropClasses = function(item) {
            return (item.heading ? 'nav-heading' : '') +
                   (isActive(item) ? ' active' : '') ;
          };

          $scope.addCollapse = function($index, item) {
            collapseList[$index] = $rootScope.app.layout.asideHover ? true : !isActive(item);
          };

          $scope.isCollapse = function($index) {
            return (collapseList[$index]);
          };

          $scope.toggleCollapse = function($index, isParentItem) {

            // collapsed sidebar doesn't toggle drodopwn
            if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) return true;

            // make sure the item index exists
            if( angular.isDefined( collapseList[$index] ) ) {
              if ( ! $scope.lastEventFromChild ) {
                collapseList[$index] = !collapseList[$index];
                closeAllBut($index);
              }
            }
            else if ( isParentItem ) {
              closeAllBut(-1);
            }

            $scope.lastEventFromChild = isChild($index);

            return true;

          };

          // Controller helpers
          // -----------------------------------

            // Check item and children active state
            function isActive(item) {

              if(!item) return;

              if( !item.sref || item.sref === '#') {
                var foundActive = false;
                angular.forEach(item.submenu, function(value) {
                  if(isActive(value)) foundActive = true;
                });
                return foundActive;
              }
              else
                return $state.is(item.sref) || $state.includes(item.sref);
            }

            function closeAllBut(index) {
              index += '';
              for(var i in collapseList) {
                if(index < 0 || index.indexOf(i) < 0)
                  collapseList[i] = true;
              }
            }

            function isChild($index) {
              /*jshint -W018*/
              return (typeof $index === 'string') && !($index.indexOf('-') < 0);
            }

            $scope.$on('$destroy', function() {
                watchOff1();
            });

        } // activate
    }

})();

/**=========================================================
 * Module: sidebar.js
 * Wraps the sidebar and handles collapsed state
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .directive('sidebar', sidebar);

    sidebar.$inject = ['$rootScope', '$timeout', '$window', 'Utils'];
    function sidebar ($rootScope, $timeout, $window, Utils) {
        var $win = angular.element($window);
        var directive = {
            // bindToController: true,
            // controller: Controller,
            // controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            template: '<nav class="sidebar" ng-transclude></nav>',
            transclude: true,
            replace: true
            // scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

          var currentState = $rootScope.$state.current.name;
          var $sidebar = element;

          var eventName = Utils.isTouch() ? 'click' : 'mouseenter' ;
          var subNav = $();

          $sidebar.on( eventName, '.nav > li', function() {

            if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) {

              subNav.trigger('mouseleave');
              subNav = toggleMenuItem( $(this), $sidebar);

              // Used to detect click and touch events outside the sidebar
              sidebarAddBackdrop();

            }

          });

          var eventOff1 = scope.$on('closeSidebarMenu', function() {
            removeFloatingNav();
          });

          // Normalize state when resize to mobile
          $win.on('resize.sidebar', function() {
            if( ! Utils.isMobile() )
          	asideToggleOff();
          });

          // Adjustment on route changes
          var eventOff2 = $rootScope.$on('$stateChangeStart', function(event, toState) {
            currentState = toState.name;
            // Hide sidebar automatically on mobile
            asideToggleOff();

            $rootScope.$broadcast('closeSidebarMenu');
          });

      	  // Autoclose when click outside the sidebar
          if ( angular.isDefined(attrs.sidebarAnyclickClose) ) {

            var wrapper = $('.wrapper');
            var sbclickEvent = 'click.sidebar';

            var watchOff1 = $rootScope.$watch('app.asideToggled', watchExternalClicks);

          }

          //////

          function watchExternalClicks(newVal) {
            // if sidebar becomes visible
            if ( newVal === true ) {
              $timeout(function(){ // render after current digest cycle
                wrapper.on(sbclickEvent, function(e){
                  // if not child of sidebar
                  if( ! $(e.target).parents('.aside').length ) {
                    asideToggleOff();
                  }
                });
              });
            }
            else {
              // dettach event
              wrapper.off(sbclickEvent);
            }
          }

          function asideToggleOff() {
            $rootScope.app.asideToggled = false;
            if(!scope.$$phase) scope.$apply(); // anti-pattern but sometimes necessary
      	  }

          scope.$on('$destroy', function() {
            // detach scope events
            eventOff1();
            eventOff2();
            watchOff1();
            // detach dom events
            $sidebar.off(eventName);
            $win.off('resize.sidebar');
            wrapper.off(sbclickEvent);
          });

        }

        ///////

        function sidebarAddBackdrop() {
          var $backdrop = $('<div/>', { 'class': 'dropdown-backdrop'} );
          $backdrop.insertAfter('.aside-inner').on('click mouseenter', function () {
            removeFloatingNav();
          });
        }

        // Open the collapse sidebar submenu items when on touch devices
        // - desktop only opens on hover
        function toggleTouchItem($element){
          $element
            .siblings('li')
            .removeClass('open')
            .end()
            .toggleClass('open');
        }

        // Handles hover to open items under collapsed menu
        // -----------------------------------
        function toggleMenuItem($listItem, $sidebar) {

          removeFloatingNav();

          var ul = $listItem.children('ul');

          if( !ul.length ) return $();
          if( $listItem.hasClass('open') ) {
            toggleTouchItem($listItem);
            return $();
          }

          var $aside = $('.aside');
          var $asideInner = $('.aside-inner'); // for top offset calculation
          // float aside uses extra padding on aside
          var mar = parseInt( $asideInner.css('padding-top'), 0) + parseInt( $aside.css('padding-top'), 0);
          var subNav = ul.clone().appendTo( $aside );

          toggleTouchItem($listItem);

          var itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
          var vwHeight = $win.height();

          subNav
            .addClass('nav-floating')
            .css({
              position: $rootScope.app.layout.isFixed ? 'fixed' : 'absolute',
              top:      itemTop,
              bottom:   (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
            });

          subNav.on('mouseleave', function() {
            toggleTouchItem($listItem);
            subNav.remove();
          });

          return subNav;
        }

        function removeFloatingNav() {
          $('.dropdown-backdrop').remove();
          $('.sidebar-subnav.nav-floating').remove();
          $('.sidebar li.open').removeClass('open');
        }
    }


})();


(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .service('SidebarLoader', SidebarLoader);

    SidebarLoader.$inject = ['$http'];
    function SidebarLoader($http) {
        this.getMenu = getMenu;

        ////////////////

        function getMenu(onReady, onError) {
          var menuJson = 'server/sidebar-menu.json',
              menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
            
          onError = onError || function() { alert('Failure loading menu'); };

          $http
            .get(menuURL)
            .success(onReady)
            .error(onError);
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('UserBlockController', UserBlockController);

    UserBlockController.$inject = ['$scope'];
    function UserBlockController($scope) {

        activate();

        ////////////////

        function activate() {

          $scope.userBlockVisible = true;

          var detach = $scope.$on('toggleUserBlock', function(/*event, args*/) {

            $scope.userBlockVisible = ! $scope.userBlockVisible;

          });

          $scope.$on('$destroy', detach);
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.translate')
        .config(translateConfig)
        ;
    translateConfig.$inject = ['$translateProvider'];
    function translateConfig($translateProvider){

      $translateProvider.useStaticFilesLoader({
          prefix : 'app/i18n/',
          suffix : '.json'
      });

      $translateProvider.preferredLanguage('en');
      $translateProvider.useLocalStorage();
      $translateProvider.usePostCompiling(true);
      $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    }
})();
(function() {
    'use strict';

    angular
        .module('app.translate')
        .run(translateRun)
        ;
    translateRun.$inject = ['$rootScope', '$translate'];
    
    function translateRun($rootScope, $translate){

      // Internationalization
      // ----------------------

      $rootScope.language = {
        // Handles language dropdown
        listIsOpen: false,
        // list of available languages
        available: {
          'en':       'English',
          'es_AR':    'Español'
        },
        // display always the current ui language
        init: function () {
          var proposedLanguage = $translate.proposedLanguage() || $translate.use();
          var preferredLanguage = $translate.preferredLanguage(); // we know we have set a preferred one in app.config
          $rootScope.language.selected = $rootScope.language.available[ (proposedLanguage || preferredLanguage) ];
        },
        set: function (localeId) {
          // Set the new idiom
          $translate.use(localeId);
          // save a reference for the current language
          $rootScope.language.selected = $rootScope.language.available[localeId];
          // finally toggle dropdown
          $rootScope.language.listIsOpen = ! $rootScope.language.listIsOpen;
        }
      };

      $rootScope.language.init();

    }
})();
/**=========================================================
 * Module: animate-enabled.js
 * Enable or disables ngAnimate for element with directive
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('animateEnabled', animateEnabled);

    animateEnabled.$inject = ['$animate'];
    function animateEnabled ($animate) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          scope.$watch(function () {
            return scope.$eval(attrs.animateEnabled, scope);
          }, function (newValue) {
            $animate.enabled(!!newValue, element);
          });
        }
    }

})();

/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Browser', Browser);

    Browser.$inject = ['$window'];
    function Browser($window) {
      return $window.jQBrowser;
    }

})();

/**=========================================================
 * Module: clear-storage.js
 * Removes a key from the browser storage via element click
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('resetKey', resetKey);

    resetKey.$inject = ['$state', '$localStorage'];
    function resetKey ($state, $localStorage) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              resetKey: '@'
            }
        };
        return directive;

        function link(scope, element) {
          element.on('click', function (e) {
              e.preventDefault();

              if(scope.resetKey) {
                delete $localStorage[scope.resetKey];
                $state.go($state.current, {}, {reload: true});
              }
              else {
                $.error('No storage key specified for reset.');
              }
          });
        }
    }

})();

/**=========================================================
 * Module: fullscreen.js
 * Toggle the fullscreen mode on/off
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('toggleFullscreen', toggleFullscreen);

    toggleFullscreen.$inject = ['Browser'];
    function toggleFullscreen (Browser) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          // Not supported under IE
          if( Browser.msie ) {
            element.addClass('hide');
          }
          else {
            element.on('click', function (e) {
                e.preventDefault();

                if (screenfull.enabled) {
                  
                  screenfull.toggle();
                  
                  // Switch icon indicator
                  if(screenfull.isFullscreen)
                    $(this).children('em').removeClass('fa-expand').addClass('fa-compress');
                  else
                    $(this).children('em').removeClass('fa-compress').addClass('fa-expand');

                } else {
                  $.error('Fullscreen not enabled');
                }

            });
          }
        }
    }


})();

/**=========================================================
 * Module: load-css.js
 * Request and load into the current page a css file
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('loadCss', loadCss);

    function loadCss () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          element.on('click', function (e) {
              if(element.is('a')) e.preventDefault();
              var uri = attrs.loadCss,
                  link;

              if(uri) {
                link = createLink(uri);
                if ( !link ) {
                  $.error('Error creating stylesheet link element.');
                }
              }
              else {
                $.error('No stylesheet location defined.');
              }

          });
        }
        
        function createLink(uri) {
          var linkId = 'autoloaded-stylesheet',
              oldLink = $('#'+linkId).attr('id', linkId + '-old');

          $('head').append($('<link/>').attr({
            'id':   linkId,
            'rel':  'stylesheet',
            'href': uri
          }));

          if( oldLink.length ) {
            oldLink.remove();
          }

          return $('#'+linkId);
        }
    }

})();

/**=========================================================
 * Module: now.js
 * Provides a simple way to display the current time formatted
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('now', now);

    now.$inject = ['dateFilter', '$interval'];
    function now (dateFilter, $interval) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          var format = attrs.format;

          function updateTime() {
            var dt = dateFilter(new Date(), format);
            element.text(dt);
          }

          updateTime();
          var intervalPromise = $interval(updateTime, 1000);

          scope.$on('$destroy', function(){
            $interval.cancel(intervalPromise);
          });

        }
    }

})();

/**=========================================================
 * Module: table-checkall.js
 * Tables check all checkbox
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('checkAll', checkAll);

    function checkAll () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          element.on('change', function() {
            var $this = $(this),
                index= $this.index() + 1,
                checkbox = $this.find('input[type="checkbox"]'),
                table = $this.parents('table');
            // Make sure to affect only the correct checkbox column
            table.find('tbody > tr > td:nth-child('+index+') input[type="checkbox"]')
              .prop('checked', checkbox[0].checked);

          });
        }
    }

})();

/**=========================================================
 * Module: trigger-resize.js
 * Triggers a window resize event from any element
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('triggerResize', triggerResize);

    triggerResize.$inject = ['$window', '$timeout'];
    function triggerResize ($window, $timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attributes) {
          element.on('click', function(){
            $timeout(function(){
              // all IE friendly dispatchEvent
              var evt = document.createEvent('UIEvents');
              evt.initUIEvent('resize', true, false, $window, 0);
              $window.dispatchEvent(evt);
              // modern dispatchEvent way
              // $window.dispatchEvent(new Event('resize'));
            }, attributes.triggerResize || 300);
          });
        }
    }

})();

/**=========================================================
 * Module: utils.js
 * Utility library to use across the theme
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Utils', Utils);

    Utils.$inject = ['$window', 'APP_MEDIAQUERY'];
    function Utils($window, APP_MEDIAQUERY) {

        var $html = angular.element('html'),
            $win  = angular.element($window),
            $body = angular.element('body');

        return {
          // DETECTION
          support: {
            transition: (function() {
                    var transitionEnd = (function() {

                        var element = document.body || document.documentElement,
                            transEndEventNames = {
                                WebkitTransition: 'webkitTransitionEnd',
                                MozTransition: 'transitionend',
                                OTransition: 'oTransitionEnd otransitionend',
                                transition: 'transitionend'
                            }, name;

                        for (name in transEndEventNames) {
                            if (element.style[name] !== undefined) return transEndEventNames[name];
                        }
                    }());

                    return transitionEnd && { end: transitionEnd };
                })(),
            animation: (function() {

                var animationEnd = (function() {

                    var element = document.body || document.documentElement,
                        animEndEventNames = {
                            WebkitAnimation: 'webkitAnimationEnd',
                            MozAnimation: 'animationend',
                            OAnimation: 'oAnimationEnd oanimationend',
                            animation: 'animationend'
                        }, name;

                    for (name in animEndEventNames) {
                        if (element.style[name] !== undefined) return animEndEventNames[name];
                    }
                }());

                return animationEnd && { end: animationEnd };
            })(),
            requestAnimationFrame: window.requestAnimationFrame ||
                                   window.webkitRequestAnimationFrame ||
                                   window.mozRequestAnimationFrame ||
                                   window.msRequestAnimationFrame ||
                                   window.oRequestAnimationFrame ||
                                   function(callback){ window.setTimeout(callback, 1000/60); },
            /*jshint -W069*/
            touch: (
                ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
                (window.DocumentTouch && document instanceof window.DocumentTouch)  ||
                (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
                (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
                false
            ),
            mutationobserver: (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null)
          },
          // UTILITIES
          isInView: function(element, options) {
              /*jshint -W106*/
              var $element = $(element);

              if (!$element.is(':visible')) {
                  return false;
              }

              var window_left = $win.scrollLeft(),
                  window_top  = $win.scrollTop(),
                  offset      = $element.offset(),
                  left        = offset.left,
                  top         = offset.top;

              options = $.extend({topoffset:0, leftoffset:0}, options);

              if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
                  left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
                return true;
              } else {
                return false;
              }
          },

          langdirection: $html.attr('dir') === 'rtl' ? 'right' : 'left',

          isTouch: function () {
            return $html.hasClass('touch');
          },

          isSidebarCollapsed: function () {
            return $body.hasClass('aside-collapsed') || $body.hasClass('aside-collapsed-text');
          },

          isSidebarToggled: function () {
            return $body.hasClass('aside-toggled');
          },

          isMobile: function () {
            return $win.width() < APP_MEDIAQUERY.tablet;
          }

        };
    }
})();

(function() {
    'use strict';

    angular
        .module('custom', [
            // request the the entire framework
            'angle',
            // or just modules
            'app.core',
            'app.sidebar'
            /*...*/
        ]);
})();

// To run this code, edit file index.html or index.jade and change
// html data-ng-app attribute from angle to myAppName
// ----------------------------------------------------------------------

(function() {
    'use strict';

    angular
        .module('custom')
        .controller('Controller', Controller);

    Controller.$inject = ['$log'];
    function Controller($log) {
        // for controllerAs syntax
        // var vm = this;

        activate();

        ////////////////

        function activate() {
          $log.log('I\'m a line from custom.js');
        }
    }
})();
