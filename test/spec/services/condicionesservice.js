'use strict';

describe('Service: condicionesService', function () {

  // load the service's module
  beforeEach(module('sisAsistenciasApp'));

  // instantiate service
  var condicionesService;
  beforeEach(inject(function (_condicionesService_) {
    condicionesService = _condicionesService_;
  }));

  it('should do something', function () {
    expect(!!condicionesService).toBe(true);
  });

});
