'use strict';

/**
 * @ngdoc function
 * @name sisAsistenciasApp.controller:AsignarHorariosCtrl
 * @description
 * # AsignarHorariosCtrl
 * Controller of the sisAsistenciasApp
 */
angular.module('sisAsistenciasApp')
.controller('AsignarHorariosCtrl', function ($scope, $uibModalInstance, trabajador, horariosService, horariosTrabajadoresService) {
    $scope.trabajador = trabajador;
    
    horariosService.get(function(data) {
        $scope.horarios = data.horarios;
        $scope.horarioSelected = $scope.horarios.filter(function(horario) {
            return horario.id === trabajador.horariosTrabajador.horario.id;
        })[0];
    });
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    
    $scope.saveAsignarHorario = function(trabajador, horarioSelected, boton) {
        $('#' + boton).text('Guardando...');
        $('#' + boton).addClass('disabled');
        $('#' + boton).prop('disabled', true);
        
        var horarios_trabajador = {};
        horarios_trabajador.trabajador_dni = trabajador.dni;
        horarios_trabajador.horario_id = horarioSelected.id;
        
        horariosTrabajadoresService.save(horarios_trabajador, function(data) {
            $('#' + boton).removeClass('disabled');
            $('#' + boton).prop('disabled', false);
            $uibModalInstance.close(data);
        });
    };
});