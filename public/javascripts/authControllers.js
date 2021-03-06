(function() {

  angular
    .module('app')
    .controller('WaLoginFormController',
      WaLoginFormController)
    .controller('WaSignupFormController', WaSignupFormController)

  function WaLoginFormController($state, AuthService) {
    const vm = this;

    // vm.toggleLoginForm = function() {
    //   vm.showLoginForm = !vm.showLoginForm;
    // }

    vm.submitLogin = function() {
      vm.error = false;
      AuthService.login(vm.loginDetails).then((token) => {
        AuthService.setCurrentUser(token);
        delete vm.loginDetails
        $state.go('sources')
      }, (errorResponse) => {
        vm.error = true;
      });
    }
  }

  function WaSignupFormController($state, AuthService) {
    const vm = this;


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
          delete vm.signupDetails
          $state.go('sources')
        })
      });
    }
  }


})();
