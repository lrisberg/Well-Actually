(function() {

  angular
    .module('app')
    .component('waMain', {
      controller: function($http) {
        const vm = this;

        vm.$onInit = function() {
          $http.get('/sources').then((response) => {
            vm.sources = response.data;
          })
        }

        vm.toggleForm = function() {
          vm.showForm = !vm.showForm;
        }

        vm.createSource = function() {
          $http.post('/sources', vm.newSource).then((response) => {
            vm.sources.push(response.data);
          })
          vm.showForm = false;
          delete vm.newSource;
        }
      },
      templateUrl: 'views/waMain.html'
    })

    .component('waSource', {
      controller: function($http, $stateParams) {
        const vm = this;

        vm.$onInit = function() {
          $http.get(`/sources/${$stateParams.id}`).then((response) => {
            vm.source = response.data;
          })
        }
      },

      templateUrl: 'views/waSource.html'
    })

    .component('waEdit', {
      controller: function($http, $stateParams, $state) {
        const vm = this;

        vm.$onInit = function() {
          $http.get(`/sources/${$stateParams.id}`).then((response) => {
            vm.editSource = response.data;
          })
        }

        vm.updateSource = function() {
          $http.patch(`/sources/${$stateParams.id}`, vm.editSource).then((response) => {
            $state.go('dashboard')
          })
        }

        vm.deleteSource = function() {
          $http.delete(`/sources/${$stateParams.id}`).then((response) => {
            $state.go('dashboard')
          })
        }
      },

      templateUrl: 'views/waEdit.html'
    })
})();
