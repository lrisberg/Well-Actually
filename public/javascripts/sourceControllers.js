(function() {

  angular
    .module('app')
    .controller('WaSplashController', WaSplashController)
    .controller('WaNavController', WaNavController)
    .controller('WaSourcesMainPageController', WaSourcesMainPageController)
    .controller('WaSourceController', WaSourceController)
    .controller('WaSourceNewPageController', WaSourceNewPageController)
    .controller('WaSourceShowController', WaSourceShowController)
    .controller('WaSourceEditController', WaSourceEditController)
    .controller('WaProfileController', WaProfileController)
    .controller('WaProfileEditController', WaProfileEditController)
    .controller('WaPontificatorController', WaPontificatorController)
    .controller('WaSourcesFilterSortController', WaSourcesFilterSortController)
    .controller('WaTagFormInputController', WaTagFormInputController)

  function WaSplashController() {
    const vm = this;
  }

  function WaNavController($location) {
    const vm = this;

    // vm.location = $location;
    //
    // vm.path = vm.location.path();
    //
    // console.log("url", vm.location.path());
    //
    // vm.$onInit = function (){
    //   if(vm.location.path() === '/'){
    //     vm.showMenu = false;
    //   }else{
    vm.showMenu = true;
    //   }
    // }

    vm.retractMenu = function() {
      vm.menuToggler = false;
    }
  }

  function WaSourcesMainPageController(SourceService) {
    const vm = this;

    vm.$onInit = function() {

      let userId = SourceService.getUserId(SourceService.getToken());

      SourceService.getSources().then((response) => {
        let ownersSources = [];
        for (let i = 0; i < response.length; i++) {
          if (response[i].user_id === userId) {
            ownersSources.push(response[i]);
          }
        }
        vm.sources = ownersSources;
      });
    }

    vm.sortOptions = [{
        display: 'Newest',
        property: '-created_at'
      },
      {
        display: 'Oldest',
        property: 'created_at'
      },
      {
        display: 'Title',
        property: 'title'
      },
      {
        display: 'Wins',
        property: '-wins'
      }
    ];

    vm.sortOption = vm.sortOptions[0]

  }

  WaSourcesMainPageController.$inject = ['SourceService']

  function WaSourceController() {
    const vm = this;

  }



  function WaSourceNewPageController(SourceService, $state) {
    const vm = this;

    vm.newSource = {
      tags: []
    };

    vm.$onInit = function() {

    }

    vm.createSource = function() {
      vm.newSource.user_id = getUserId(getToken());
      SourceService.createSource(vm.newSource).then((response) => {
        $state.go('sources');
      });
    };
  }

  function WaSourceShowController(SourceService, $stateParams, $state) {
    const vm = this;

    let userId = SourceService.getUserId(SourceService.getToken())

    vm.$onInit = function() {
      SourceService.getSource($stateParams.id).then((response) => {
        if (response.user_id !== userId) {
          $state.go('sources');
        }
        else {
          vm.source = response;
        }
      })
    }

    vm.addWin = function() {
      SourceService.addWin($stateParams.id).then((response) => {
        vm.source.wins += 1;
      })

    }

    vm.loseFriend = function() {
      SourceService.loseFriend($stateParams.id).then((response) => {
        vm.source.friends_lost += 1;
      })
    }
  }

  function WaSourceEditController(SourceService, $stateParams, $state) {
    const vm = this;

    let userId = SourceService.getUserId(SourceService.getToken());

    vm.$onInit = function() {
      SourceService.getSource($stateParams.id).then((response) => {
        if (response.user_id !== userId) {
          $state.go('sources');
        }
        else {
          vm.editSource = response;
        }
      })
    }

    vm.updateSource = function() {
      SourceService.editSource($stateParams.id, vm.editSource).then((response) => {
        $state.go('sources')
      })
    }

    vm.deleteSource = function() {
      SourceService.deleteSource($stateParams.id).then((response) => {
        $state.go('sources')
      })
    }
  }

  function WaProfileController() {

  }

  function WaProfileEditController() {

  }

  function WaPontificatorController(SourceService) {
    const vm = this;

    vm.getSynonyms = function(word) {
      SourceService.getSynonyms(word).then((response) => {
        let data = response;
        for (key in data) {
          vm.synonyms = data[key].syn;
        }
      })
    }
  }

  function WaSourcesFilterSortController() {

  }

  function WaTagFormInputController() {
    const vm = this;

    vm.addTag = function(event) {
      event.preventDefault();
      vm.tags.push(vm.tagName);
      delete vm.tagName;
    }

    vm.removeTag = function(tag) {
      let index = vm.tags.indexOf(tag);
      vm.tags.splice(index, 1);
    }
  }
})();
