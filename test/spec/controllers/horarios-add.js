'use strict';

describe('Controller: HorariosAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sisAsistenciasApp'));

  var HorariosAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HorariosAddCtrl = $controller('HorariosAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HorariosAddCtrl.awesomeThings.length).toBe(3);
  });
});
