'use strict';

/**
 * @ngdoc function
 * @name sisAsistenciasApp.controller:TrabajadoresCtrl
 * @description
 * # TrabajadoresCtrl
 * Controller of the sisAsistenciasApp
 */
angular.module('sisAsistenciasApp')
.controller('TrabajadoresCtrl', function ($scope, i18nService) {
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
            { displayName: 'DNI', name: 'dni', field: 'dni', headerCellClass: $scope.highlightFilteredHeader, enableCellEdit: false },
            { displayName: 'Apellido Paterno',  name: 'apellidoPaterno', field: 'apellidoPaterno', enableCellEditOnFocus: false, headerCellClass: $scope.highlightFilteredHeader },
            { displayName: 'Apellido Materno',  name: 'apellidoMaterno', field: 'apellidoMaterno', enableCellEditOnFocus: false, headerCellClass: $scope.highlightFilteredHeader },
            { displayName: 'Nombres',  name: 'nombres', field: 'nombres', enableCellEditOnFocus: false, headerCellClass: $scope.highlightFilteredHeader }
        ],
        data: [
            {
                dni: '70801887',
                apellidoPaterno: 'Carney',
                apellidoMaterno: 'Carney',
                nombres: 'Cox'
            },
            {
                dni: '25789452',
                apellidoPaterno: 'Cardasdney',
                apellidoMaterno: 'Cardasdney',
                nombres: 'Csadsadox'
            },
            {
                dni: '04878789',
                apellidoPaterno: 'Carneasdasday',
                apellidoMaterno: 'Carneasdasday',
                nombres: 'Codsadsa'
            }
        ]
    };
    
    $scope.saveRow = function( rowEntity ) {
        console.log(rowEntity);
    };
    
    $scope.gridOptions.onRegisterApi = function(gridApi){
        //set gridApi on scope
        $scope.gridApi = gridApi;
        gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
    };
});
