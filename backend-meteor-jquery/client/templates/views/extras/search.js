Template.search.rendered = function() {

    if (! $.fn['slider'] || ! $.fn['chosen'] ) return;

    // BOOTSTRAP SLIDER CTRL
    // -----------------------------------

    $('[data-ui-slider]').slider();

    // CHOSEN
    // -----------------------------------

    $('.chosen-select').chosen();

    // DATETIMEPICKER
    // -----------------------------------

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
}
