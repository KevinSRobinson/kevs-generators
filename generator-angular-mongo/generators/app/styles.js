var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));
const copier = require('./templateCopier.js');
module.exports.generate = function (data, runner, _srcPath, destPath) {

  var destLoginPath = destPath + '/Features/';
  var destLoginComponentsPath = destLoginPath + '/Components/';

  copier.copyTpl(runner, _srcPath + '_lessStyles.less', destLoginPath + 'lessStyles.less', data);

};
