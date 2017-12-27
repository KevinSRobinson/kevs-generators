const copier = require('./helpers/templateCopier');
const srcPaths = require('./srcPaths.js');
const destPaths = require('./destPaths');
var features = require('./features.json');
var person = require('../../../models/person.json');
var organisation = require('../../../models/organisation.json');
var models = [];
const chalk = require('chalk');

var corefiles = ['index.html', 'env.js', 'appConfig.js', 'config.json', 'app.js',
'routes.js', '.bowerrc', 'bower.json', 'package.json'];

var stylefiles = ['_lessStyles.less'];


let generate = function(runner){
  // var srcClientPath = './Client/';
  // var srcCorePath = srcClientPath + 'Core/';


  // srcPaths.setBasePath = './';

   console.log(srcPaths().core());
   copier.copyTpls(runner, srcPaths().core(), destPaths.core, corefiles);

   copier.copyTpls(runner, srcPaths().core(), destPaths.core, stylefiles);

}

module.exports.generate = generate;

