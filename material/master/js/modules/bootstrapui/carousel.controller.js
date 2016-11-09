/**=========================================================
 * Module: demo-carousel.js
 * Provides a simple demo for bootstrap ui carousel
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CarouselDemoCtrl', CarouselDemoCtrl);

    function CarouselDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.myInterval = 5000;

          vm.slides = [];
          vm.addSlide = function(id) {
            id = id || 8;
            vm.slides.push({
              id: id,
              image: 'app/img/bg' + id + '.jpg',
              text: ['More','Extra','Lots of','Surplus'][vm.slides.length % 2] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][vm.slides.length % 2]
            });
          };

          vm.addSlide(4);
          vm.addSlide(7);
          vm.addSlide(8);

        }
    }
})();
