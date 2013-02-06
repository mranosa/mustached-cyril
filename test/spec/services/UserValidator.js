'use strict';

describe('Service: UserValidator', function () {

  // load the service's module
  beforeEach(module('mustachedCyrilApp'));

  // instantiate service
  var UserValidator;
  beforeEach(inject(function(_UserValidator_) {
    UserValidator = _UserValidator_;
  }));

  it('should do something', function () {
    expect(!!UserValidator).toBe(true);
  });

});
