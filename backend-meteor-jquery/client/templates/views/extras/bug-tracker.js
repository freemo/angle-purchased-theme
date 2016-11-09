Template.bugTracker.rendered = function() {

    // Sparkline
    $('[data-sparkline]').each(initSparkLine);

    // Datatable (zero config)
    $('#datatable1').dataTable();

    // Slimscroll
    $('[data-scrollable]').each(initSlimScroll);

}
