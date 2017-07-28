var config = function ($stateProvider) {
    
$stateProvider
    .state('<%=data.plural%>', {
        url: '/<%=data.plural%>',
        template: '<<%=data.plural%>-list></<%=data.plural%>-list>'
    }) 
};

angular.module('<%=data.appName%>').config(config);

