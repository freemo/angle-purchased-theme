
// Settings Handler
// ----------------------------------- 

(function ($) {
  'use strict';

  // SHOW HIDE SETTINGS
  var settings = $('.settings');
  $('.settings-ctrl').on('click', function(){
    settings.toggleClass('show');
  });

  // Load THEME CSS 

  var $loaders = $('[data-load-css]');
  $loaders.on('click', function (e) {
      var element = $(this);

      $loaders.removeClass('checked');
      element.addClass('checked');

      if(element.is('a')) e.preventDefault();
      var uri = element.data('loadCss'),
          link;

      if(uri) {
        link = createLink(uri);
        if ( !link ) { $.error('Error creating stylesheet link element.'); }
      }
      else { $.error('No stylesheet location defined.'); }

  });

  function createLink(uri) {
    var linkId = 'autoloaded-stylesheet',
        oldLink = $('#'+linkId).attr('id', linkId + '-old');

    $('head').append($('<link/>').attr({
      'id':   linkId,
      'rel':  'stylesheet',
      'href': uri
    }));

    if( oldLink.length ) { oldLink.remove(); }

    return $('#'+linkId);
  }

  // SET WRITING MODE

  var stylesCss = $('#stylescss'),
      rtlSwitch = $('#rtlswitch');

  $(function(){
    var uri = modeRTL ? 'css/styles-rtl.css' : 'css/styles.css';
    stylesCss.attr('href', uri);
    rtlSwitch[0].checked = modeRTL;
  });

  rtlSwitch.on('change', function(){

    var isRTL = this.checked;

    $.localStorage.set('modeRTL', isRTL);
    // reload is required to initialize plugins in RTL mode
    window.location.reload();

  });


})(window.jQuery);

// END Settings Handler
// ----------------------------------- 