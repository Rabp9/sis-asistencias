'use strict';

/**
 * @ngdoc function
 * @name sisAsistenciasApp.controller:AsignacionesCtrl
 * @description
 * # AsignacionesCtrl
 * Controller of the sisAsistenciasApp
 */
angular.module('sisAsistenciasApp')
.controller('AsignacionesCtrl', function ($scope, i18nService, $uibModal, $q, trabajadoresService) {
    $scope.highlightFilteredHeader = function(row, rowRenderIndex, col, colRenderIndex ) {
        if( col.filters[0].term ){
            return 'header-filtered';
        } else {
            return '';
        }
    };
    $scope.lang = 'es';
    
    $scope.gridOptions = {
        showGridFooter: true,
        enableFiltering: true,
        enableSorting: true,
        enableGridMenu: true,
        exporterCsvFilename: 'myFile.csv',
        exporterPdfDefaultStyle: {fontSize: 9},
        exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
        exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
        exporterPdfHeader: { text: 'My Header', style: 'headerStyle' },
        exporterPdfFooter: function ( currentPage, pageCount ) {
            return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        },
        exporterPdfCustomFormatter: function ( docDefinition ) {
            docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
            docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
            return docDefinition;
        },
        exporterPdfOrientation: 'portrait',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth: 500,
        exporterCsvLinkElement: angular.element(document.querySelectorAll('.custom-csv-link-location')),
        columnDefs: [
            { displayName: 'DNI', name: 'dni', field: 'dni', headerCellClass: $scope.highlightFilteredHeader, width: '12%', minWidth: '80' },
            { displayName: 'Trabajador',  name: 'full_name', field: 'full_name', width: '38%', minWidth: '200', headerCellClass: $scope.highlightFilteredHeader },
            { displayName: 'Horario',  name: 'horarioDescripcion', field: 'horariosTrabajador.horario.descripcion', width: '24%', minWidth: '160', headerCellClass: $scope.highlightFilteredHeader },
            { displayName: 'Detalle',  name: 'detalle', field: 'horariosTrabajador.horario.detalleHorario', headerCellClass: $scope.highlightFilteredHeader }
        ]
    };
    
    trabajadoresService.get(function(data) {
        $scope.gridOptions.data = data.trabajadores;
    });
    
    $scope.menuOptions = [
        ['Asignar Horario', function ($itemScope, $event, modelValue, text, $li) {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/asignar-horarios.html',
                controller: 'AsignarHorariosCtrl',
                backdrop: false,
                resolve: {
                    trabajador: function() {
                        return $itemScope.row.entity;
                    }
                }
            });

            modalInstance.result.then(function (data) {
                angular.forEach($scope.gridOptions.data, function(value, key) {
                    if (value.dni === data.horariosTrabajador.trabajador_dni) {
                        value.horariosTrabajador = data.horariosTrabajador;
                    }
                });
            });
        }]
    ];
});
