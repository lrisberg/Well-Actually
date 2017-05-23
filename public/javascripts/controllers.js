(function() {

    angular
      .module('app')
      .controller('WaNavController', WaNavController)
      .controller('WaMainController', WaMainController)
      .controller('WaSourceController', WaSourceController)
      .controller('WaNewSourcePageController', WaNewSourcePageController)
      .controller('WaShowSourceController', WaShowSourceController)
      .controller('WaEditSourceController', WaEditSourceController)

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

    function WaNewSourcePageController(WaService, $state) {
      const vm = this;

      vm.createSource = function() {
        WaService.createSource(vm.newSource).then((response) => {
          $state.go('dashboard');
        });
      };
    }

    function WaShowSourceController(WaService, $stateParams) {
      const vm = this;

      vm.$onInit = function() {
        WaService.getSource($stateParams.id).then((response) => {
          vm.source = response;
        })
      }
    }

    function WaEditSourceController(WaService, $stateParams, $state) {
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
})();
