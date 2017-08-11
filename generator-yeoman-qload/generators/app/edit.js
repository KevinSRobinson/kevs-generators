var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));


module.exports.generate = function (runner, basepath, data)  {
  function js_traverse(o) {
  //if ( typeof o == "object") {
      for (var key in o) {       
         for (var subkey in o[key]) {
             console.log("subkey: ", o[key][subkey])
         }
      }
    //} 
  }

  var featureFolderName = basepath + '/' + data.plural + '/';
  var interfaceName = 'I' + runner.props.featureName + 'sEdit';
  var presenterName = runner.props.featureName + 'sEditPresenter';
  var userControlName = 'uc' + data.name + 'Edit';
  var ttt = _.kebabCase;
  
  var commaSeperatedLayoutControlList = "";

  js_traverse(data.model.properties)

  for (var key in data.model.properties) {   
     commaSeperatedLayoutControlList += "Me.lc" + key + ",";
  }

  commaSeperatedLayoutControlList = commaSeperatedLayoutControlList.replace(/,(\s+)?$/, '');



  ///////////////////////////////
  //UserControl - Code Behind
  runner.fs.copyTpl(
    runner.templatePath('MVP/Edit/UserControl/_uCEdit.vb'),
    runner.destinationPath(featureFolderName + '/Edit/' + userControlName + '.vb'), {
      data: data
    }
  );

  //UserControl - Designer
  runner.fs.copyTpl(
    runner.templatePath('MVP/Edit/UserControl/_uCEdit.Designer.vb'),
    runner.destinationPath(featureFolderName + '/Edit/' + userControlName + '.Designer.vb'), {
      data: data
    }
  );

  //UserControl - Resources File
  runner.fs.copyTpl(
    runner.templatePath('MVP/Edit/UserControl/_uCEdit.resx'),
    runner.destinationPath(featureFolderName + '/Edit/' + userControlName + '.resx'), {
      data: data
    }
  );

}