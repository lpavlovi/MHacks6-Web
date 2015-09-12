define([
  'angular'
], function() {
  'use strict';
  return ['$scope', 'dateService', function($scope, dateService) {
    console.log('IN: second-controller');
    $scope.hello = 'Hello World from second-controller';
    if(!dateService.getNow()) {
      dateService.setNow();
    }
    $scope.myDate = dateService.getNow();
    $scope.myOtherDate = dateService.getTimeFromNow(
      dateService.minutes(5)
    );
  }];
});
