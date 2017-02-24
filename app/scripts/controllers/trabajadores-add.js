'use strict';

/**
 * @ngdoc function
 * @name sisAsistenciasApp.controller:TrabajadoresAddCtrl
 * @description
 * # TrabajadoresAddCtrl
 * Controller of the sisAsistenciasApp
 */
angular.module('sisAsistenciasApp')
.controller('TrabajadoresAddCtrl', function ($scope, $uibModalInstance, trabajadoresService) {
    $scope.trabajador = {};

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveTrabajador = function(trabajador, boton) {
        $('#' + boton).addClass('disabled');
        $('#' + boton).prop('disabled', true);
     
        trabajadoresService.save(trabajador, function(data) {
            $('#' + boton).removeClass('disabled');
            $('#' + boton).prop('disabled', false);
            $uibModalInstance.close(data);
        });
    };
});