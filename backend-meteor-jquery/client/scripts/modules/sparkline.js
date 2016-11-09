// SPARKLINE
// -----------------------------------

(function(window, document, $, undefined){

    window.initSparkLine = function() {
      var $element = $(this),
          options = $element.data(),
          values  = options.values && options.values.split(',');

      options.type = options.type || 'bar'; // default chart is bar
      options.disableHiddenCheck = true;

      $element.sparkline(values, options);

      if(options.resize) {
        $(window).resize(function(){
          $element.sparkline(values, options);
        });
      }
    };

})(window, document, window.jQuery);
