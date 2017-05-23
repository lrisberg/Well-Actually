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

    function WaSplashController() {
      const vm = this;

      vm.toggleLoginForm = function() {
        vm.showLoginForm = !vm.showLoginForm;
      }

      vm.toggleSignupForm = function() {
        vm.showSignupForm = !vm.showSignupForm;
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

      vm.getSynonyms = function(word) {
        WaService.getSynonyms(word).then((response) => {
          let data = response;
          for (key in data) {
            vm.synonyms = data[key].syn;
          }
        })
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
          $state.go('dashboard');
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
          $state.go('dashboard')
        })
      }

      vm.deleteSource = function() {
        WaService.deleteSource($stateParams.id).then((response) => {
          $state.go('dashboard')
        })
      }
    }

    function WaProfileController() {

    }
})();
