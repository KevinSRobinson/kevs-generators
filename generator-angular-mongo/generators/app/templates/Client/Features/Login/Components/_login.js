var login = {
    controllerAs: 'vm',
    controller: function ($rootScope, authService) {
        var vm = this;

        authService.registerAuthenticationListener();

        vm.login = function () {
            authService.login();
        }

        vm.logout = function () {
            authService.logout();
        }

        vm.isAuthenticated = $rootScope.isAuthenticated;

    },
    templateUrl: './src/client/Features/Login/Components/login.html'
};

login.$inject = ['$rootScope', 'authService'];

angular.module('<%=data.appName%>').component('login', login);