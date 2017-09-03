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
  copier.copyTpl(runner, _srcApisPath + '_modelApis.js', apisPath + '/' + data.camelCase + 'Api.js', data);
  // Controllers
  copier.copyTpl(runner, _srcControllersPath + '_model.server.Controller.js', controllersPath + data.camelCase + '.Server.Controller.js', data);
  // // Models
  copier.copyTpl(runner, _srcModelsPath + '_models.js', modelsPath + data.camelCase + 'Model.js', data);


};
