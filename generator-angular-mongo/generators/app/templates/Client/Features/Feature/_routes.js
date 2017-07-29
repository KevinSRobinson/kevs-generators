var config = function ($stateProvider) {
    
$stateProvider
    .state('<%=data.plural%>', {
        url: '/<%=data.plural%>',
        template: '<<%=data.plural%>-list></<%=data.plural%>-list>'
    }) 
    .state('<%=data.camelCase%>', {
        url: '/<%=data.camelCase%>/:id',
        template: '<<%=data.camelCase%>-details></<%=data.camelCase%>-details>'
    })
};

angular.module('<%=data.appName%>').config(config);

