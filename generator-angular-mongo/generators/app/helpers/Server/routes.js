var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));
const copier = require('../templateCopier.js');

module.exports.generate = function (data, runner, _srcPath, destPath) {

//   var _srcRoutePath = _srcPath + 'Routes/';
//   var destRoutePath = destPath + 'Routes/';


  //Core Files
  copier.copyTpl(runner, _srcPath + '_routes.js', destPath + 'routes.js', data);

};
