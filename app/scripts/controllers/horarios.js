'use strict';

/**
 * @ngdoc function
 * @name sisAsistenciasApp.controller:HorariosCtrl
 * @description
 * # HorariosCtrl
 * Controller of the sisAsistenciasApp
 */
angular.module('sisAsistenciasApp')
.controller('HorariosCtrl', function ($scope, i18nService, $uibModal, horariosService, $q) {
    $scope.highlightFilteredHeader = function( row, rowRenderIndex, col, colRenderIndex ) {
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
        enableCellEditOnFocus: true,
        exporterCsvFilename: 'myFile.csv',
        exporterPdfDefaultStyle: {fontSize: 9},
        exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
        exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
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
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        columnDefs: [
            { displayName: 'Código', name: 'id', field: 'id', headerCellClass: $scope.highlightFilteredHeader, enableCellEdit: false, width: '10%', minWidth: '40' },
            { displayName: 'Descripción',  name: 'descripcion', field: 'descripcion', enableCellEditOnFocus: false,  minWidth: '160', headerCellClass: $scope.highlightFilteredHeader },
            { displayName: 'Hora de Inicio',  name: 'horaInicio', field: 'horaInicio', enableCellEditOnFocus: false, width: '24%', minWidth: '160', headerCellClass: $scope.highlightFilteredHeader },
            { displayName: 'Hora Final',  name: 'horaFin', field: 'horaFin', enableCellEditOnFocus: false, width: '24%', minWidth: '160', headerCellClass: $scope.highlightFilteredHeader },
        ]
    };
    
    $scope.saveRow = function(rowEntity) {
        $scope.loading_edit = true;
        var promise = $q.defer();
        $scope.gridApi.rowEdit.setSavePromise( rowEntity, promise.promise );
        horariosService.save(rowEntity, function(data) {
            if (data.message.type === 'success') {
                promise.resolve();
                $scope.loading_edit = false;
            } else {
                promise.reject();
            }
        });
        return promise.promise;
    };
    
    $scope.gridOptions.onRegisterApi = function(gridApi){
        //set gridApi on scope
        $scope.gridApi = gridApi;
        gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
    };
       
    $scope.showHorariosAdd = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/horarios-add.html',
            controller: 'HorariosAddCtrl',
            backdrop: false
        });
        
        modalInstance.result.then(function (data) {
            $scope.gridOptions.data.push(data.horario);
        });
    };
    
    horariosService.get(function(data) {
        $scope.gridOptions.data = data.horarios;
    });
    
    $scope.menuOptions = [
        ['Deshabilitar', function ($itemScope, $event, modelValue, text, $li) {
            var horario = $itemScope.row.entity;
            horario.estado_id = 2;
            horariosService.save(horario, function(data) {
                if (data.message.type === 'success') {
                    $scope.gridOptions.data = $scope.gridOptions.data.filter(function(horario) {
                        return horario.id != data.horario.dni;
                    });
                } else {
                    
                }
            });
        }],
    ];
});
