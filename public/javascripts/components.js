(function() {

  angular
    .module('app')
    .component('waNav', {
      controller: 'WaNavController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waNav.html'
    })
    .component('waSourcesMainPage', {
      controller: 'WaSourcesMainPageController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waSourcesMainPage.html'
    })
    .component('waSource', {
      bindings: {
        'source': '='
      },
      controller: 'WaSourceController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waSource.html'
    })
    .component('waSourceNewPage', {
      controller: 'WaSourceNewPageController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waSourceNewPage.html'
    })
    .component('waSourceShow', {
      controller: 'WaSourceShowController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waSourceShow.html'
    })
    .component('waSourceEdit', {
      controller: 'WaSourceEditController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waSourceEditPage.html'
    })
    .component('waSplash', {
      controller: 'WaSplashController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waSplashPage.html'
    })
    .component('waProfile', {
      controller: 'WaProfileController',
      templateUrl: 'views/waProfilePage.html'
    })
    .component('waProfileEdit', {
      controller: 'WaProfileEditController',
      templateUrl: 'views/waProfileEditPage.html'
    })
    .component('waPontificator', {
      controller: 'WaPontificatorController',
      templateUrl: 'views/waPontificator.html'
    })
    .component('waSourcesFilterSort', {
      bindings: {
        'sortOption': '=',
        'sortOptions': '=',
        'filter': '='
      },
      controller: 'WaSourcesFilterSortController',
      templateUrl: 'views/waSourcesFilterSort.html'
    })


})();
