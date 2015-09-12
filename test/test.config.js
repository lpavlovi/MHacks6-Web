var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/spec\.js$/).test(file);
});


requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/project/scripts',

  paths: {
    'angular' : '/base/bower_components/angular/angular',
    'angularMocks' : '/base/bower_components/angular-mocks/angular-mocks',
    'uiRouter' : '/base/bower_components/angular-ui-router/release/angular-ui-router.min'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'uiRouter': {
      deps: ['angular']
    },
    'angularMocks': {
      deps: ['angular'],
      exports: 'angular.mock'
    }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
