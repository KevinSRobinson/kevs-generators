var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));


module.exports.generate = function (runner, basepath) {
  function js_traverse(o) {
  //if ( typeof o == "object") {
      for (var key in o) {       
         for (var subkey in o[key]) {
             console.log("subkey: ", o[key][subkey])
         }
      }
    //} 
  }

  var featureFolderName = basepath + '/' + runner.props.featureName + 's/';
  var interfaceName = 'I' + runner.props.featureName + 'sDetails';
  var presenterName = runner.props.featureName + 'sDetailsPresenter';
  var userControlName = 'uc' + runner.props.featureName + 'sDetails';
  var ttt = _.kebabCase;
  var model = require('./data.json')
  var commaSeperatedLayoutControlList = "";

  js_traverse(model.properties)

  for (var key in model.properties) {   
     commaSeperatedLayoutControlList += "Me.lc" + key + ",";
  }

  commaSeperatedLayoutControlList = commaSeperatedLayoutControlList.replace(/,(\s+)?$/, '');


  var data = {
    featureName: runner.props.featureName,
    featureNamePlural: runner.props.featureName + 's',
    model: model,
     _: _,
    commaSeperatedLayoutControlList: commaSeperatedLayoutControlList
  }



  ///////////////////////////////
  //UserControl - Code Behind
  runner.fs.copyTpl(
    runner.templatePath('MVP/Details/UserControl/_ucDetails.vb'),
    runner.destinationPath(featureFolderName + '/Details/' + userControlName + '.vb'), {
      data: data
    }
  );

  //UserControl - Designer
  runner.fs.copyTpl(
    runner.templatePath('MVP/Details/UserControl/_uCDetails.Designer.vb'),
    runner.destinationPath(featureFolderName + '/Details/' + userControlName + '.Designer.vb'), {
      data: data
    }
  );

  //UserControl - Resources File
  runner.fs.copyTpl(
    runner.templatePath('MVP/Details/UserControl/_uCDetails.resx'),
    runner.destinationPath(featureFolderName + '/Details/' + userControlName + '.resx'), {
      data: data
    }
  );

}