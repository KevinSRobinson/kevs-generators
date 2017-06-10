var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));
var Generator = require('yeoman-generator');

_.mixin(require('lodash-inflection'));
const copier = require('./templateCopier.js')

module.exports.generate = function (data, runner, basepath) {

  var _srcViewModelsPath = './Client/Features/Modals/';

  copier.copyTpl(runner,_srcViewModelsPath + '_viewModal.html', basepath + '/Modals/viewModal.html', data);
  copier.copyTpl(runner, _srcViewModelsPath + '_modalServices.js', basepath + '/Modals/modalServices.js', data);


};
