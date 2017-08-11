var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));


module.exports.generate = function (runner, basepath, data) {

  // var name = basepath + '/Data/' + runner.props.featureName + 's/';
  // var userControlName = runner.props.featureName + 'Repo';
  // var featureFolderName = basepath + '/Repos/';
  var featureFolderName = basepath + '/' + data.plural + '/';
  data.interfaceName = 'I' + data.plural  + 'Repo';
  data.repositoryName =  data.plural  + 'Repo';

  ///////////////////////////////
  //Repository
  runner.fs.copyTpl(
    runner.templatePath('ViewModel/_repository.vb'),
    runner.destinationPath(featureFolderName + data.repositoryName + '.vb'), {
      data: data
    }
  );

  
};