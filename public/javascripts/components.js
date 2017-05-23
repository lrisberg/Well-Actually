(function() {

  angular
    .module('app')
    .component('waNav', {
      controller: 'WaNavController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waNav.html'
    })

    .component('waMain', {
      controller: 'WaMainController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waMain.html'
    })
    .component('waSource', {
      bindings: {
        'source': '='
      },
      controller: 'WaSourceController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waSource.html'
    })
    .component('waNewSourcePage', {
      controller: 'WaNewSourcePageController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waNewSourcePage.html'
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


})();
