Template.projectDetails.rendered = function() {

    // Sparkline
    $('[data-sparkline]').each(initSparkLine);

    // Slimscroll
    $('[data-scrollable]').each(initSlimScroll);

}
