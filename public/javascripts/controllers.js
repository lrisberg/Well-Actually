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

    function WaMainController($http) {
      const vm = this;

      vm.$onInit = function() {
        $http.get('/api/sources').then((response) => {
          vm.sources = response.data;
        });
      }

      vm.getSynonyms = function(word) {
        $http.get(`http://words.bighugelabs.com/api/2/0d810a8b06d0aa825cc498c6f7805081/${word}/json`).then((response) => {
          let data = response.data;
          for (key in data) {
            vm.synonyms = response.data[key].syn;
          }
          // vm.nounSyns = response.data.noun.syn;
          // vm.verbSyns = response.data.verb.syn;
        })
      }
    }

    function WaSourceController() {
      const vm = this;
    }

    function WaNewSourcePageController($http, $state) {
      const vm = this;

      vm.createSource = function() {
        $http.post('/api/sources', vm.newSource).then((response) => {
          $state.go('dashboard');
        });
      };
    }

    function WaShowSourceController($http, $stateParams) {
      const vm = this;

      vm.$onInit = function() {
        $http.get(`/api/sources/${$stateParams.id}`).then((response) => {
          vm.source = response.data;
        })
      }
    }

    function WaEditSourceController($http, $stateParams, $state) {
      const vm = this;

      vm.$onInit = function() {
        $http.get(`/api/sources/${$stateParams.id}`).then((response) => {
          vm.editSource = response.data;
        })
      }

      vm.updateSource = function() {
        $http.patch(`/api/sources/${$stateParams.id}`, vm.editSource).then((response) => {
          $state.go('dashboard')
        })
      }

      vm.deleteSource = function() {
        $http.delete(`/api/sources/${$stateParams.id}`).then((response) => {
          $state.go('dashboard')
        })
      }
    }
})();
