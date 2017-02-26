'use strict';

describe('Service: registrosService', function () {

  // load the service's module
  beforeEach(module('sisAsistenciasApp'));

  // instantiate service
  var registrosService;
  beforeEach(inject(function (_registrosService_) {
    registrosService = _registrosService_;
  }));

  it('should do something', function () {
    expect(!!registrosService).toBe(true);
  });

});
