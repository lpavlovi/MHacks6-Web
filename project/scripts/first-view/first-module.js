define([
  'angular',
  './first-controller'
], function (angular, sc) {
  'use strict';
  console.log('IN: serve-module');
  var app = angular.module('firstModule', []);
  app.controller('firstCtrl', sc);
  return app;
});
