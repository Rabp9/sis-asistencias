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
    'ui.bootstrap.contextMenu'
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
    
    $stateProvider.state(mainState);
    $stateProvider.state(trabajadoresState);
    $stateProvider.state(horariosState);
    $urlRouterProvider.when('', '/');
}).path_location = 'http://localhost:8000/sis-asistencias-backend/';