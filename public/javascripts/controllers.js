(function() {

    angular
      .module('app')
      .controller('WaSplashController', WaSplashController)
      .controller('WaNavController', WaNavController)
      .controller('WaMainController', WaMainController)
      .controller('WaSourceController', WaSourceController)
      .controller('WaSourceNewPageController', WaSourceNewPageController)
      .controller('WaSourceShowController', WaSourceShowController)
      .controller('WaSourceEditController', WaSourceEditController)
      .controller('WaProfileController', WaProfileController)
      .controller('WaProfileEditController', WaProfileEditController)
      .controller('WaPontificatorController', WaPontificatorController)

    function WaSplashController($state) {
      const vm = this;

      vm.toggleLoginForm = function() {
        vm.showLoginForm = !vm.showLoginForm;
      }

      vm.toggleSignupForm = function() {
        vm.showSignupForm = !vm.showSignupForm;
      }

      vm.submitLogin = function() {
        console.log(vm.loginDetails);
        $state.go('sources')
      }

      vm.submitSignup = function() {
        console.log(vm.signupDetails);
        $state.go('sources')
      }
    }

    function WaNavController() {

    }

    function WaMainController(WaService) {
      const vm = this;

      vm.$onInit = function() {
        WaService.getSources().then((response) => {
          vm.sources = response;
        });
      }
    }

    WaMainController.$inject = ['WaService']

    function WaSourceController() {
      const vm = this;
    }

    function WaSourceNewPageController(WaService, $state) {
      const vm = this;

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
})();
