'use strict';

/**
 * @ngdoc function
 * @name sisAsistenciasApp.controller:TrabajadoresCtrl
 * @description
 * # TrabajadoresCtrl
 * Controller of the sisAsistenciasApp
 */
angular.module('sisAsistenciasApp')
.controller('TrabajadoresCtrl', function ($scope, i18nService, $uibModal, trabajadoresService, $q) {
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
            { displayName: 'DNI', name: 'dni', field: 'dni', headerCellClass: $scope.highlightFilteredHeader, enableCellEdit: false, width: '12%', minWidth: '80' },
            { displayName: 'Apellido Paterno',  name: 'apellidoPaterno', field: 'apellidoPaterno', enableCellEditOnFocus: false, width: '24%', minWidth: '160', headerCellClass: $scope.highlightFilteredHeader },
            { displayName: 'Apellido Materno',  name: 'apellidoMaterno', field: 'apellidoMaterno', enableCellEditOnFocus: false, width: '24%', minWidth: '160', headerCellClass: $scope.highlightFilteredHeader },
            { displayName: 'Nombres',  name: 'nombres', field: 'nombres', enableCellEditOnFocus: false, headerCellClass: $scope.highlightFilteredHeader }
        ]
    };
    
    $scope.saveRow = function(rowEntity) {
        $scope.loadingEdit = true;
        var promise = $q.defer();
        $scope.gridApi.rowEdit.setSavePromise( rowEntity, promise.promise );
        trabajadoresService.save(rowEntity, function(data) {
            if (data.message.type === 'success') {
                promise.resolve();
                $scope.loadingEdit = false;
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
       
    $scope.showTrabajadoresAdd = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/trabajadores-add.html',
            controller: 'TrabajadoresAddCtrl',
            backdrop: false
        });
        
        modalInstance.result.then(function (data) {
            $scope.gridOptions.data.push(data.trabajador);
        });
    };
    
    trabajadoresService.get(function(data) {
        $scope.gridOptions.data = data.trabajadores;
    });
    
    $scope.menuOptions = [
        ['Deshabilitar', function ($itemScope, $event, modelValue, text, $li) {
            var trabajador = $itemScope.row.entity;
            trabajador.estado_id = 2;
            trabajadoresService.save(trabajador, function(data) {
                if (data.message.type === 'success') {
                    $scope.gridOptions.data = $scope.gridOptions.data.filter(function(trabajador) {
                        return trabajador.dni !== data.trabajador.dni;
                    });
                } else {
                    
                }
            });
        }]
    ];
});
