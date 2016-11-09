// Upload Demo
// ----------------------------------- 

(function(window, document, $, undefined){

    $(function () {
        'use strict';

        if ( ! $.fn.fileupload ) return;

        var element = $('#fileupload');
        if ( ! element.length) return;

        // Initialize the jQuery File Upload widget:
        element.fileupload({
            // Uncomment the following to send cross-domain cookies:
            //xhrFields: {withCredentials: true},
            // url: 'server/upload'
        });

        // Enable iframe cross-domain access via redirect option:
        element.fileupload(
            'option',
            'redirect',
            window.location.href.replace(
                /\/[^\/]*$/,
                '/cors/result.html?%s'
            )
        );

        // Load existing files:
        element.addClass('fileupload-processing');
        $.ajax({
            // Uncomment the following to send cross-domain cookies:
            //xhrFields: {withCredentials: true},
            url: element.fileupload('option', 'url'),
            dataType: 'json',
            context: element[0]
        }).always(function () {
            $(this).removeClass('fileupload-processing');
        }).done(function (result) {
            $(this).fileupload('option', 'done')
                .call(this, $.Event('done'), {result: result});
        });

    });

})(window, document, window.jQuery);