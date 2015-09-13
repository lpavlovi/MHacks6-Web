define([
    'angular'
], function() {
  'use strict';
  return ['$http', function($http) {
    var baseUrl = 'localhost:3000/';
    this.postToBackend = function(data) { 
      return $http.post(baseUrl, data);
    };
  }];
});
