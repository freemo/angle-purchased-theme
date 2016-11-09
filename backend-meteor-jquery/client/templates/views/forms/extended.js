Template.formExtended.rendered = function() {

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

    // Tags
    // -----------------------------------
    if($.fn.tagsinput)
        $("[data-role='tagsinput']").tagsinput()


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

    }

    if($.fn.colorpicker) {

        $('.demo-colorpicker').colorpicker();

        $('#demo_selectors').colorpicker({
          colorSelectors: {
            'default': '#777777',
            'primary': APP_COLORS['primary'],
            'success': APP_COLORS['success'],
            'info':    APP_COLORS['info'],
            'warning': APP_COLORS['warning'],
            'danger':  APP_COLORS['danger']
          }
        });
    }

    // Select 2

    if ( $.fn.select2 ) {
        $('#select2-1').select2({
            theme: 'bootstrap'
        });
        $('#select2-2').select2({
            theme: 'bootstrap'
        });
        $('#select2-3').select2({
            theme: 'bootstrap'
        });
        $('#select2-4').select2({
            placeholder: 'Select a state',
            allowClear: true,
            theme: 'bootstrap'
        });
    }
}
