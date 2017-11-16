var main = {
  controllerAs: 'vm',
  controller: function ($rootScope) {
    var vm = this;
    vm.isAuthenticated = $rootScope.isAuthenticated;
  },
<<<<<<< HEAD
  template: require('raw-loader!./_mainTemplate.html')  
=======
  template: require('raw-loader!./homeTemplate.html')
>>>>>>> d4b5a3d5798a45901a0641d11d34edb70e024299
};

angular.module("app").component("main", main);
