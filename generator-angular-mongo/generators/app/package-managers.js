var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));
const copier = require('./templateCopier.js');
module.exports.generate = function (data, runner, basepath) {

 

  copier.copyTpl(runner, './PackageManagers/_.bowerc', basepath + '/.bowerrc', data);
  copier.copyTpl(runner, './PackageManagers/_bower.json', basepath + '/bower.json', data);
  copier.copyTpl(runner, './PackageManagers/_package.json', basepath + '/package.json', data)

};
