'use strict';

describe('Service: horariosTrabajadoresService', function () {

  // load the service's module
  beforeEach(module('sisAsistenciasApp'));

  // instantiate service
  var horariosTrabajadoresService;
  beforeEach(inject(function (_horariosTrabajadoresService_) {
    horariosTrabajadoresService = _horariosTrabajadoresService_;
  }));

  it('should do something', function () {
    expect(!!horariosTrabajadoresService).toBe(true);
  });

});
