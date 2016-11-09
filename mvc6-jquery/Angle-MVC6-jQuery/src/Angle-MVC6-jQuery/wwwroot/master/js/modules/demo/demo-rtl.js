// Toggle RTL mode for demo
// ----------------------------------- 


(function(window, document, $, undefined){

  $(function(){
    var maincss = $('#maincss');
    var bscss = $('#bscss');
    $('#chk-rtl').on('change', function(){
      
        maincss.attr('href', this.checked ? '/Content/app/css/app-rtl.css' : '/Content/app/css/app.css');
        bscss.attr('href', this.checked ? '/Content/app/css/bootstrap-rtl.css' : '/Content/app/css/bootstrap.css');

    });

  });

})(window, document, window.jQuery);