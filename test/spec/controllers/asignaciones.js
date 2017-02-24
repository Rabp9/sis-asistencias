'use strict';

describe('Controller: AsignacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('sisAsistenciasApp'));

  var AsignacionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AsignacionesCtrl = $controller('AsignacionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AsignacionesCtrl.awesomeThings.length).toBe(3);
  });
});
