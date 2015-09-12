define([
  'angular',
  './second-controller'
], function (angular, secondCtrl) {
  'use strict';
  console.log('IN: second-module');
  var app = angular.module('secondModule', []);
  app.controller('secondCtrl', secondCtrl);
  return app;
});
