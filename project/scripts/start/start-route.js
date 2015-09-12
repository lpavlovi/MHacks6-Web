define([
  '../start/start-module'
], function(app) {
  'use strict';
  return app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    console.log('IN: start-route');
    $stateProvider
      .state('mainview', {
        url: '/',
        templateUrl: './scripts/first-view/first.html',
        controller: 'firstCtrl'
      });
      $urlRouterProvider
          .otherwise('/');
  }]);
});
