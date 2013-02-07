'use strict';

describe('Controller: InspectionCtrl', function() {

  // load the controller's module
  beforeEach(module('mustachedCyrilApp'));

  var InspectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    InspectionCtrl = $controller('InspectionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
