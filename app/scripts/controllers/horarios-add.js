'use strict';

/**
 * @ngdoc function
 * @name sisAsistenciasApp.controller:HorariosAddCtrl
 * @description
 * # HorariosAddCtrl
 * Controller of the sisAsistenciasApp
 */
angular.module('sisAsistenciasApp')
.controller('HorariosAddCtrl', function ($scope, $uibModalInstance, horariosService) {
    $scope.horario = {};

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveHorario = function(horario, boton) {
        $('#' + boton).text('Guardando...');
        $('#' + boton).addClass('disabled');
        $('#' + boton).prop('disabled', true);
     
        horariosService.save(horario, function(data) {
            $('#' + boton).removeClass('disabled');
            $('#' + boton).prop('disabled', false);
            $uibModalInstance.close(data);
        });
    };
});