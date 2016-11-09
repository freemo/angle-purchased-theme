/**=========================================================
 * Module: word-cloud.js
 * Controller for jqCloud
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('WordCloudController', WordCloudController);

    function WordCloudController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.words = [
              {
                text: 'Lorem',
                weight: 13
                //link: 'http://themicon.co'
              }, {
                text: 'Ipsum',
                weight: 10.5
              }, {
                text: 'Dolor',
                weight: 9.4
              }, {
                text: 'Sit',
                weight: 8
              }, {
                text: 'Amet',
                weight: 6.2
              }, {
                text: 'Consectetur',
                weight: 5
              }, {
                text: 'Adipiscing',
                weight: 5
              }, {
                text: 'Sit',
                weight: 8
              }, {
                text: 'Amet',
                weight: 6.2
              }, {
                text: 'Consectetur',
                weight: 5
              }, {
                text: 'Adipiscing',
                weight: 5
              }
          ];
        }
    }
})();
