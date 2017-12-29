const src = require('./srcPaths.js');
const dest = require('./destPaths');
const featureFiles  = require('./featureFiles');
const features  = require('./features');
const _ = require('lodash');
const copier = require('../../../Core/templateCopier');

let generate = function (runner, feature) {

	for (var feature in features) {
		var data = {
			name: features[feature].title,
			model: features[feature],
			properties:features[feature].properties,
			_:_
		};

	  var copy = function(source, dest, files) {
		copier.copyTplsWithData(runner, source, dest, files, data);
	};

  	var feature = features[feature].title;


    //Routes
   	copy(src.featureBase, dest.getFeatureBase(feature), featureFiles.routes);
		console.log("src.componets.details = " + src.componets.details);
    // Components
	  copy(src.componets.details, dest.featureMethod(feature, "Details"), featureFiles.details);
  	copy(src.componets.fields, dest.featureMethod(feature, "Fields"), featureFiles.fields);
  	copy(src.componets.home, dest.featureMethod(feature, "Home"), featureFiles.home);
  	copy(src.componets.list, dest.featureMethod(feature, "List"), featureFiles.list);

    // // // // Modals
  	copy(src.modals.modify, dest.modalMethod(feature, "Modify"), featureFiles.modifyModal);
  	copy(src.modals.delete, dest.modalMethod(feature, "Delete"),  featureFiles.deleteModal);
		copy(src.modals.services, dest.modalMethod(feature, "Services"), featureFiles.modalServices);

		//Server
		copy(src.server.api, dest.serverMethod(feature, "Apis"), featureFiles.server.api);
	  copy(src.server.controllers, dest.serverMethod(feature, "Controllers"), featureFiles.server.controllers);
	  copy(src.server.models, dest.serverMethod(feature, "Models"), featureFiles.server.models);
	  copy(src.server.routes, dest.serverMethod(feature, "Routes"), featureFiles.server.routes);

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






// var models = [];
// const _ = require('lodash');
// // Client
// const components = require('./helpers/Client/components.js');
// const featureRoutes = require('./helpers/Client/routes.js');
// const dataServices = require('./helpers/Client/dataServices.js');

// // Server
// const serverRoutes = require('./helpers/Server/routes.js');
// const serverModel = require('./helpers/Server/Models/model.js');
// const serverApi = require('./helpers/Server/Apis/api.js');
// const serverController = require('./helpers/Server/Controllers/controller.js');
// const copier = require('../../../Core/templateCopier');
// const chalk = require('chalk');




 // console.log(chalk.blue("feature = " + features[feature].properties));
    // console.log(chalk.blue("title = " + features[feature].title));
    // console.log(chalk.blue("data = " + data.properties));
    // console.log(chalk.blue("feature = " + features[feature].properties));

    // console.log(chalk.blue("dest.client, = " + dest.client));
    // console.log(chalk.blue("dest.client, = " + dest.details));
    // console.log(chalk.blue("dest.fields = " + dest.fields));

