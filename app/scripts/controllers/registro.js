'use strict';

/**
 * @ngdoc function
 * @name sisAsistenciasApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the sisAsistenciasApp
 */
angular.module('sisAsistenciasApp')
.controller('RegistroCtrl', function ($scope, trabajadoresService, registrosService) {
    trabajadoresService.get(function(data) {
        $scope.trabajadores = data.trabajadores;
    });
    $('#dvContainer').removeClass('container');
    $('#dvContainer').addClass('container-fluid');
    
    $scope.showFechas = function(fechaInicio, fechaFin, trabajadorSelected) {
        fechaInicio = formatDate(fechaInicio);
        fechaFin = formatDate(fechaFin);
        if (fechaInicio === undefined || fechaFin === undefined || trabajadorSelected === undefined) {
            return;
        }
        registrosService.getByTrabajadorAndFechas({
            trabajador_dni: trabajadorSelected.dni,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin
        }, function(data) {
            $scope.registros = data.registros;
        });
    };
    
    function formatDate(fecha) {
        if (fecha === undefined) {
            return undefined;
        }
        return fecha.getFullYear() + '-' + str_pad((fecha.getMonth() + 1), '00') + '-' + str_pad(fecha.getDate(), '00');
    }
    
    function str_pad(str, pad) {
        return pad.substring(0, (pad.length - str.toString().length)) + str;
    }
});