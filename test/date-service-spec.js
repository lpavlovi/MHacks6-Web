'use strict';

define([
  'angular',
  'angularMocks',
  'services/date-service'
],
function(ng, mock, dateService) {
  describe('Services Testing', function() {
    // beforeEach(mock.module(services));
    var ds;

    beforeEach(mock.inject(function($injector){
      ds = $injector.instantiate(dateService, {});
    }));

    it('The date returned should be defined', function() {
      ds.setNow();
      console.log(ds.getNow());
      expect(ds.getNow()).toBeDefined();
    });
  });
});
