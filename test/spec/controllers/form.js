'use strict';

describe('Controller: FormCtrl', function() {

  // load the controller's module
  beforeEach(module('mustachedCyrilApp'));

  var FormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    FormCtrl = $controller('FormCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
