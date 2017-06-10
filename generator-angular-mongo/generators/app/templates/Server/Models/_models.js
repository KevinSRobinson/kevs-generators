var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var <%=data.camelCasePlural %>Schema = new Schema({

<% for (var key in data.model.properties) { %>

        <%= data._.replace(data._.startCase(key), ' ','') %>: {
            type: <%= data.model.properties[key].type %>,
            default: ''
        },

<% }; %>

});

module.exports = mongoose.model('<%=data.name %>', <%=data.camelCasePlural %>Schema);