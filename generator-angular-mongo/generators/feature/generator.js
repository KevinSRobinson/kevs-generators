
const srcPaths = require('./srcPaths.js');
const destPaths = require('./destPaths');

var models = [];
const _ = require('lodash');
// Client
const components = require('./helpers/Client/components.js');
const featureRoutes = require('./helpers/Client/routes.js');
const dataServices = require('./helpers/Client/dataServices.js');

// Server
const serverRoutes = require('./helpers/Server/routes.js');
const serverModel = require('./helpers/Server/Models/model.js');
const serverApi = require('./helpers/Server/Apis/api.js');
const serverController = require('./helpers/Server/Controllers/controller.js');
const copier = require('../../../Core/templateCopier');
const chalk = require('chalk');


var detailsComponentsFiles = ['details.js', 'detailsTemplate.html'];


let person =require('../models/person.json');
let comment =require('../models/comment.json');
let organisation =require('../models/organisation.json');

let features = [person, comment, organisation];

let generate = function (runner, feature) {

  // Main Output Path
  var destPath = destPaths().features;

  // Client Source Paths
  var srcClientPath = './Client/';

  // Client Destination Paths
  var destClientPath = destPath + 'Src/Client/';
  var destFeaturesPath = destClientPath + 'Features/';

  // Server Source Paths
  var srcServerPath = './Server/';

  // Server Destination Paths
  var destServerPath = destPath + 'Src/Server/';

  //var feature = require('../models/' + this.props.feature + '.json');



  // console.log(chalk.blue("srcPaths.core = " + srcPaths.core));
  // console.log(chalk.blue("srcPaths.base = " + srcPaths.base));
  // console.log(chalk.blue("destPaths.base = " + destPaths().base));
  // console.log(chalk.blue("destPaths.client = " + destPaths().client));





  for (var feature in features) {



    var data = {
      name: features[feature].title,
      model: features[feature],
      properties:features[feature].properties,
      _:_
    };

    console.log(chalk.blue("feature = " + features[feature].properties));
    console.log(chalk.blue("title = " + features[feature].title));
    console.log(chalk.blue("data = " + data.properties));

    copier.copyTplsWithData(runner, srcPaths.details, destPaths().client, detailsComponentsFiles, data);
  };




  // // Client
  // dataServices.generate(data, this, srcClientPath, destFeaturesPath);
  // components.generate(data, this, srcClientPath, destFeaturesPath);

  // Server
  // serverRoutes.generate(data, this, srcServerPath, destServerPath);
  // serverModel.generate(data, this, srcServerPath, destServerPath);
  // serverApi.generate(data, this, srcServerPath, destServerPath);
  // serverController.generate(data, this, srcServerPath, destServerPath);

}

module.exports.generate = generate;
