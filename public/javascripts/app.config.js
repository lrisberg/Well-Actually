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
        name: 'newSource',
        url: '/sources/new',
        component: 'waNewSourcePage'
      })
      .state({
        name: 'sourceShow',
        url: '/sources/:id',
        component: 'waSourceShow'
      })
      .state({
        name: 'sourceEdit',
        url: '/sources/:id/edit',
        component: 'waSourceEdit'
      })
  }

}());
