export default function() {

    if ($.fn.wysiwyg)
        $('.wysiwyg').wysiwyg();

    if ($.fn.chosen)
        $('.chosen-select').chosen();
}