var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));


module.exports.generateList = function(runner, basepath) {

  var featureFolderName = basepath + 'Generated/MVP/' + runner.props.featureName + 's/';
  var interfaceName = 'I' + runner.props.featureName + 'sListView';
  var presenterName = runner.props.featureName + 'sListPresenter';
  var userControlName = 'uc' + runner.props.featureName + 'sListView';
  var ttt = _.kebabCase;


  if (runner.options.includePresenter) {
    //Presenter
    runner.fs.copyTpl(
      runner.templatePath('MVP/List/presenter.vb'),
      runner.destinationPath(featureFolderName + '/List/' + presenterName + '.vb'), {
        DtoName: runner.options.classname + 'Dto',
        ClassName: runner.options.classname
      }
    );
  }




  ///////////////////////////////
  //UserControl - Code Behind
  runner.fs.copyTpl(
    runner.templatePath('MVP/List/UserControl/ucListView.vb'),
    runner.destinationPath(featureFolderName + '/List/' + userControlName + '.vb'), {
      DtoName: runner.options.classname + 'Dto',
      ClassName: runner.options.classname
    }
  );

  //UserControl - Designer
  runner.fs.copyTpl(
    runner.templatePath('MVP/List/UserControl/ucContactsView.Designer.vb'),
    runner.destinationPath(featureFolderName + '/List/' + userControlName + '.Designer.vb'), {
      DtoName: runner.options.classname + 'Dto',
      ClassName: runner.options.classname
    }
  );

  //UserControl - Resources File
  runner.fs.copyTpl(
    runner.templatePath('MVP/List/UserControl/ucContactsView.resx'),
    runner.destinationPath(featureFolderName + '/List/' + userControlName + '.resx'), {
      DtoName: runner.options.classname + 'Dto',
      ClassName: runner.options.classname
    }
  );

}
