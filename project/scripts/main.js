require.config({
  baseUrl: '../bower_components',
  paths: {
    'angular' : 'angular/angular',
    'uiRouter' : 'angular-ui-router/release/angular-ui-router.min',
    'require' : 'requirejs/require'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    uiRouter: {
      deps: ['angular']
    }
  },
  deps: ['../scripts/bootstrap']
});
