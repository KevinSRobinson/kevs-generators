var config = function ($stateProvider, $urlRouterProvider, $locationProvider) {

   var loginState = {
        name: 'login',
        url: '/login',
        template: '<login></login>'
    };

    $stateProvider.state(loginState);

};

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

angular.module("app").config(config);