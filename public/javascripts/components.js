(function() {

  angular
    .module('app')
    .component('waMain', {
      controller: function($http) {
        const vm = this;

        vm.$onInit = function() {
          $http.get('/api/sources').then((response) => {
            vm.sources = response.data;
          })
        }

        vm.toggleForm = function() {
          vm.showForm = !vm.showForm;
        }
      },
      templateUrl: 'views/waMain.html'
    })

    .component('waSource', {
      controller: function($http, $stateParams) {
        const vm = this;

        vm.$onInit = function() {
          $http.get(`/api/sources/${$stateParams.id}`).then((response) => {
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
      },

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
    });

})();
