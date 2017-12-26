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
    template: require('raw-loader!./login.html')    
};

login.$inject = ['$rootScope', 'authService'];

angular.module('<%=data.appName%>').component('login', login);