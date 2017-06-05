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

  var featureFolderName = basepath + 'Generated/MVP/' + runner.props.featureName + 's/';
  var interfaceName = 'I' + runner.props.featureName + 'sEdit';
  var presenterName = runner.props.featureName + 'sEditPresenter';
  var userControlName = runner.props.featureName + 'ViewModel';
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
    runner.templatePath('ViewModel/_viewModel.vb'),
    runner.destinationPath(featureFolderName + '/ViewModel/' + userControlName + '.vb'), {
      data: data
    }
  );

  

}