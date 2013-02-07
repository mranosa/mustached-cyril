'use strict';

describe('Controller: SummaryCtrl', function() {

  // load the controller's module
  beforeEach(module('mustachedCyrilApp'));

  var SummaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    SummaryCtrl = $controller('SummaryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
