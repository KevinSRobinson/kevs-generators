var config = function ($stateProvider) {
    
$stateProvider
    .state('<%=data.plural%>', {
        url: '/<%=data.camelCasePlural%>',
        template: '<<%=data.camelCasePlural%>-list></<%=data.camelCasePlural%>-list>'
    }) 
    .state('<%=data.camelCase%>', {
        url: '/<%=data.camelCase%>/:id',
        template: '<<%=data.camelCase%>-details></<%=data.camelCase%>-details>'
    })
};

angular.module('<%=data.appName%>').config(config);

