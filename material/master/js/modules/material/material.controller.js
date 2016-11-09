
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
