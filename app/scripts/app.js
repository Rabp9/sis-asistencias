'use strict';

/**
 * @ngdoc overview
 * @name sisAsistenciasApp
 * @description
 * # sisAsistenciasApp
 *
 * Main module of the application.
 */
angular
.module('sisAsistenciasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'ui.grid',
    'ui.grid.exporter', 
    'ui.grid.selection',
    'ui.grid.cellNav',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.resizeColumns', 
    'ui.grid.moveColumns',
    'ui.grid.exporter',
    'ui.bootstrap.contextMenu',
    'angularValidator'
])
.config(function($stateProvider, $urlRouterProvider) {
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Home'
    };

    var trabajadoresState = {
        name: 'trabajadores',
        url: '/trabajadores',
        templateUrl: 'views/trabajadores.html',
        controller: 'TrabajadoresCtrl',
        controllerAs: 'trabajadores',
        title: 'Trabajadores'
    };
    
    var horariosState = {
        name: 'horarios',
        url: '/horarios',
        templateUrl: 'views/horarios.html',
        controller: 'HorariosCtrl',
        controllerAs: 'horarios',
        title: 'Horarios'
    };
    
    var asignacionesState = {
        name: 'asignaciones',
        url: '/asignaciones',
        templateUrl: 'views/asignaciones.html',
        controller: 'AsignacionesCtrl',
        controllerAs: 'asignaciones',
        title: 'Asignaciones'
    };
    
    var registroState = {
        name: 'registro',
        url: '/registro',
        templateUrl: 'views/registro.html',
        controller: 'RegistroCtrl',
        controllerAs: 'registro',
        title: 'Registro'
    };
    
    var reporteState = {
        name: 'reporte',
        url: '/reporte',
        templateUrl: 'views/reporte.html',
        controller: 'ReporteCtrl',
        controllerAs: 'reporte',
        title: 'reporte'
    };
    
    $stateProvider.state(mainState);
    $stateProvider.state(trabajadoresState);
    $stateProvider.state(horariosState);
    $stateProvider.state(asignacionesState);
    $stateProvider.state(registroState);
    $stateProvider.state(reporteState);
    $urlRouterProvider.when('', '/');
}).pathLocation = 'http://localhost:8000/sis-asistencias-backend/';