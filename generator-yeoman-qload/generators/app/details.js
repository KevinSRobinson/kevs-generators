var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));


module.exports.generate = function(runner, basepath) {

  var featureFolderName = basepath + 'Generated/MVP/' + runner.props.featureName + 's/';
  var interfaceName = 'I' + runner.props.featureName + 'sDetailsView';
  var presenterName = runner.props.featureName + 'sDetailsPresenter';
  var userControlName = 'uc' + runner.props.featureName + 'sDetailsView';
  var ttt = _.kebabCase;




  ///////////////////////////////
  //UserControl - Code Behind
  runner.fs.copyTpl(
    runner.templatePath('MVP/Details/UserControl/UcCrmContactDetails.vb'),
    runner.destinationPath(featureFolderName + '/Details/' + userControlName + '.vb'), {
      DtoName: runner.options.classname + 'Dto',
      ClassName: runner.options.classname
    }
  );

  //UserControl - Designer
  runner.fs.copyTpl(
    runner.templatePath('MVP/Details/UserControl/UcCrmContactDetails.Designer.vb'),
    runner.destinationPath(featureFolderName + '/Details/' + userControlName + '.Designer.vb'), {
      DtoName: runner.options.classname + 'Dto',
      ClassName: runner.options.classname
    }
  );

  //UserControl - Resources File
  runner.fs.copyTpl(
    runner.templatePath('MVP/Details/UserControl/UcCrmContactDetails.resx'),
    runner.destinationPath(featureFolderName + '/Details/' + userControlName + '.resx'), {
      DtoName: runner.options.classname + 'Dto',
      ClassName: runner.options.classname
    }
  );

}
