'use strict';

describe('Controller: ReporteCtrl', function () {

  // load the controller's module
  beforeEach(module('sisAsistenciasApp'));

  var ReporteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReporteCtrl = $controller('ReporteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReporteCtrl.awesomeThings.length).toBe(3);
  });
});
