Router.configure({
    layoutTemplate: 'layout'
        // loadingTemplate: 'loading'
});


// Default route
Router.route('/', function() {
    Router.go('dashboardv1');
});


// Dashboard
Router.map(function() {
    this.route('dashboardv1', function() {
        this.render('dashboardv1');
    });
    this.route('dashboardv2', function() {
        this.render('dashboardv2');
    });
    this.route('dashboardv3', function() {
        this.render('dashboardv3');
    });
});

// Widgets
Router.route('widgets', function() {
    this.render('widgets');
});

// Layouts
Router.map(function() {
    this.route('dashboardh', function() {
        this.layout('layouth');
        this.render('dashboardh');
    });
});

// Elements
Router.map(function() {
    this.route('buttons', function() {
        this.render('buttons');
    });
    this.route('notifications', function() {
        this.render('notifications');
    });
    this.route('sweetalert', function() {
        this.render('sweetalert');
    });
    this.route('tour', function() {
        this.render('tour');
    });
    this.route('carousel', function() {
        this.render('carousel');
    });
    this.route('spinners', function() {
        this.render('spinners');
    });
    this.route('animations', function() {
        this.render('animations');
    });
    this.route('dropdown-animations', function() {
        this.render('dropdownAnimations');
    });
    this.route('nestable', function() {
        this.render('nestable');
    });
    this.route('sortable', function() {
        this.render('sortable');
    });
    this.route('panels', function() {
        this.render('panels');
    });
    this.route('portlets', function() {
        this.render('portlets');
    });
    this.route('grid', function() {
        this.render('grid');
    });
    this.route('grid-masonry', function() {
        this.render('gridMasonry');
    });
    this.route('typo', function() {
        this.render('typo');
    });
    this.route('icons-font', function() {
        this.render('iconsFont');
    });
    this.route('icons-weather', function() {
        this.render('iconsWeather');
    });
    this.route('colors', function() {
        this.render('colors');
    });
});

// Forms
Router.map(function() {
    this.route('form-standard', function() {
        this.render('formStandard');
    });
    this.route('form-extended', function() {
        this.render('formExtended');
    });
    this.route('form-validation', function() {
        this.render('formValidation');
    });
    this.route('form-wizard', function() {
        this.render('formWizard');
    });
    this.route('form-upload', function() {
        this.render('formUpload');
    });
    this.route('form-xeditable', function() {
        this.render('formXeditable');
    });
    this.route('form-imagecrop', function() {
        this.render('formImagecrop');
    });
});

// Charts
Router.map(function() {
    this.route('chart-flot', function() {
        this.render('chartFlot');
    });
    this.route('chart-radial', function() {
        this.render('chartRadial');
    });
    this.route('chart-chartjs', function() {
        this.render('chartChartJs');
    });
    this.route('chart-rickshaw', function() {
        this.render('chartRickshaw');
    });
    this.route('chart-morris', function() {
        this.render('chartMorris');
    });
    this.route('chart-chartist', function() {
        this.render('chartChartist');
    });
});

// Tables
Router.map(function() {
    this.route('table-standard', function() {
        this.render('tableStandard');
    });
    this.route('table-extended', function() {
        this.render('tableExtended');
    });
    this.route('table-datatable', function() {
        this.render('tableDatatable');
    });
    this.route('table-jqgrid', function() {
        this.render('tableJqgrid');
    });
});

// Maps
Router.map(function() {
    this.route('maps-google', function() {
        this.render('mapsGoogle');
    });
    this.route('maps-vector', function() {
        this.render('mapsVector');
    });
});

// Pages
Router.map(function() {
    this.route('login', function() {
        this.render('login');
        this.layout('layoutPages');
    });
    this.route('register', function() {
        this.render('register');
        this.layout('layoutPages');
    });
    this.route('recover', function() {
        this.render('recover');
        this.layout('layoutPages');
    });
    this.route('lock', function() {
        this.render('lock');
        this.layout('layoutPages');
    });
    this.route('blank', function() {
        this.render('blank');
    });
    this.route('notfound', function() {
        this.render('notfound');
        this.layout('layoutPages');
    });
    this.route('maintenance', function() {
        this.render('maintenance');
        this.layout('layoutPages');
    });
    this.route('internalerror', function() {
        this.render('error500');
        this.layout('layoutPages');
    });
});

// Extras
Router.map(function() {

    this.route('contacts', function() {
        this.render('contacts');
    });
    this.route('contact-details', function() {
        this.render('contactDetails');
    });
    this.route('projects', function() {
        this.render('projects');
    });
    this.route('project-details', function() {
        this.render('projectDetails');
    });
    this.route('team-viewer', function() {
        this.render('teamViewer');
    });
    this.route('social-board', function() {
        this.render('socialBoard');
    });
    this.route('vote-links', function() {
        this.render('voteLinks');
    });
    this.route('bug-tracker', function() {
        this.render('bugTracker');
    });
    this.route('faq', function() {
        this.render('faq');
    });
    this.route('help-center', function() {
        this.render('helpCenter');
    });
    this.route('followers', function() {
        this.render('followers');
    });
    this.route('settings', function() {
        this.render('settings');
    });
    this.route('plans', function() {
        this.render('plans');
    });
    this.route('file-manager', function() {
        this.render('fileManager');
    });
    this.route('mailbox', function() {
        this.render('mailbox');
    });
    this.route('timeline', function() {
        this.render('timeline');
    });
    this.route('calendar', function() {
        this.render('calendar');
    });
    this.route('invoice', function() {
        this.render('invoice');
    });
    this.route('search', function() {
        this.render('search');
    });
    this.route('todo', function() {
        this.render('todo');
    });
    this.route('profile', function() {
        this.render('profile');
    });
});

// Blog
Router.map(function() {
    this.route('blog-list', function() {
        this.render('blogList');
    });
    this.route('blog-post', function() {
        this.render('blogPost');
    });
    this.route('blog-articles', function() {
        this.render('blogArticles');
    });
    this.route('blog-article-view', function() {
        this.render('blogArticleView');
    });
});

// eCommerce
Router.map(function() {
    this.route('ecommerce-orders', function() {
        this.render('ecommerceOrders');
    });
    this.route('ecommerce-order-view', function() {
        this.render('ecommerceOrderView');
    });
    this.route('ecommerce-products', function() {
        this.render('ecommerceProducts');
    });
    this.route('ecommerce-product-view', function() {
        this.render('ecommerceProductView');
    });
    this.route('ecommerce-checkout', function() {
        this.render('ecommerceCheckout');
    });
});

// Forum
Router.map(function() {
    this.route('forum-categories', function() {
        this.render('forumCategories');
    });
    this.route('forum-topics', function() {
        this.render('forumTopics');
    });
    this.route('forum-discussion', function() {
        this.render('forumDiscussion');
    });
});

// Documentation
Router.route('documentation', function() {
    this.render('documentation');
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
