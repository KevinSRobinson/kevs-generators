var config = function ($stateProvider) {
    
$stateProvider
    .state('lookupLists', {
        url: '/lookupLists',
        template: '<lookup-lists-home></lookup-lists-home>'
    }) 
};

angular.module('app').config(config);
