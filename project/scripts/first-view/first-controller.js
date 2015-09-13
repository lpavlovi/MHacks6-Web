define([
  'angular'
], function() {
  'use strict';
  return ['$scope', 'restService', function($scope, restService) {
    $scope.hello = 'Hello World from first-controller';
    $scope.pushToBack = function() {
      var data = {
          name:$scope.in.name,
          priority:$scope.in.priority,
          description:$scope.in.description
        };
      restService.postToBackend(data).then(function(response){
        console.log(response);
      });
      console.log(data);
    };
  }];
});
