const src = require('./srcPaths.js');
const dest = require('./destPaths');
const templates  = require('./featureFiles');
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

	  var copy = function(source, dest) {

			src.getClientPath("Components", "Details")

		copier.copyTplsWithData(runner, source, dest, data);
	};

  	var feature = features[feature].title;


    //Routes
   	copy(src.featureBase, dest.getFeatureBase(feature), templates.routes);
			console.log("src.componets.details = " + src.componets.details);
		//


		copy(src.getClientPath("Components", "Details"), dest.getClientPath(feature, "Components" ,"Details"));
		copy(src.getClientPath("Components", "fields"), dest.getClientPath(feature, "Components" ,"fields"));
		copy(src.getClientPath("Components", "fields"), dest.getClientPath(feature, "Components" ,"fields"));
		copy(src.getClientPath("Components", "home"), dest.getClientPath(feature, "Components" ,"home"));
		copy(src.getClientPath("Components", "list"), dest.getClientPath(feature, "Components" ,"list"));



    // // Modals
  	// copy(src.modals.modify, dest.getClientPath(feature, "Modals" ,"Modify"));
  	// copy(src.modals.delete, dest.getClientPath(feature, "Modals" ,"Delete"));
		// copy(src.modals.services, dest.getClientPath(feature, "Modals" ,"Services"));

		//Server
		// copy(src.server.api, dest.serverMethod(feature, "Apis"));
	  // copy(src.server.controllers, dest.serverMethod(feature, "Controllers"));
	  // copy(src.server.models, dest.serverMethod(feature, "Models"), templates.server.models);
	  // copy(src.server.routes, dest.serverMethod(feature, "Routes"), templates.server.routes);

	};


// let sd =[
// 	src.componets.details, dest.getClientPath(feature, "Components" ,"Details"),

// 	copy(src.componets.details, dest.getClientPath(feature, "Components" ,"Details"), featureFiles.details);
//   	copy(src.componets.fields, dest.getClientPath(feature, "Components" ,"Fields"), featureFiles.fields);
//   	copy(src.componets.home, dest.getClientPath(feature, "Components" ,"Home"), featureFiles.home);
//   	copy(src.componets.list, dest.getClientPath(feature, "Components" ,"List"), featureFiles.list);
// ]


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

