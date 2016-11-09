Template.notifications.rendered = function() {

    // Notifiy
    $('[data-notify]').each(notifyAlert);

    // POPOVER
    $('[data-toggle="popover"]').popover({
        trigger: "focus"
    });

    // TOOLTIP
    $('[data-toggle="tooltip"]').tooltip({
      container: 'body'
    });

}