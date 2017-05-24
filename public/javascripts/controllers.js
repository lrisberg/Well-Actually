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

  function WaSplashController($state, WaService) {
    const vm = this;

    vm.toggleLoginForm = function() {
      vm.showLoginForm = !vm.showLoginForm;
    }

    vm.toggleSignupForm = function() {
      vm.showSignupForm = !vm.showSignupForm;
    }

    vm.submitLogin = function() {
      console.log(vm.loginDetails);
      WaService.login(vm.loginDetails).then((response) => {
        console.log(response);
      })
      $state.go('sources')
    }

    vm.submitSignup = function() {
      console.log(vm.signupDetails);
      $state.go('sources')
    }
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

  function WaSourcesMainPageController(WaService) {
    const vm = this;

    vm.$onInit = function() {
      WaService.getSources().then((response) => {
        vm.sources = response;
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

  WaSourcesMainPageController.$inject = ['WaService']

  function WaSourceController() {
    const vm = this;
  }

  function makeArray(string) {
    return string.split(', ');
  }

  function WaSourceNewPageController(WaService, $state) {
    const vm = this;
    vm.newSource = { tags: [] };

    vm.createSource = function() {
      WaService.createSource(vm.newSource).then((response) => {
        $state.go('sources');
      });
    };
  }

  function WaSourceShowController(WaService, $stateParams) {
    const vm = this;

    vm.$onInit = function() {
      WaService.getSource($stateParams.id).then((response) => {
        vm.source = response;
      })
    }

    vm.addWin = function() {
      WaService.addWin($stateParams.id).then((response) => {
        vm.source.wins += 1;
      })

    }

    vm.loseFriend = function() {
      WaService.loseFriend($stateParams.id).then((response) => {
        vm.source.friends_lost += 1;
      })
    }
  }

  function WaSourceEditController(WaService, $stateParams, $state) {
    const vm = this;

    vm.$onInit = function() {
      WaService.getSource($stateParams.id).then((response) => {
        vm.editSource = response;
      })
    }

    vm.updateSource = function() {
      WaService.editSource($stateParams.id, vm.editSource).then((response) => {
        $state.go('sources')
      })
    }

    vm.deleteSource = function() {
      WaService.deleteSource($stateParams.id).then((response) => {
        $state.go('sources')
      })
    }
  }

  function WaProfileController() {

  }

  function WaProfileEditController() {

  }

  function WaPontificatorController(WaService) {
    const vm = this;

    vm.getSynonyms = function(word) {
      WaService.getSynonyms(word).then((response) => {
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
