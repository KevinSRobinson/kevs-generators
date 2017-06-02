<%for (i = 0; i < json.properties.length; i++) { %>
            //'if (json.hasOwnProperty(key)) {
                <%= json.properties[i];  %>
            //''}
          <% }  %>
