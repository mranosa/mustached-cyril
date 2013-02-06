'use strict';

describe('Service: StringValidator', function () {

  // load the service's module
  beforeEach(module('mustachedCyrilApp'));

  // instantiate service
  var StringValidator;
  beforeEach(inject(function(_StringValidator_) {
    StringValidator = _StringValidator_;
  }));

  it('should do something', function () {
    expect(!!StringValidator).toBe(true);
  });

});
