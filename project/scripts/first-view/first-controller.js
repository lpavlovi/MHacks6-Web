define([
  'angular'
], function() {
  'use strict';
  return ['$scope', 'dateService', function($scope, dateService) {
    console.log('IN: Controller first-controller');
    $scope.hello = 'Hello World from first-controller';
    if(!dateService.getNow()) {
      dateService.setNow();
    }
    $scope.myDate = dateService.getNow();
    $scope.myOtherDate = dateService.getTimeFromNow(
      dateService.hours(5)
    );
    $scope.pushMe = function() {
      console.log('you pushed me');
    };
  }];
});
