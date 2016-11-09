Template.sortable.rendered = function() {

    if (!$.fn.sortable) return;

    sortable('.sortable', {
        forcePlaceholderSize: true,
        placeholder: '<div class="box-placeholder p0 m0"><div></div></div>'
    });
}
