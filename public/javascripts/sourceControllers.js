(function() {

  angular
    .module('app')
    .controller('WaSplashController', WaSplashController)
    .controller('WaNavController', WaNavController)
    .controller('WaSourcesMainPageController', WaSourcesMainPageController)
    .controller('WaSourceController', WaSourceController)
    .controller('WaSourceNewPageController', WaSourceNewPageController)
    .controller('WaSourceShowController', WaSourceShowController)
    .controller('WaSourceEditController', WaSourceEditController)
    .controller('WaProfileController', WaProfileController)
    .controller('WaProfileEditController', WaProfileEditController)
    .controller('WaPontificatorController', WaPontificatorController)
    .controller('WaSourcesFilterSortController', WaSourcesFilterSortController)
    .controller('WaTagFormInputController', WaTagFormInputController)

  function WaSplashController() {
    const vm = this;

  }

  function WaNavController($location, AuthService, $state, SourceService) {
    const vm = this;

    let userId = SourceService.getUserId(SourceService.getToken());

    vm.user = {
      id: userId
    }

    vm.$onInit = function() {

      SourceService.getUser(userId).then((userData) => {
        vm.userPhoto = userData.photo
      })

      SourceService.getSources().then((response) => {
        let wins = 0;
        let lostFriends = 0;
        for (let i = 0; i < response.length; i++) {
          if (response[i].user_id === userId) {
            wins += response[i].wins
            lostFriends += response[i].friends_lost
          }
        }
        vm.wins = wins;
        vm.friendsLost = lostFriends
      });
    }

    vm.logout = function() {
      AuthService.logout();
      $state.go('splash')
    }

    // vm.location = $location;
    //
    // vm.path = vm.location.path();
    //
    // console.log("url", vm.location.path());
    //
    // vm.$onInit = function (){
    //   if(vm.location.path() === '/'){
    //     vm.showMenu = false;
    //   }else{
    vm.showMenu = true;
    //   }
    // }

    vm.retractMenu = function() {
      vm.menuToggler = false;
    }
  }

  function WaSourcesMainPageController(SourceService) {
    const vm = this;

    vm.$onInit = function() {

      let userId = SourceService.getUserId(SourceService.getToken());

      SourceService.getSources().then((response) => {
        let ownersSources = [];
        for (let i = 0; i < response.length; i++) {
          if (response[i].user_id === userId) {
            ownersSources.push(response[i]);
          }
        }
        vm.sources = ownersSources;
      });
    }

    vm.selectedTags = [];

    vm.sortOptions = [{
        display: 'Newest',
        property: '-created_at'
      },
      {
        display: 'Oldest',
        property: 'created_at'
      },
      {
        display: 'Title',
        property: 'title'
      },
      {
        display: 'Wins',
        property: '-wins'
      }
    ];

    vm.sortOption = vm.sortOptions[2]

  }

  WaSourcesMainPageController.$inject = ['SourceService']

  function WaSourceController() {
    const vm = this;

    vm.$onInit = function() {

      let abstract = vm.source.abstract;

      let abstractArray = abstract.split('\n');
      vm.abstractArray = abstractArray.map((paragraph) => {
        paragraph = paragraph.trim();
        if (paragraph.endsWith('\\n')) {
          paragraph = paragraph.slice(0, (paragraph.length - 2))
        }
        return paragraph;
      })
    }

    vm.selectTag = function(tag) {
      vm.selectedTags.push(tag);
    }

  }



  function WaSourceNewPageController(SourceService, $state) {
    const vm = this;

    vm.newSource = {
      tags: []
    };

    vm.$onInit = function() {

    }

    vm.createSource = function() {
      vm.newSource.user_id = SourceService.getUserId(SourceService.getToken());
      SourceService.createSource(vm.newSource).then((response) => {
        $state.go('sources');
      });
    };
  }

  function WaSourceShowController(SourceService, $stateParams, $state) {
    const vm = this;

    let userId = SourceService.getUserId(SourceService.getToken())

    vm.$onInit = function() {
      SourceService.getSource($stateParams.id).then((response) => {
        if (response.user_id !== userId) {
          $state.go('sources');
        } else {
          vm.source = response;
        }
      })
    }

    vm.addWin = function() {
      SourceService.addWin($stateParams.id).then((response) => {
        vm.source.wins += 1;
      })

    }

    vm.loseFriend = function() {
      SourceService.loseFriend($stateParams.id).then((response) => {
        vm.source.friends_lost += 1;
      })
    }
  }

  function WaSourceEditController(SourceService, $stateParams, $state) {
    const vm = this;

    let userId = SourceService.getUserId(SourceService.getToken());

    vm.$onInit = function() {
      SourceService.getSource($stateParams.id).then((response) => {
        if (response.user_id !== userId) {
          $state.go('sources');
        } else {
          vm.editSource = response;
        }
      })
    }

    vm.updateSource = function() {
      SourceService.editSource($stateParams.id, vm.editSource).then((response) => {
        $state.go('sources')
      })
    }

    vm.deleteSource = function() {
      SourceService.deleteSource($stateParams.id).then((response) => {
        $state.go('sources')
      })
    }
  }

  function WaProfileController(SourceService) {
    const vm = this

    let userId = SourceService.getUserId(SourceService.getToken());

    vm.user = {
      id: userId
    }

    vm.$onInit = function(user) {
      SourceService.getUser(userId).then((userData) => {
        vm.profilePhoto = userData.photo
        vm.bio = userData.bio
        vm.username = userData.username
      })
    }
  }

  function WaProfileEditController(SourceService) {
    const vm = this;

    let userId = SourceService.getUserId(SourceService.getToken());

    vm.$onInit = function() {
      SourceService.getUser(userId).then((userData) => {
        vm.user = userData;
      })
    }
  }

  function WaPontificatorController(SourceService) {
    const vm = this;

    vm.getSynonyms = function(word) {
      SourceService.getSynonyms(word).then((response) => {
        console.log(response);
        let wordArray = [];
        let categoryArray = [];
        let data = response;
        for (key in data) {
          categoryArray.push(key);
          for (word of data[key].syn) {
            wordArray.push(word);
          }
        }
        vm.synonyms = wordArray;
        vm.categories = categoryArray;
      })
    }
  }

  function WaSourcesFilterSortController() {
    const vm = this;

    vm.removeTag = function(tag) {
      let index = vm.selectedTags.indexOf(tag);
      vm.selectedTags.splice(index, 1);
    }

  }

  function WaTagFormInputController() {
    const vm = this;

    vm.addTag = function(event) {
      event.preventDefault();
      vm.tags.push(vm.tagName);
      delete vm.tagName;
    }

    vm.removeTag = function(tag) {
      let index = vm.tags.indexOf(tag);
      vm.tags.splice(index, 1);
    }
  }
})();
