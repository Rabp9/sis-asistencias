'use strict';

/**
 * @ngdoc service
 * @name sisAsistenciasApp.horariosService
 * @description
 * # horariosService
 * Factory in the sisAsistenciasApp.
 */
angular.module('sisAsistenciasApp')
.factory('horariosService', function ($resource) {
    return $resource(angular.module('sisAsistenciasApp').pathLocation + 'horarios/:id.json');
});