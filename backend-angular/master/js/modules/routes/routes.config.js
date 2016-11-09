/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper){

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/app/dashboard');

        //
        // Application Routes
        // -----------------------------------
        $stateProvider
          .state('app', {
              url: '/app',
              abstract: true,
              templateUrl: helper.basepath('app.html'),
              resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
          })
          .state('app.dashboard', {
              url: '/dashboard',
              title: 'Dashboard',
              templateUrl: helper.basepath('dashboard.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'weather-icons')
          })
          .state('app.dashboard_v2', {
              url: '/dashboard_v2',
              title: 'Dashboard v2',
              templateUrl: helper.basepath('dashboard_v2.html'),
              controller: 'DashboardV2Controller',
              controllerAs: 'dash2',
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
          })
          .state('app.dashboard_v3', {
              url: '/dashboard_v3',
              title: 'Dashboard v3',
              controller: 'DashboardV3Controller',
              controllerAs: 'dash3',
              templateUrl: helper.basepath('dashboard_v3.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'vector-map', 'vector-map-maps')
          })
          .state('app.widgets', {
              url: '/widgets',
              title: 'Widgets',
              templateUrl: helper.basepath('widgets.html'),
              resolve: helper.resolveFor('loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'ui.map')
          })
          .state('app.buttons', {
              url: '/buttons',
              title: 'Buttons',
              templateUrl: helper.basepath('buttons.html')
          })
          .state('app.colors', {
              url: '/colors',
              title: 'Colors',
              templateUrl: helper.basepath('colors.html')
          })
          .state('app.localization', {
              url: '/localization',
              title: 'Localization',
              templateUrl: helper.basepath('localization.html')
          })
          .state('app.infinite-scroll', {
              url: '/infinite-scroll',
              title: 'Infinite Scroll',
              templateUrl: helper.basepath('infinite-scroll.html'),
              resolve: helper.resolveFor('infinite-scroll')
          })
          .state('app.navtree', {
              url: '/navtree',
              title: 'Nav Tree',
              templateUrl: helper.basepath('nav-tree.html'),
              resolve: helper.resolveFor('angularBootstrapNavTree')
          })
          .state('app.nestable', {
              url: '/nestable',
              title: 'Nestable',
              templateUrl: helper.basepath('nestable.html'),
              resolve: helper.resolveFor('ng-nestable')
          })
          .state('app.sortable', {
              url: '/sortable',
              title: 'Sortable',
              templateUrl: helper.basepath('sortable.html'),
              resolve: helper.resolveFor('ui.sortable')
          })
          .state('app.notifications', {
              url: '/notifications',
              title: 'Notifications',
              templateUrl: helper.basepath('notifications.html')
          })
          .state('app.carousel', {
              url: '/carousel',
              title: 'Carousel',
              templateUrl: helper.basepath('carousel.html'),
              resolve: helper.resolveFor('angular-carousel')
          })
          .state('app.ngdialog', {
              url: '/ngdialog',
              title: 'ngDialog',
              templateUrl: helper.basepath('ngdialog.html'),
              resolve: angular.extend(helper.resolveFor('ngDialog'),{
                tpl: function() { return { path: helper.basepath('ngdialog-template.html') }; }
              }),
              controller: 'DialogIntroCtrl'
          })
          .state('app.sweetalert', {
            url: '/sweetalert',
            title: 'SweetAlert',
            templateUrl: helper.basepath('sweetalert.html'),
            resolve: helper.resolveFor('oitozero.ngSweetAlert')
          })
          .state('app.tour', {
            url: '/tour',
            title: 'Tour',
            templateUrl: helper.basepath('tour.html'),
            resolve: helper.resolveFor('bm.bsTour')
          })
          .state('app.interaction', {
              url: '/interaction',
              title: 'Interaction',
              templateUrl: helper.basepath('interaction.html')
          })
          .state('app.spinners', {
              url: '/spinners',
              title: 'Spinners',
              templateUrl: helper.basepath('spinners.html'),
              resolve: helper.resolveFor('loaders.css', 'spinkit')
          })
          .state('app.dropdown-animations', {
              url: '/dropdown-animations',
              title: 'Dropdown Animations',
              templateUrl: helper.basepath('dropdown-animations.html')
          })
          .state('app.panels', {
              url: '/panels',
              title: 'Panels',
              templateUrl: helper.basepath('panels.html')
          })
          .state('app.portlets', {
              url: '/portlets',
              title: 'Portlets',
              templateUrl: helper.basepath('portlets.html'),
              resolve: helper.resolveFor('ui.sortable')
          })
          .state('app.maps-google', {
              url: '/maps-google',
              title: 'Maps Google',
              templateUrl: helper.basepath('maps-google.html'),
              resolve: helper.resolveFor('loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'ui.map')
          })
          .state('app.maps-vector', {
              url: '/maps-vector',
              title: 'Maps Vector',
              templateUrl: helper.basepath('maps-vector.html'),
              controller: 'VectorMapController',
              controllerAs: 'vmap',
              resolve: helper.resolveFor('vector-map', 'vector-map-maps')
          })
          .state('app.grid', {
              url: '/grid',
              title: 'Grid',
              templateUrl: helper.basepath('grid.html')
          })
          .state('app.grid-masonry', {
              url: '/grid-masonry',
              title: 'Grid Masonry',
              templateUrl: helper.basepath('grid-masonry.html')
          })
          .state('app.grid-masonry-deck', {
              url: '/grid-masonry-deck',
              title: 'Grid Masonry',
              templateUrl: helper.basepath('grid-masonry-deck.html'),
              resolve: helper.resolveFor('spinkit', 'akoenig.deckgrid')
          })
          .state('app.typo', {
              url: '/typo',
              title: 'Typo',
              templateUrl: helper.basepath('typo.html')
          })
          .state('app.icons-font', {
              url: '/icons-font',
              title: 'Icons Font',
              templateUrl: helper.basepath('icons-font.html'),
              resolve: helper.resolveFor('icons')
          })
          .state('app.icons-weather', {
              url: '/icons-weather',
              title: 'Icons Weather',
              templateUrl: helper.basepath('icons-weather.html'),
              resolve: helper.resolveFor('weather-icons', 'skycons')
          })
          .state('app.form-standard', {
              url: '/form-standard',
              title: 'Form Standard',
              templateUrl: helper.basepath('form-standard.html')
          })
          .state('app.form-extended', {
              url: '/form-extended',
              title: 'Form Extended',
              templateUrl: helper.basepath('form-extended.html'),
              resolve: helper.resolveFor('colorpicker.module', 'codemirror', 'moment', 'taginput','inputmask','localytics.directives', 'ui.bootstrap-slider', 'ngWig', 'filestyle', 'summernote')
          })
          .state('app.form-validation', {
              url: '/form-validation',
              title: 'Form Validation',
              templateUrl: helper.basepath('form-validation.html'),
              resolve: helper.resolveFor('ui.select', 'taginput','inputmask','localytics.directives')
          })
          .state('app.form-wizard', {
              url: '/form-wizard',
              title: 'Form Wizard',
              templateUrl: helper.basepath('form-wizard.html')
          })
          .state('app.form-upload', {
              url: '/form-upload',
              title: 'Form upload',
              templateUrl: helper.basepath('form-upload.html'),
              resolve: helper.resolveFor('angularFileUpload', 'filestyle')
          })
          .state('app.form-xeditable', {
              url: '/form-xeditable',
              templateUrl: helper.basepath('form-xeditable.html'),
              resolve: helper.resolveFor('xeditable')
          })
          .state('app.form-imagecrop', {
              url: '/form-imagecrop',
              templateUrl: helper.basepath('form-imagecrop.html'),
              resolve: helper.resolveFor('ngImgCrop', 'filestyle')
          })
          .state('app.form-uiselect', {
              url: '/form-uiselect',
              templateUrl: helper.basepath('form-uiselect.html'),
              controller: 'uiSelectController',
              controllerAs: 'uisel',
              resolve: helper.resolveFor('ui.select')
          })
          .state('app.chart-flot', {
              url: '/chart-flot',
              title: 'Chart Flot',
              templateUrl: helper.basepath('chart-flot.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
          })
          .state('app.chart-radial', {
              url: '/chart-radial',
              title: 'Chart Radial',
              templateUrl: helper.basepath('chart-radial.html'),
              resolve: helper.resolveFor('classyloader', 'ui.knob', 'easypiechart')
          })
          .state('app.chart-js', {
              url: '/chart-js',
              title: 'Chart JS',
              templateUrl: helper.basepath('chart-js.html'),
              resolve: helper.resolveFor('chartjs')
          })
          .state('app.chart-rickshaw', {
              url: '/chart-rickshaw',
              title: 'Chart Rickshaw',
              templateUrl: helper.basepath('chart-rickshaw.html'),
              resolve: helper.resolveFor('angular-rickshaw')
          })
          .state('app.chart-morris', {
              url: '/chart-morris',
              title: 'Chart Morris',
              templateUrl: helper.basepath('chart-morris.html'),
              resolve: helper.resolveFor('morris')
          })
          .state('app.chart-chartist', {
              url: '/chart-chartist',
              title: 'Chart Chartist',
              templateUrl: helper.basepath('chart-chartist.html'),
              resolve: helper.resolveFor('angular-chartist')
          })
          .state('app.table-standard', {
              url: '/table-standard',
              title: 'Table Standard',
              templateUrl: helper.basepath('table-standard.html')
          })
          .state('app.table-extended', {
              url: '/table-extended',
              title: 'Table Extended',
              templateUrl: helper.basepath('table-extended.html')
          })
          .state('app.table-datatable', {
              url: '/table-datatable',
              title: 'Table Datatable',
              templateUrl: helper.basepath('table-datatable.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.table-xeditable', {
              url: '/table-xeditable',
              templateUrl: helper.basepath('table-xeditable.html'),
              resolve: helper.resolveFor('xeditable')
          })
          .state('app.table-ngtable', {
              url: '/table-ngtable',
              templateUrl: helper.basepath('table-ngtable.html'),
              resolve: helper.resolveFor('ngTable', 'ngTableExport')
          })
          .state('app.table-uigrid', {
              url: '/table-uigrid',
              templateUrl: helper.basepath('table-uigrid.html'),
              resolve: helper.resolveFor('ui.grid')
          })
          .state('app.table-angulargrid', {
              url: '/table-angulargrid',
              templateUrl: helper.basepath('table-angulargrid.html'),
              resolve: helper.resolveFor('angularGrid')
          })
          .state('app.contacts', {
              url: '/contacts',
              title: 'Contacts',
              templateUrl: helper.basepath('contacts.html')
          })
          .state('app.contact-details', {
              url: '/contact-details',
              title: 'Contact Details',
              templateUrl: helper.basepath('contact-details.html')
          })
          .state('app.projects', {
              url: '/projects',
              title: 'Projects',
              templateUrl: helper.basepath('projects.html')
          })
          .state('app.project-details', {
              url: '/project-details',
              title: 'Project Details',
              templateUrl: helper.basepath('project-details.html')
          })
          .state('app.team-viewer', {
              url: '/team-viewer',
              title: 'Team Viewer',
              templateUrl: helper.basepath('team-viewer.html')
          })
          .state('app.social-board', {
              url: '/social-board',
              title: 'Social Board',
              templateUrl: helper.basepath('social-board.html')
          })
          .state('app.vote-links', {
              url: '/vote-links',
              title: 'Vote Links',
              templateUrl: helper.basepath('vote-links.html')
          })
          .state('app.bug-tracker', {
              url: '/bug-tracker',
              title: 'Bug Tracker',
              templateUrl: helper.basepath('bug-tracker.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.faq', {
              url: '/faq',
              title: 'FAQ',
              templateUrl: helper.basepath('faq.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.help-center', {
              url: '/help-center',
              title: 'Help Center',
              templateUrl: helper.basepath('help-center.html')
          })
          .state('app.followers', {
              url: '/followers',
              title: 'Followers',
              templateUrl: helper.basepath('followers.html')
          })
          .state('app.settings', {
              url: '/settings',
              title: 'Settings',
              templateUrl: helper.basepath('settings.html'),
              resolve: helper.resolveFor('filestyle')
          })
          .state('app.plans', {
              url: '/plans',
              title: 'Plans',
              templateUrl: helper.basepath('plans.html')
          })
          .state('app.file-manager', {
              url: '/file-manager',
              title: 'File Manager',
              templateUrl: helper.basepath('file-manager.html'),
              resolve: helper.resolveFor('filestyle')
          })
          .state('app.timeline', {
              url: '/timeline',
              title: 'Timeline',
              templateUrl: helper.basepath('timeline.html')
          })
          .state('app.calendar', {
              url: '/calendar',
              title: 'Calendar',
              templateUrl: helper.basepath('calendar.html'),
              resolve: helper.resolveFor('moment', 'ui.calendar')
          })
          .state('app.invoice', {
              url: '/invoice',
              title: 'Invoice',
              templateUrl: helper.basepath('invoice.html')
          })
          .state('app.search', {
              url: '/search',
              title: 'Search',
              templateUrl: helper.basepath('search.html'),
              resolve: helper.resolveFor('moment', 'localytics.directives', 'ui.bootstrap-slider')
          })
          .state('app.todo', {
              url: '/todo',
              title: 'Todo List',
              templateUrl: helper.basepath('todo.html'),
              controller: 'TodoController',
              controllerAs: 'todo'
          })
          .state('app.profile', {
              url: '/profile',
              title: 'Profile',
              templateUrl: helper.basepath('profile.html'),
              resolve: helper.resolveFor('loadGoogleMapsJS', function() { return loadGoogleMaps(); }, 'ui.map')
          })
          .state('app.code-editor', {
              url: '/code-editor',
              templateUrl: helper.basepath('code-editor.html'),
              controller: 'CodeEditorController',
              controllerAs: 'coder',
              resolve: {
                  deps: helper.resolveFor('codemirror', 'ui.codemirror', 'codemirror-modes-web', 'angularBootstrapNavTree').deps,
                  filetree: ['LoadTreeService', function (LoadTreeService) {
                      return LoadTreeService.get().$promise.then(function (res) {
                          return res.data;
                      });
                  }]
              }
          })
          .state('app.template', {
              url: '/template',
              title: 'Blank Template',
              templateUrl: helper.basepath('template.html')
          })
          .state('app.documentation', {
              url: '/documentation',
              title: 'Documentation',
              templateUrl: helper.basepath('documentation.html'),
              resolve: helper.resolveFor('flatdoc')
          })
          // Forum
          // -----------------------------------
          .state('app.forum', {
              url: '/forum',
              title: 'Forum',
              templateUrl: helper.basepath('forum.html')
          })
          .state('app.forum-topics', {
              url: '/forum/topics/:catid',
              title: 'Forum Topics',
              templateUrl: helper.basepath('forum-topics.html')
          })
          .state('app.forum-discussion', {
              url: '/forum/discussion/:topid',
              title: 'Forum Discussion',
              templateUrl: helper.basepath('forum-discussion.html')
          })
          // Blog
          // -----------------------------------
          .state('app.blog', {
              url: '/blog',
              title: 'Blog',
              templateUrl: helper.basepath('blog.html'),
              resolve: helper.resolveFor('angular-jqcloud')
          })
          .state('app.blog-post', {
              url: '/post',
              title: 'Post',
              templateUrl: helper.basepath('blog-post.html'),
              resolve: helper.resolveFor('angular-jqcloud')
          })
          .state('app.articles', {
              url: '/articles',
              title: 'Articles',
              templateUrl: helper.basepath('blog-articles.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.article-view', {
              url: '/article/:id',
              title: 'Article View',
              templateUrl: helper.basepath('blog-article-view.html'),
              resolve: helper.resolveFor('ui.select', 'summernote')
          })
          // eCommerce
          // -----------------------------------
          .state('app.orders', {
              url: '/orders',
              title: 'Orders',
              templateUrl: helper.basepath('ecommerce-orders.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.order-view', {
              url: '/order-view',
              title: 'Order View',
              templateUrl: helper.basepath('ecommerce-order-view.html')
          })
          .state('app.products', {
              url: '/products',
              title: 'Products',
              templateUrl: helper.basepath('ecommerce-products.html'),
              resolve: helper.resolveFor('datatables')
          })
          .state('app.product-view', {
              url: '/product/:id',
              title: 'Product View',
              templateUrl: helper.basepath('ecommerce-product-view.html')
          })
          .state('app.checkout', {
              url: '/checkout',
              title: 'Checkout',
              templateUrl: helper.basepath('ecommerce-checkout.html')
          })
          // Mailbox
          // -----------------------------------
          .state('app.mailbox', {
              url: '/mailbox',
              title: 'Mailbox',
              abstract: true,
              templateUrl: helper.basepath('mailbox.html')
          })
          .state('app.mailbox.folder', {
              url: '/folder/:folder',
              title: 'Mailbox',
              templateUrl: helper.basepath('mailbox-inbox.html')
          })
          .state('app.mailbox.view', {
              url : '/{mid:[0-9]{1,4}}',
              title: 'View mail',
              templateUrl: helper.basepath('mailbox-view.html'),
              resolve: helper.resolveFor('ngWig')
          })
          .state('app.mailbox.compose', {
              url: '/compose',
              title: 'Mailbox',
              templateUrl: helper.basepath('mailbox-compose.html'),
              resolve: helper.resolveFor('ngWig')
          })
          //
          // Multiple level example
          // -----------------------------------
          .state('app.multilevel', {
              url: '/multilevel',
              title: 'Multilevel',
              template: '<h3>Multilevel Views</h3>' + '<div class="lead ba p">View @ Top Level ' + '<div ui-view=""></div> </div>'
          })
          .state('app.multilevel.level1', {
              url: '/level1',
              title: 'Multilevel - Level1',
              template: '<div class="lead ba p">View @ Level 1' + '<div ui-view=""></div> </div>'
          })
          .state('app.multilevel.level1.item', {
              url: '/item',
              title: 'Multilevel - Level1',
              template: '<div class="lead ba p"> Menu item @ Level 1</div>'
          })
          .state('app.multilevel.level1.level2', {
              url: '/level2',
              title: 'Multilevel - Level2',
              template: '<div class="lead ba p">View @ Level 2'  + '<div ui-view=""></div> </div>'
          })
          .state('app.multilevel.level1.level2.level3', {
              url: '/level3',
              title: 'Multilevel - Level3',
              template: '<div class="lead ba p">View @ Level 3' + '<div ui-view=""></div> </div>'
          })
          .state('app.multilevel.level1.level2.level3.item', {
              url: '/item',
              title: 'Multilevel - Level3 Item',
              template: '<div class="lead ba p"> Menu item @ Level 3</div>'
          })
          //
          // Single Page Routes
          // -----------------------------------
          .state('page', {
              url: '/page',
              templateUrl: 'app/pages/page.html',
              resolve: helper.resolveFor('modernizr', 'icons'),
              controller: ['$rootScope', function($rootScope) {
                  $rootScope.app.layout.isBoxed = false;
              }]
          })
          .state('page.login', {
              url: '/login',
              title: 'Login',
              templateUrl: 'app/pages/login.html'
          })
          .state('page.register', {
              url: '/register',
              title: 'Register',
              templateUrl: 'app/pages/register.html'
          })
          .state('page.recover', {
              url: '/recover',
              title: 'Recover',
              templateUrl: 'app/pages/recover.html'
          })
          .state('page.lock', {
              url: '/lock',
              title: 'Lock',
              templateUrl: 'app/pages/lock.html'
          })
          .state('page.404', {
              url: '/404',
              title: 'Not Found',
              templateUrl: 'app/pages/404.html'
          })
          .state('page.500', {
              url: '/500',
              title: 'Server error',
              templateUrl: 'app/pages/500.html'
          })
          .state('page.maintenance', {
              url: '/maintenance',
              title: 'Maintenance',
              templateUrl: 'app/pages/maintenance.html'
          })
          //
          // Horizontal layout
          // -----------------------------------
          .state('app-h', {
              url: '/app-h',
              abstract: true,
              templateUrl: helper.basepath( 'app-h.html' ),
              resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
          })
          .state('app-h.dashboard_v2', {
              url: '/dashboard_v2',
              title: 'Dashboard v2',
              templateUrl: helper.basepath('dashboard_v2.html'),
              controller: 'DashboardV2Controller',
              controllerAs: 'dash2',
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
          })
          //
          // CUSTOM RESOLVES
          //   Add your own resolves properties
          //   following this object extend
          //   method
          // -----------------------------------
          // .state('app.someroute', {
          //   url: '/some_url',
          //   templateUrl: 'path_to_template.html',
          //   controller: 'someController',
          //   resolve: angular.extend(
          //     helper.resolveFor(), {
          //     // YOUR RESOLVES GO HERE
          //     }
          //   )
          // })
          ;

    } // routesConfig

})();

