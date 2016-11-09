// Forms Demo
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

    // MASKED
    // ----------------------------------- 

    if($.fn.inputmask)
      $('[data-masked]').inputmask();

    // FILESTYLE
    // ----------------------------------- 

    if($.fn.filestyle)
      $('.filestyle').filestyle();

    // WYSIWYG
    // ----------------------------------- 

    if($.fn.wysiwyg)
      $('.wysiwyg').wysiwyg();


    // DATETIMEPICKER
    // ----------------------------------- 

    if($.fn.datetimepicker) {

      $('#datetimepicker1').datetimepicker({
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
      // only time
      $('#datetimepicker2').datetimepicker({
          format: 'LT'
      });
      // View mode
      $('#datetimepicker3').datetimepicker({
          viewMode: 'years',
         format: 'MM/YYYY'
      });

    }

  });

})(window, document, window.jQuery);