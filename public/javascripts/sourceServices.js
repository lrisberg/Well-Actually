(function() {

  angular
    .module('app')
    .service('SourceService', SourceService)

  function SourceService($http, $window) {
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

    this.editSource = function(sourceId, source) {
      return $http.patch(`${BASE_URL}/${sourceId}`, source).then((response) => {
        return response.data;
      })
    }

    this.deleteSource = function(sourceId) {
      return $http.delete(`${BASE_URL}/${sourceId}`).then((response) => {
        return response.data;
      })
    }

    this.getSynonyms = function(word) {
      return $http.get(`http://words.bighugelabs.com/api/2/0d810a8b06d0aa825cc498c6f7805081/${word}/json`).then((response) => {
        return response.data;
      })
    }

    this.addWin = function(sourceId) {
      return $http.post(`${BASE_URL}/${sourceId}/wins`).then((response) => {
        return response.data;
      })
    }

    this.loseFriend = function(sourceId) {
      return $http.delete(`${BASE_URL}/${sourceId}/lose_friend`).then((response) => {
        return response.data;
      })
    }

    this.getToken = function() {
      return $window.localStorage.token;
    }

    this.getUserId = function(token) {
      let payload = JSON.parse(token).auth_token.split(".")[1];
      let user_id = JSON.parse($window.atob(payload)).user_id;
      return user_id;
    }
  }

  SourceService.$inject = ["$http", "$window"];

})();
