// SLIMSCROLL
// -----------------------------------

(function(window, document, $, undefined){

    window.initSlimScroll = function(){

      var element = $(this),
          defaultHeight = 250;

      element.slimScroll({
          height: (element.data('height') || defaultHeight)
      });

    }

})(window, document, window.jQuery);
