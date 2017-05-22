(function() {

  angular
    .module('app')
    .component('waEdit', {
      controller: 'WaEditController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waEdit.html'
    })

    .component('waNav', {
      controller: 'WaNavController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waNav.html'
    })
    .component('waNewSourceForm', {
      bindings: {
        'sources': '=',
        'showForm': '='
      },
      controller: 'WaNewSourceFormController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waNewSourceForm.html'
    })
    .component('waSource', {
      bindings: {
        'source': '='
      },
      controller: 'WaSourceController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waSource.html'
    })
    .component('waMain', {
      controller: 'WaMainController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waMain.html'
    })
    .component('waShowSource', {
      controller: 'WaShowSourceController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waShowSource.html'
    })

})();
