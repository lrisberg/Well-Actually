(function() {

  angular
    .module('app')
    .component('waLoginForm', {
      controller: 'WaLoginFormController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waLoginForm.html'
    })
    .component('waSignupForm', {
      controller: 'WaSignupFormController',
      controllerAs: '$ctrl',
      templateUrl: 'views/waSignupForm.html'
    })

})();
