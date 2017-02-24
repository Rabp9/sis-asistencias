'use strict';

describe('Service: horariosService', function () {

  // load the service's module
  beforeEach(module('sisAsistenciasApp'));

  // instantiate service
  var horariosService;
  beforeEach(inject(function (_horariosService_) {
    horariosService = _horariosService_;
  }));

  it('should do something', function () {
    expect(!!horariosService).toBe(true);
  });

});
