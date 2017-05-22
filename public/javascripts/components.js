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
    .component('waNewSourceForm', {
      controller: 'WaNewSourceFormController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waNewSourceForm.html'
    })
    .component('waShowSource', {
      controller: 'WaShowSourceController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waShowSource.html'
    })
    .component('waEditSource', {
      controller: 'WaEditSourceController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waEdit.html'
    })


})();
