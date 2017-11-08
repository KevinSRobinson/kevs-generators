var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));



module.exports.generate = function (runner, basepath, data) {



  var featureFolderName = basepath + '/' + data.plural + '/';

  // var name = basepath + '/Data/' + data.plural + '/';
  var viewModelName = data.name + "ViewModel";


  ///////////////////////////////
  //UserControl - Code Behind
  runner.fs.copyTpl(
    runner.templatePath('ViewModel/_viewModel.vb'),
    runner.destinationPath(featureFolderName + viewModelName + '.vb'), {
      data: data
    }
  );


};