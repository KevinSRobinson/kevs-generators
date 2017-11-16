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


  //Core Files
  copier.copyTpl(runner, _srcPath + '_app.js', serverBasePath + 'app.js', data);
  copier.copyTpl(runner, _srcPath + '_package.json', serverBasePath + 'package.json', data);

  // Apis
  copier.copyTpl(runner, _srcApisPath + '_lookupListApi.js', apisPath + 'lookupListsApi.js', data);

  copier.copyTpl(runner, _srcModelsPath + '_lookupListModel.js', modelsPath + 'lookupListModel.js', data);

  // // Routes
  copier.copyTpl(runner, _srcRoutesPath + '/Utils/_errorHandler.js', routesPath + 'errorHandler.js', data);
  copier.copyTpl(runner, _srcRoutesPath + '/Utils/_jsonfileService.js', routesPath + 'jsonfileService.js', data);


};
