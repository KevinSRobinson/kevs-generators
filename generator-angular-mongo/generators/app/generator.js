const copier = require('../../../Core/templateCopier');
const srcPaths = require('./srcPaths.js');
const destPaths = require('./destPaths');
var features = require('./features.json');
var person = require('../../../models/person.json');
var organisation = require('../../../models/organisation.json');
var models = [];
const chalk = require('chalk');

var corefiles = ['index.html', 'env.js', 'appConfig.js', 'config.json', 'app.js',
'routes.js', '.bowerrc', 'bower.json', 'package.json'];

var stylefiles = ['lessStyles.less'];


let generate = function(runner){

  console.log(chalk.red("srcPaths.core = " + srcPaths.core));
   console.log(chalk.red("destPaths.base = " + destPaths().base));
   console.log(chalk.red("destPaths.client = " + destPaths().client));

try {
  copier.copyTpls(runner, srcPaths.core, destPaths().core, corefiles);
} catch (error) {
  console.log(chalk.red("error = " + error));
}


 //  copier.copyTpls(runner, srcPaths.styles,destPaths().base, stylefiles);

}

module.exports.generate = generate;

