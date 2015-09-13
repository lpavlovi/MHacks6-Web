define([
    'angular'
], function() {
  'use strict';
  return ['$http', function($http) {
    var baseUrl = '/rest/tasks/new';
    this.postToBackend = function(data) {
      return $http.post(baseUrl, data);
    };
  }];
});
