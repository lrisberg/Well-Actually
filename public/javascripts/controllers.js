(function() {

    angular
      .module('app')
      .controller('WaNavController', WaNavController)
      .controller('WaMainController', WaMainController)
      .controller('WaSourceController', WaSourceController)
      .controller('WaNewSourceFormController', WaNewSourceFormController)
      .controller('WaShowSourceController', WaShowSourceController)
      .controller('WaEditSourceController', WaEditSourceController)

    function WaNavController() {

    }

    function WaMainController($http) {
      const vm = this;

      vm.$onInit = function() {
        $http.get('/api/sources').then((response) => {
          vm.sources = response.data;
          console.log(vm.sources);
        })
      }

      vm.toggleForm = function() {
        vm.showForm = !vm.showForm;
      }
    }

    function WaSourceController() {
      const vm = this;

    }

    function WaNewSourceFormController($http, $state) {
      const vm = this;

      vm.createSource = function() {
        $http.post('/api/sources', vm.newSource).then((response) => {
          vm.sources.push(response.data);
        })
        delete vm.newSource
        $state.go('dashboard')
      }
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
