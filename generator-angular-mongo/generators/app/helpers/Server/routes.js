var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));
const copier = require('../templateCopier.js');

module.exports.generate = function (data, runner, _srcPath, destPath) {

  var _srcRoutePath = _srcPath + '/Feature/';
//   var destRoutePath = destPath + 'Routes/';

  console.log('_srcRoutePath = ' + _srcRoutePath);

  //Core Files
  copier.copyTpl(runner, '_srcRoutePath' + '_routes.js', destPath + 'routes.js', data);

  
};
