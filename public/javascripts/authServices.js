(function() {

  angular
    .module('app')
    .service('AuthService', AuthService)

  function AuthService($http, $window) {

    this.login = function(user) {
      return $http.post('/authenticate', user).then((response) => {
        return response.data;
      });
    }

    this.setCurrentUser = function(token) {
      $window.localStorage.setItem("token", JSON.stringify(token));
    }

    this.signup = function(user) {
      return $http.post('/api/users', user).then((response) => {
        return response.data;
      });
    }

    this.editProfile = function(userId, user) {
      return $http.patch(`/api/users/${userId}`, user).then((response) => {
        return response.data;
      })
    }

    this.logout = function() {
      $window.localStorage.clear();
    }
  }

  AuthService.$inject = ["$http", "$window"];

})();
