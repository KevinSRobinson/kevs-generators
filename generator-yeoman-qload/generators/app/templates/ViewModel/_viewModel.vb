Public Class <%=data.model.title%>ViewModel
    
     <% for (var key in data.model.properties) {  
         for (var subkey in data.model.properties[key]) {

            if(data.model.properties[key][subkey] === "string") { %>
                 Public Property <%= data.getNameFromKey(key) %> as String
            <% }  
            if(data.model.properties[key][subkey] === "memo") { %>
                 Public Property <%= data.getNameFromKey(key) %> as String
            <% }  
            if(data.model.properties[key][subkey] === "date") { %>
                 Public Property  <%= data.getNameFromKey(key) %> as Date
            <% }  
             if(data.model.properties[key][subkey] === "number") { %>
                 Public Property  <%= data.getNameFromKey(key) %> as Integer
            <% }  
            if(data.model.properties[key][subkey] === "bool") { %>
                 Public Property  <%= data.getNameFromKey(key) %> as Boolean
            <% }  
            if(data.model.properties[key][subkey] === "lookup") { %>
                 Public Property  <%= data.getNameFromKey(key) %> as Integer
            <% }  
           } %>  
    <% } %>  

End Class