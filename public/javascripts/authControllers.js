(function() {

  angular
    .module('app')
    .controller('WaLoginFormController',
      WaLoginFormController)
    .controller('WaSignupFormController', WaSignupFormController)

  function WaLoginFormController($state, AuthService) {
    const vm = this;

    vm.toggleLoginForm = function() {
      vm.showLoginForm = !vm.showLoginForm;
    }

    vm.submitLogin = function() {
      AuthService.login(vm.loginDetails).then((token) => {
        AuthService.setCurrentUser(token);
        $state.go('sources')
      })
    }
  }

  function WaSignupFormController($state, AuthService) {
    const vm = this;

    vm.toggleSignupForm = function() {
      vm.showSignupForm = !vm.showSignupForm;
    }

    vm.submitSignup = function() {
      let submitUser = {
        user: {
          email: vm.signupDetails.email,
          password: vm.signupDetails.password,
          password_confirmation: vm.signupDetails.password
        }
      };
      AuthService.signup(JSON.stringify(submitUser)).then((response) => {
        AuthService.login(vm.signupDetails).then((token) => {
          AuthService.setCurrentUser(token);
          $state.go('sources')
        })
      });
    }
  }


})();
