define([
  'angular',
  'uiRouter',
  '../first-view/first-module',
  '../services/services-module'
], function (ng) {
  'use strict';
  console.log('IN: start-module');
  return ng.module('startModule',
    [
      'ui.router',
      'firstModule',
      'servicesModule'
    ]);
});
