'use strict';

/**
 * @ngdoc service
 * @name sisAsistenciasApp.condicionesService
 * @description
 * # condicionesService
 * Factory in the sisAsistenciasApp.
 */
angular.module('sisAsistenciasApp')
.factory('condicionesService', function ($resource) {
    return $resource(angular.module('sisAsistenciasApp').pathLocation + 'condiciones/:id.json');
});