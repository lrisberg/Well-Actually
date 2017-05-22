(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'dashboard',
        url: '/',
        component: 'waMain',
      })
      .state({
        name: 'showSource',
        url: '/sources/:id',
        component: 'waShowSource'
      })
      .state({
        name: 'editSource',
        url: '/sources/:id/edit',
        component: 'waEdit'
      })
  }

}());
