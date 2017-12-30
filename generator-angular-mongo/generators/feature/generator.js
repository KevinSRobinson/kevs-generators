const src = require('./srcPaths.js');
const dest = require('./destPaths');
const features = require('./features');
const _ = require('lodash');
const copier = require('../../../Core/templateCopier');
var fs = require('fs');
const chalk = require('chalk');

let generate = function (runner, feature) {

	for (var feature in features) {
		var data = {
			name: features[feature].title,
			model: features[feature],
			properties: features[feature].properties,
			_: _
		};

		var copy = function (source, dest, feature) {
			copier.copyTplsWithData(runner, source, dest, feature, data);
		};

		var copyFolder = function (folder, deep) {

			var folders = fs.readdirSync('./generators/feature/templates/' + src.getClientFolder(folder) + "/");

			if (deep == 1) {

				for (var i in folders) {
					var srcPath = src.getClientPath(folder, folders[i]);
					var destPath = dest.getClientPath(feature, folder, folders[i]);

					copy(srcPath, destPath, feature);
				}
			}
			else{
				var srcPath = src.getBaseClientPath(folder);
				var destPath = dest.getClientPath(feature, folder, folders[i]);
				console.log(chalk.blue('folder = ' + folder));
				console.log(chalk.blue('srcPath = ' + srcPath));
				console.log(chalk.blue('destPath = ' + destPath));

				 copy(srcPath, destPath, feature);
				//copy(srcPath, destPath, feature);
			}

		};

		var copyServerFolder = function () {

			var folders = fs.readdirSync('./generators/feature/templates/Server/');

			console.log(chalk.blue("src.serverBase = " + src.serverBase));

			for (var i in folders) {
				var srcPath = src.getServerFolder(folders[i], folders[i]);
				var destPath = dest.serverMethod(feature, folders[i]);


				copy(srcPath, destPath, feature);
			}
		};

		var feature = features[feature].title;


		//Routes
		//copy(src.featureBase, dest.getFeatureBase(feature), templates.routes);

		copyFolder("Components", 1);
		copyFolder("Modals", 1);
		copyFolder("DataServices", 0);


		//Server
		copyServerFolder();

	};


}

module.exports.generate = generate;





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
