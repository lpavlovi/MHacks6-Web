define([
  'angular',
  './date-service',
  './firebase-service'
], function (ng, dateService, firebaseService) {
  'use strict';
  console.log('IN: services-module');
  var app = angular.module('servicesModule', []);
  app.factory('dateService', dateService);
  app.service('firebaseService', firebaseService);
  return app;
});
