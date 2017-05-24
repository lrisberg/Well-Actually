(function() {

  angular
    .module('app')
    .controller('WaLoginFormController',
      WaLoginFormController)
    .controller('WaSignupFormController', WaSignupFormController)

  function WaLoginFormController($state, WaService) {
    const vm = this;

    vm.toggleLoginForm = function() {
      vm.showLoginForm = !vm.showLoginForm;
    }

    vm.submitLogin = function() {
      WaService.login(vm.loginDetails).then((token) => {
        WaService.setCurrentUser(token);
        $state.go('sources')
      })
    }
  }

  function WaSignupFormController($state, WaService) {
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
      WaService.signup(JSON.stringify(submitUser)).then((response) => {
        WaService.login(vm.signupDetails).then((token) => {
          WaService.setCurrentUser(token);
          $state.go('sources')
        })
      });
    }
  }


})();
