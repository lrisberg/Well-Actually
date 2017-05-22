(function() {

  angular
    .module('app')
    .controller('WaNavController', WaNavController)
    .controller('WaNewSourceFormController', WaNewSourceFormController)


    function WaNavController() {

    }

    function WaNewSourceFormController($http) {
      const vm = this;

      vm.createSource = function() {
        $http.post('/api/sources', vm.newSource).then((response) => {
          console.log(response);
          vm.sources.push(response.data);
        })
        vm.showForm = false;
        delete vm.newSource;
      }
    }
})();
