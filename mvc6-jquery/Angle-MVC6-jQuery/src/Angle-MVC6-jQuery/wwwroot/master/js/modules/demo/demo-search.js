// Custom jQuery
// ----------------------------------- 


(function(window, document, $, undefined){


  $(function(){

    // BOOTSTRAP SLIDER CTRL
    // ----------------------------------- 
    if($.fn.slider)
        $('[data-ui-slider]').slider();

    // CHOSEN
    // ----------------------------------- 
    if($.fn.chosen)
        $('.chosen-select').chosen();

    // DATETIMEPICKER
    // ----------------------------------- 
    if ($.fn.datetimepicker)
    $('#datetimepicker').datetimepicker({
      icons: {
          time: 'fa fa-clock-o',
          date: 'fa fa-calendar',
          up: 'fa fa-chevron-up',
          down: 'fa fa-chevron-down',
          previous: 'fa fa-chevron-left',
          next: 'fa fa-chevron-right',
          today: 'fa fa-crosshairs',
          clear: 'fa fa-trash'
        }
    });

  });

})(window, document, window.jQuery);
