(function() {

  angular
    .module('app')
    .service('WaService', WaService)

    function WaService($http) {
      const BASE_URL = '/api/sources';

      this.getSources = function() {
        return $http.get(BASE_URL).then((response) => {
          return response.data;
        });
      }

      this.getSource = function(sourceId) {
        return $http.get(`${BASE_URL}/${sourceId}`).then((response) => {
          return response.data;
        })
      }

      this.createSource = function(newSource) {
        return $http.post(BASE_URL, newSource).then((response) => {
          return response.data;
        })
      }
    }

    WaService.$inject = ["$http"];

})();
