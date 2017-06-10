var home = {
    controllerAs: 'vm',
    controller: function ($rootScope) {
        var vm = this;
        vm.isAuthenticated = $rootScope.isAuthenticated;
    },
    templateUrl: 'src/client/Features/Home/Components/Home/homeTemplate.html'
}

angular.module("app").component("home", home);