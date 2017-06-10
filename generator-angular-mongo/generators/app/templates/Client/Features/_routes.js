var config = function ($stateProvider) {
    
$stateProvider
    .state('<#=data.featureName#>', {
        url: '/<#=helper.featureName#>',
        //templateUrl: '<#=helper.IndexTemplateUrl#>'
    }) 
};

angular.module('<#=data.appName#>').config(config);

