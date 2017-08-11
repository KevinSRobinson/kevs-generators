Public Class <%=data.model.title%>ViewModel
    
     <% for (var key in data.model.properties) {  
         for (var subkey in data.model.properties[key]) {

            if(data.model.properties[key][subkey] === "string") { %>
                 Public Property <%= data._.startCase(key).replace(" ", "") %> as String
            <% }  
            if(data.model.properties[key][subkey] === "date") { %>
                 Public Property  <%= data._.startCase(key).replace(" ", "") %> as Date
            <% }  
             if(data.model.properties[key][subkey] === "number") { %>
                 Public Property  <%= data._.startCase(key).replace(" ", "") %> as Integer
            <% }  
            if(data.model.properties[key][subkey] === "bool") { %>
                 Public Property  <%= data._.startCase(key).replace(" ", "") %> as Boolean
            <% }  
           } %>  
    <% } %>  

End Class