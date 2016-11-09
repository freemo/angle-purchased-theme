// TRANSLATION
// -----------------------------------

(function(window, document, $, undefined) {

    window.initTranslation = function() {

        var preferredLang = 'en';
        var storageKey = 'jq-appLang';

        // detect saved language or use default
        var currLang = $.localStorage.get(storageKey) || preferredLang;

        // Set initial language
        setLanguage(currLang);

        // Listen for changes
        $(document).on('click', '[data-set-lang]', function() {

            currLang = $(this).data('setLang');

            if (currLang) {

                setLanguage(currLang);

                activateDropdown($(this));
            }

        });


        function setLanguage(currLang) {
            TAPi18n.setLanguage(currLang);
            $.localStorage.set(storageKey, currLang);
        }

        // Set the current clicked text as the active dropdown text
        function activateDropdown(elem) {
            var menu = elem.parents('.dropdown-menu');
            if (menu.length) {
                var toggle = menu.parent().children('button, a').first();
                toggle.text(elem.text());
            }
        }

    } //initTranslation

})(window, document, window.jQuery);