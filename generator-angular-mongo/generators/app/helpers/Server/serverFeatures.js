var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));
const copier = require('../templateCopier.js');
module.exports.generate = function (data, runner, _srcPath, destPath) {

  var serverBasePath = destPath;
  var apisPath = serverBasePath + 'Apis/';
  var controllersPath = serverBasePath + 'Controllers/';
  var modelsPath = serverBasePath + 'Models/';
  var routesPath = serverBasePath + 'Routes/Utils/';

  var _srcApisPath = _srcPath + 'Apis/';
  var _srcControllersPath = _srcPath + 'Controllers/';
  var _srcModelsPath = _srcPath + 'Models/';
  var _srcRoutesPath = _srcPath + 'Routes/';

  // Apis
  copier.copyTpl(runner, _srcApisPath + '_modelApis.js', apisPath + '/' + data.camelCasePlural + 'Api.js', data);
  // Controllers
  copier.copyTpl(runner, _srcControllersPath + '_model.server.Controller.js', controllersPath + data.camelCasePlural + '.Server.Controller.js', data);




  
// Models
var modelsProperties = ``;

 var singleQuote = String.fromCharCode(39);

//  for (i = 0; i < 300; i++) {
//     console.log(i + ' = ' + String.fromCharCode(i));
//  }

for (var key in data.model.properties) { 
      
      var name = data._.replace(data._.startCase(key), ' ','');


      var type= '';
      if (data.model.properties[key].type = 'lookup'){
          type = 'string'
      }
      else {
          type = data.model.properties[key].type
      };



      var singleQuote = String.fromCharCode(39);
      // modelsProperties += name + ': {';
      // modelsProperties += "type : '" + type + "'",
      // modelsProperties += 'default : \n',
      // modelsProperties += ' }, ';

    var modelsProperties = modelsProperties + `${name}: {
            type: "${type}",
            default: ""
        },`;


  
}; 


  data.modelsProperties = String(modelsProperties);

  copier.copyTpl(runner, _srcModelsPath + '_models.js', modelsPath + data.camelCasePlural + 'Model.js', data);


};
