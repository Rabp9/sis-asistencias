'use strict';

/**
 * @ngdoc service
 * @name sisAsistenciasApp.registrosService
 * @description
 * # registrosService
 * Factory in the sisAsistenciasApp.
 */
angular.module('sisAsistenciasApp')
.factory('registrosService', function ($resource) {
    return $resource(angular.module('sisAsistenciasApp').pathLocation + 'registros/:id.json', {}, {
        getByTrabajadorAndFechas: {
            method: 'GET',
            url: angular.module('sisAsistenciasApp').pathLocation + "registros/getByTrabajadorAndFechas/:trabajador_dni/:fechaInicio/:fechaFin.json"
        }
    });
});