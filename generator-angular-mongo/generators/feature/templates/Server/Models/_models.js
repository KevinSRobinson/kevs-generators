var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var <%=data.camelCasePlural %>Schema = new Schema({
    <%-data.modelsProperties%>
});

module.exports = mongoose.model('<%=data.name %>', <%=data.camelCasePlural %>Schema);