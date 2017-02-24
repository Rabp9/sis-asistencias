'use strict';

/**
 * @ngdoc service
 * @name sisAsistenciasApp.trabajadoresService
 * @description
 * # trabajadoresService
 * Factory in the sisAsistenciasApp.
 */
angular.module('sisAsistenciasApp')
  .factory('trabajadoresService', function () {
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
