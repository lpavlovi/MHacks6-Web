'use strict';

define([
  'angular',
  'angularMocks',
  'start/start-module'
], function(ng, ngMock, startMod) {
  describe('myApp.view1 module', function() {
    beforeEach(ngMock.module('startModule'));
    it('should be defined', function() {
      expect(startMod).toBeDefined();
    });
  });
});
