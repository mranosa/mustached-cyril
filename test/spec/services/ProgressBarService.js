'use strict';

describe('Service: ProgressBarService', function () {

  // load the service's module
  beforeEach(module('mustachedCyrilApp'));

  // instantiate service
  var ProgressBarService;
  beforeEach(inject(function(_ProgressBarService_) {
    ProgressBarService = _ProgressBarService_;
  }));

  it('should do something', function () {
    expect(!!ProgressBarService).toBe(true);
  });

});
