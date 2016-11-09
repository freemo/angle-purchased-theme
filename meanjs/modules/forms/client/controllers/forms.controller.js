
(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormDemoCtrl', FormDemoCtrl);

    FormDemoCtrl.$inject = ['$resource'];
    function FormDemoCtrl($resource) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // the following allow to request array $resource instead of object (default)
          var actions = {'get': {method: 'GET', isArray: true}};
          
          // Tags inputs
          // ----------------------------------- 
          var Cities = $resource('server/cities.json', {}, actions);

          Cities.get(function(data){

              vm.cities = data;

          });
          // for non ajax form just fill the scope variable
          // vm.cities = ['Amsterdam','Washington','Sydney','Beijing','Cairo'];

          // Slider demo values
          vm.slider1 = 5;
          vm.slider2 = 10;
          vm.slider3 = 15;
          vm.slider4 = 20;
          vm.slider5 = 25;
          vm.slider6 = 30;
          vm.slider7 = 10;
          vm.slider8 = [250,750];

          // Chosen data
          // ----------------------------------- 

          var States = $resource('server/chosen-states.json', {},  {'query':    {method:'GET', isArray:true} });

          vm.states = States.query();


          vm.alertSubmit = function(){
            alert('Form submitted!');
            return false;
          };

          // Angular wysiwyg 
          // ----------------------------------- 

          vm.wysiwygContent = '<p> Write something here.. </p>';

          // Text Angular (wysiwyg)
          // ----------------------------------- 
          
          vm.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><a href="https://github.com/fraywing/textAngular">Source</a> </p>';

        }
    }
})();
