var config = function ($stateProvider) {
    
$stateProvider
    .state('comments', {
        url: '/comments',
        template: '<comments-list></comments-list>'
    }) 
    .state('comment', {
        url: '/comment/:id',
        template: '<comment-details></comment-details>'
    })
};

angular.module('').config(config);

