var main = {
  controllerAs: 'vm',
  controller: function ($rootScope) {
    var vm = this;
    vm.isAuthenticated = $rootScope.isAuthenticated;
  },
  template: require('raw-loader!./_mainTemplate.html')  
};

angular.module("app").component("main", main);
