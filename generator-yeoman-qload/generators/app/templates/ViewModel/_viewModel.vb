Public Class <%=data.model.title%>ViewModel
    
     <% for (var key in data.model.properties) {  
         for (var subkey in data.model.properties[key]) {

            if(data.model.properties[key][subkey] === "string") { %>
                 Public Property <%= data._.startCase(key).replace(" ", "") %> as String
            <% }  
            if(data.model.properties[key][subkey] === "date") { %>
                 Public Property  <%= data._.startCase(key).replace(" ", "") %> as Date
            <% }  
           } %>  
    <% } %>  

End Class