define([
  'angular',
  './rest-service',
], function (ng, rs) {
  'use strict';
  console.log('IN: services-module');
  var app = angular.module('servicesModule', []);
  app.service('restService', rs);
  return app;
});
