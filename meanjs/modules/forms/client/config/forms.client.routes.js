(function() {
    'use strict';

    angular
        .module('app.forms')
        .config(appRoutes);
    appRoutes.$inject = ['$stateProvider', 'RouteHelpersProvider'];

    function appRoutes($stateProvider, helper) {

        $stateProvider
            .state('app.form-standard', {
                url: '/form/standard',
                title: 'Form Standard',
                templateUrl: 'modules/forms/client/views/form-standard.client.view.html'
            })
            .state('app.form-extended', {
                url: '/form/extended',
                title: 'Form Extended',
                templateUrl: 'modules/forms/client/views/form-extended.client.view.html',
                resolve: helper.resolveFor('colorpicker.module', 'codemirror', 'moment', 'taginput', 'inputmask', 'localytics.directives', 'ui.bootstrap-slider', 'ngWig', 'filestyle', 'summernote')
            })
            .state('app.form-validation', {
                url: '/form/validation',
                title: 'Form Validation',
                templateUrl: 'modules/forms/client/views/form-validation.client.view.html',
                resolve: helper.resolveFor('ui.select', 'taginput', 'inputmask', 'localytics.directives')
            })
            .state('app.form-wizard', {
                url: '/form/wizard',
                title: 'Form Wizard',
                templateUrl: 'modules/forms/client/views/form-wizard.client.view.html'
            })
            .state('app.form-upload', {
                url: '/form/upload',
                title: 'Form upload',
                templateUrl: 'modules/forms/client/views/form-upload.client.view.html',
                resolve: helper.resolveFor('angularFileUpload', 'filestyle')
            })
            .state('app.form-xeditable', {
                url: '/form/xeditable',
                templateUrl: 'modules/forms/client/views/form-xeditable.client.view.html',
                resolve: helper.resolveFor('xeditable')
            })
            .state('app.form-imagecrop', {
                url: '/form/imagecrop',
                templateUrl: 'modules/forms/client/views/form-imagecrop.client.view.html',
                resolve: helper.resolveFor('ngImgCrop', 'filestyle')
            })
            .state('app.form-uiselect', {
                url: '/form/uiselect',
                templateUrl: 'modules/forms/client/views/form-uiselect.client.view.html',
                controller: 'uiSelectController',
                controllerAs: 'uisel',
                resolve: helper.resolveFor('ui.select')
            });

    }
})();