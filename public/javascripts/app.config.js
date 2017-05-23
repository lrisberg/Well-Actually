(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'splash',
        url: '/',
        component: 'waSplash'
      })
      .state({
        name: 'sources',
        url: '/sources',
        component: 'waMain',
      })
      .state({
        name: 'sourceNew',
        url: '/sources/new',
        component: 'waSourceNewPage'
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
      .state({
        name: 'profile',
        //add id later
        url: '/profile',
        component: 'waProfile'
      })
      .state({
        name: 'profileEdit',
        //add id later
        url: '/profile/edit',
        component: 'waProfileEdit'
      })
  }

}());
