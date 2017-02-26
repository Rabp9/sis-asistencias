'use strict';

/**
 * @ngdoc service
 * @name sisAsistenciasApp.horariosTrabajadoresService
 * @description
 * # horariosTrabajadoresService
 * Factory in the sisAsistenciasApp.
 */
angular.module('sisAsistenciasApp')
.factory('horariosTrabajadoresService', function ($resource) {
    return $resource(angular.module('sisAsistenciasApp').pathLocation + 'horarios_trabajadores/:id.json');
});