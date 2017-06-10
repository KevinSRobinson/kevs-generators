var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));
const copier = require('./templateCopier.js');
module.exports.generate = function (data, runner, basepath) {



  copier.copyTpl(runner, './Features/Components/_listComponent.js', basepath + '/listComponent.js', data);
  copier.copyTpl(runner, './Features/Components/_listComponentTemplate.html', basepath + '/listComponentTemplate.html', data);
  copier.copyTpl(runner, './Features/Views/_detailsView.html', basepath + '/_detailsView.html', data)


};
