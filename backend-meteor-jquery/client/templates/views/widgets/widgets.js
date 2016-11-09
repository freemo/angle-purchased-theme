Template.widgets.rendered = function(){

    // Google Maps
    $('[data-gmap]').each(initGmap);

    // Sparkline
    $('[data-sparkline]').each(initSparkLine);

}
