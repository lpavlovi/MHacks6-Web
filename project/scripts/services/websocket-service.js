define([
    'angular',
    'socketio'
], function(ng, io) {
  console.log('EYYY');
  var socket = io.connect();
  return ['$http', function($http) {

  }];
});

