export default () => {

    // FILESTYLE
    if($.fn.filestyle)
      $('.filestyle').each(function() {
        $(this).filestyle($(this).data());
    });

};
