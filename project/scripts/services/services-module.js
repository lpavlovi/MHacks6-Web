define([
  'angular',
  './date-service',
//'./websocket-service',
  './rest-service',
  './firebase-service'
//], function (ng, ds, ws, rs, fb) {
], function (ng, ds, rs, fb) {
  'use strict';
  console.log('IN: services-module');
  var app = angular.module('servicesModule', []);
  app.factory('dateService', ds);
// app.service('webSocketService', ws);
  app.service('firebaseService', fb);
  app.service('restService', rs);
  return app;
});
