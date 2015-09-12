define([
    'angular',
    './start/start-module',
    './start/start-route'
], function (ng) {
  'use strict';
	ng.element().ready(function() {
    console.log('IN: bootstrap');
    ng.bootstrap(document, ['startModule']);
  });
});
