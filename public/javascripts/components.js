(function() {

  angular
    .module('app')
    .component('waMain', {
      controller: function($http) {
        const vm = this;

        vm.greeting = 'hello';

        vm.$onInit = function() {
          $http.get('/sources').then((response) => {
            console.log(response);
            vm.sources = response.data;
          })
        }
      },
      templateUrl: 'views/waMain.html'
    })
})();
