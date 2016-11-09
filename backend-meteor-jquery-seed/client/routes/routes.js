
Router.configure({
  layoutTemplate: 'layout'
  // loadingTemplate: 'loading'
});


// Default route
Router.route('/', function () {
    Router.go('singleview');
});

// Dashboard
Router.map(function(){
    this.route('singleview', function(){
        this.render('singleview');
    });
    this.route('submenu', function(){
        this.render('submenu');
    });
});

// Router transitions

Router.onAfterAction(function() {

    // Hide sidebar
    $('body').removeClass('aside-toggled');

    // Animate page transitions
    var ANIMATION_CLASS = 'fadeIn'; // see animate.css
    var ANIMATION_EVENTS = 'animationend webkitAnimationEnd oanimationend MSAnimationEnd';
    var wrapper = $('.content-wrapper').addClass('animated');

    wrapper
        // detach previous events
        .off(ANIMATION_EVENTS)
        // attach new event
        .on(ANIMATION_EVENTS, function() {
            // remove animation and prepare for next transition
            wrapper.removeClass(ANIMATION_CLASS)
        })
        // start animation
        .addClass(ANIMATION_CLASS);

})
