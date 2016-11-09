
exports.config = {
    // Port must match with the expressjs port (see gulpfile)
    baseUrl: 'http://localhost:4444',

    specs: ['e2e/**/*.js'],

    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]

};
