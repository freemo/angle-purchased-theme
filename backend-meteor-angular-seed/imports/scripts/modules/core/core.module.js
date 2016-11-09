(function() {
    'use strict';

    angular
        .module('app.core', [
            'angular-meteor',
            'ngRoute',
            'ngAnimate',
            'ngStorage',
            'ngCookies',
            'pascalprecht.translate',
            'ui.bootstrap',
            'ui.router',
            'oc.lazyLoad',
            'cfp.loadingBar',
            'ngSanitize',
            'ngResource',

            // ui.utils
            'ui.event',
            'ui.indeterminate',
            'ui.mask',
            'ui.scroll',
            'ui.validate'
        ]);
})();