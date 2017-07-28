var config = function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(false);

    var homeState = {
        name: 'home',
        url: '/',
        controllerAs: "vm",
        template: '<home></home>'
    };

    $stateProvider.state(homeState);

    $urlRouterProvider.otherwise('/');
};

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

angular.module("app").config(config);