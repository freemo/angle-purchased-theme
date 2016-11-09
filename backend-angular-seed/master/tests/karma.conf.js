
var relBaseFiles = require('../vendor.base.json').map(function(path) {
    return '../' + path;
});

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns
    basePath: '..',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [].concat(
        require('../vendor.base.json'),
        '../app/js/app.js',
        './bower_components/angular-mocks/angular-mocks.js',
        './tests/unit/*.js'
    ),

    // test result reporter
    reporters: ['progress'],

    // web server port
    port: 3011,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,
    // logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    singleRun: false
  });
};