var express = require('express');
var app = express();
var cors = require('cors');
var errorHandler = require('./routes/utils/errorHandler')();
var config = require('../../gulp.config')();
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || config.port;
var routes;
var bugsnag = require("bugsnag");
let _ = require('lodash')

var environment = process.env.NODE_ENV;
bugsnag.register("ba4284280b62691fa360fceed9f1e838");

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());
app.use(errorHandler.init);

//Mongoose 
var mongoose = require('mongoose');


if (environment === 'dev') {
  console.log('Connecting to Dev database');
  mongoose.connect('mongodb://localhost:27017/befriending');
} else {
  console.log('=================================');
  console.log('Connecting to Production database');
  console.log('=================================');
  mongoose.connect('mongodb://vn-sql2008:27017/befriending');
}




console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);



// <% for (let i = 0; i < data.models.length; i++) { %>   

//     <% let model = data.models[i];%>

//     app.use('/api/<%= data._.pluralize(model.title) %>', require('./Apis/<%= data._.pluralize(model.title) %>Api'));


// <% } %>
// 
// app.use('/api/clients/', require('./Apis/clientsApi'));
// app.use('/api/notes/', require('./Apis/notesApi'));
// app.use('/api/lookuplists/', require('./Apis/lookupListsApi'));
// app.use('/api/volClientLink/', require('./Apis/volClientLinkApi'));

app.use(express.static('./src/client/'));
app.use(express.static('./'));
app.use(express.static('./tmp'));
app.use('/*', express.static('./src/client/index.html'));

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
  console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd());
});
