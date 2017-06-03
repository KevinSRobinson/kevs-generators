var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));


module.exports.generate = function(runner, basepath) {

  var featureFolderName = basepath + 'Generated/MVP/' + runner.props.featureName + 's/';
  var interfaceName = 'I' + runner.props.featureName + 'smasterDetailsView';
  var presenterName = runner.props.featureName + 'smasterDetailsPresenter';
  var userControlName = 'uc' + runner.props.featureName + 'smasterDetailsView';
  var ttt = _.kebabCase;




  ///////////////////////////////
  //UserControl - Code Behind
  runner.fs.copyTpl(
    runner.templatePath('MVP/masterDetails/UserControl/UcMasterDetails.vb'),
    runner.destinationPath(featureFolderName + '/MasterDetails/' + userControlName + '.vb'), {
      DtoName: runner.options.classname + 'Dto',
      ClassName: runner.options.classname
    }
  );

  //UserControl - Designer
  runner.fs.copyTpl(
    runner.templatePath('MVP/masterDetails/UserControl/UcMasterDetails.Designer.vb'),
    runner.destinationPath(featureFolderName + '/MasterDetails/' + userControlName + '.Designer.vb'), {
      DtoName: runner.options.classname + 'Dto',
      ClassName: runner.options.classname
    }
  );

  //UserControl - Resources File
  runner.fs.copyTpl(
    runner.templatePath('MVP/masterDetails/UserControl/UcMasterDetails.resx'),
    runner.destinationPath(featureFolderName + '/MasterDetails/' + userControlName + '.resx'), {
      DtoName: runner.options.classname + 'Dto',
      ClassName: runner.options.classname
    }
  );

}
