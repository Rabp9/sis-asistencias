'use strict';

/**
 * @ngdoc service
 * @name sisAsistenciasApp.condicionesService
 * @description
 * # condicionesService
 * Factory in the sisAsistenciasApp.
 */
angular.module('sisAsistenciasApp')
  .factory('condicionesService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
