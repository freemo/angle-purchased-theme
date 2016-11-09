'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core', [
  'app.routes',
  'app.sidebar',
  // 'app.navsearch',
  // 'app.preloader',
  'app.loadingbar',
  // 'app.translate',
  // 'app.settings',
  //'app.pages',
  'app.utils'
]);
ApplicationConfiguration.registerModule('core.admin', ['core']);
ApplicationConfiguration.registerModule('core.admin.routes', ['ui.router']);

