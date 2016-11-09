'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        // 'public/lib/bootstrap/dist/css/bootstrap.css',
        // 'public/lib/bootstrap/dist/css/bootstrap-theme.css'
      ],
      js: [
        'public/lib/jquery/dist/jquery.js',
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        // 'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/dist/angular-file-upload.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',

        ///////

        // 'public/lib/angular/angular.js',
        'public/lib/angular-route/angular-route.js',
        'public/lib/angular-cookies/angular-cookies.js',
        // 'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-touch/angular-touch.js',
        // 'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/ngstorage/ngStorage.js',
        'public/lib/angular-ui-utils/index.js',
        'public/lib/angular-ui-mask/dist/mask.js',
        'public/lib/angular-ui-event/dist/event.js',
        'public/lib/angular-ui-validate/dist/validate.js',
        'public/lib/angular-ui-indeterminate/dist/indeterminate.js',
        'public/lib/angular-ui-scrollpoint/dist/scrollpoint.js',
        'public/lib/angular-ui-scroll/dist/ui-scroll.js',
        'public/lib/angular-ui-uploader/dist/uploader.js',
        'public/lib/angular-sanitize/angular-sanitize.js',
        // 'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-translate/angular-translate.js',
        'public/lib/angular-translate-loader-url/angular-translate-loader-url.js',
        'public/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
        'public/lib/angular-translate-storage-local/angular-translate-storage-local.js',
        'public/lib/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
        'public/lib/oclazyload/dist/ocLazyLoad.js',
        // 'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-loading-bar/build/loading-bar.js',
        'public/lib/jquery.browser/dist/jquery.browser.js',
        'public/lib/angular-dynamic-locale/dist/tmhDynamicLocale.js',
        'public/lib/matchMedia/matchMedia.js'
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/bootstrap.css',
      'modules/*/client/css/core.css',
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/policies/*.js',
    views: 'modules/*/server/views/*.html'
  }
};
