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
        'source': '=',
        'selectedTags': '='
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
        'filter': '=',
        'selectedTags': '='
      },
      controller: 'WaSourcesFilterSortController',
      templateUrl: 'views/waSourcesFilterSort.html'
    })
    // .filterTags('selectedTags', function() {
    //   return function(sources, tags) {
    //     return sources.filter(function(source) {
    //
    //       for (let i in source.tags) {
    //         if (tags.indexOf(source.tags[i]) != -1) {
    //           return true;
    //         }
    //       }
    //       return false;
    //     });
    //   };
    // })
    .component('waTagFormInput', {
      bindings: {
        'tags': '='
      },
      controller: 'WaTagFormInputController',
      templateUrl: 'views/waTagFormInput.html'
    })


})();
