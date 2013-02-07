'use strict';

describe('Controller: ComplaintsCtrl', function() {

  // load the controller's module
  beforeEach(module('mustachedCyrilApp'));

  var ComplaintsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    ComplaintsCtrl = $controller('ComplaintsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
