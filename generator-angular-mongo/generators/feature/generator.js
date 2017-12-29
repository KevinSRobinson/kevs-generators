
const srcPaths = require('./srcPaths.js');
const destPaths = require('./destPaths');
const featureFiles  = require('./featureFiles');
const features  = require('./features');

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






let generate = function (runner, feature) {

  // Main Output Path
  var destPath = destPaths.features;

  for (var feature in features) {
    var data = {
      name: features[feature].title,
      model: features[feature],
      properties:features[feature].properties,
      _:_
    };

    var copy = function(source, dest, files) {
      copier.copyTplsWithData(runner, source, dest, files, data);
    }
    //console.log(chalk.blue("title = " + features[feature].title));
    destPaths.setFeatureBase(features[feature].title);

    var feature = features[feature].title;


    // Routes
    //copy(srcPaths.featureBase.route, destPaths.details, featureFiles.details);
    // console.log(chalk.blue("destPaths.details = " + destPaths.details(feature, "Details")));
    // console.log(chalk.blue("destPaths.details = " + destPaths.featureBase));

    // Components
     copy(srcPaths.componets.details, destPaths.featureMethod(feature, "Details"), featureFiles.details);
     copy(srcPaths.componets.fields, destPaths.featureMethod(feature, "Fields"), featureFiles.fields);
     copy(srcPaths.componets.home, destPaths.featureMethod(feature, "Home"), featureFiles.home);
     copy(srcPaths.componets.list, destPaths.featureMethod(feature, "List"), featureFiles.list);

    // // // Modals
     copy(srcPaths.modals.modify, destPaths.modalMethod(feature, "modify"), featureFiles.modifyModal);
     copy(srcPaths.modals.delete, destPaths.modalMethod(feature, "delete"),  featureFiles.deleteModal);
     copy(srcPaths.modals.services, destPaths.modalMethod(feature, "services"), featureFiles.modalServices);
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








 // console.log(chalk.blue("feature = " + features[feature].properties));
    // console.log(chalk.blue("title = " + features[feature].title));
    // console.log(chalk.blue("data = " + data.properties));
    // console.log(chalk.blue("feature = " + features[feature].properties));

    // console.log(chalk.blue("destPaths.client, = " + destPaths.client));
    // console.log(chalk.blue("destPaths.client, = " + destPaths.details));
    // console.log(chalk.blue("destPaths.fields = " + destPaths.fields));

