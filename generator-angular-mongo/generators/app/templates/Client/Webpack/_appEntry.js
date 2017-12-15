require('./Client/app.base.js');
require('./Client/app.config.js');


require('./Client/routes');


require('./Client/Features/Home/Components/Main/main');
require('./client/Features/Home/Components/Navigation/mainLayout.js');

require('./Client/Features/Home/routes.js');


<% for (var key in data.model.properties) {  
    
    var keyName = data._.camelCase(key).replace(' ', '');
     %>
     
     
    require('./Client/Features/<%=keyName%>/routes.js');
    require('./Client/Features/<%=keyName%>/Home/peopleHome');
    require('./Client/Features/<%=keyName%>/List/peopleList');
    require('./Client/Features/<%=keyName%>/Fields/personfields');
    require('./Client/Features/<%=keyName%>/Details/personDetails');
    require('./Client/Features/<%=keyName%>/PersondataService');
    require('./Client/Features/<%=keyName%>/Modals/Services/ServicesController.js');


    <% } %>
