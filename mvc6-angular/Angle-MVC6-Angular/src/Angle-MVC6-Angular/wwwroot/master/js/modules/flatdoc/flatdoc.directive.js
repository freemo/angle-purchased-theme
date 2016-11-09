/**=========================================================
 * Module: flatdoc.js
 * Creates the flatdoc markup and initializes the plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.flatdoc')
        .directive('flatdoc', flatdoc);

    function flatdoc() {

        var directive = {
            template: '<div role="flatdoc"><div role="flatdoc-menu"></div><div role="flatdoc-content"></div></div>',
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {

            Flatdoc.run({
                fetcher: Flatdoc.file(attrs.src)
            });

            var $root = $('html, body');
            var menuLinks;

            var $doc = $(document).on('flatdoc:ready', function() {

                var docMenu = $('[role="flatdoc-menu"]');

                menuLinks = docMenu.find('a').on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var $this = $(this);

                    docMenu.find('a.active').removeClass('active');
                    $this.addClass('active');

                    $root.animate({
                        scrollTop: $(this.getAttribute('href')).offset().top - ($('.topnavbar').height() + 10)
                    }, 800);
                });

            });

            // dettach all events
            scope.$on('$destroy', function() {
                menuLinks && menuLinks.off();
                $doc.off('flatdoc:ready');
            });

        }
    }

})();
