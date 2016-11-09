export default () => {

    if (!sortable) return;

    sortable('.sortable', {
        forcePlaceholderSize: true,
        placeholder: '<div class="box-placeholder p0 m0"><div></div></div>'
    });
}
