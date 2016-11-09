(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('ColorPickerController', ColorPickerController);

    function ColorPickerController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
           vm.hexPicker = {
              color: ''
            };

            vm.rgbPicker = {
              color: ''
            };

            vm.rgbaPicker = {
              color: ''
            };

            vm.nonInput = {
              color: ''
            };

            vm.resetColor = function() {
              vm.hexPicker = {
                color: '#ff0000'
              };
            };

            vm.resetRBGColor = function() {
              vm.rgbPicker = {
                color: 'rgb(255,255,255)'
              };
            };

            vm.resetRBGAColor = function() {
              vm.rgbaPicker = {
                color: 'rgb(255,255,255, 0.25)'
              };
            };

            vm.resetNonInputColor = function() {
              vm.nonInput = {
                color: '#ffffff'
              };
            };
        }
    }
})();