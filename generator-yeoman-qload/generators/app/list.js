var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));


module.exports.generate = function (runner, basepath, data) {
  

  var featureFolderName = basepath + '/' + data.plural + '/';


  data.userControlName = 'uc' + data.plural + 'List';
  data.interfaceName = 'I' + data.plural  + 'ListView';
  data.presenterName = data.plural + 'sListPresenter';

 function js_traverse(o) {
  //if ( typeof o == "object") {
      for (var key in o) {       
         for (var subkey in o[key]) {
             console.log("subkey: ", o[key][subkey])
         }
      }
    //} 
  }
    var commaSeperatedLayoutControlList = "";

  js_traverse(data.model.properties)

  for (var key in data.model.properties) {   
     commaSeperatedLayoutControlList += "Me.col" + key + ",";
  }

  data.commaSeperatedLayoutControlList = commaSeperatedLayoutControlList.replace(/,(\s+)?$/, '');

  ///////////////////////////////
  //UserControl - Interface
  runner.fs.copyTpl(
    runner.templatePath('MVP/List/_IListView.vb'),
    runner.destinationPath(featureFolderName + '/List/' + data.interfaceName + '.vb'), {
      data: data
    }
  );

  ///////////////////////////////
  //UserControl - Code Behind
  runner.fs.copyTpl(
    runner.templatePath('MVP/List/UserControl/_uCList.vb'),
    runner.destinationPath(featureFolderName + '/List/' + data.userControlName + '.vb'), {
      data: data
    }
  );

  //UserControl - Designer
  runner.fs.copyTpl(
    runner.templatePath('MVP/List/UserControl/_uCList.Designer.vb'),
    runner.destinationPath(featureFolderName + '/List/' + data.userControlName + '.Designer.vb'), {
      data: data
    }
  );

  //UserControl - Resources File
  runner.fs.copyTpl(
    runner.templatePath('MVP/List/UserControl/_uCList.resx'),
    runner.destinationPath(featureFolderName + '/List/' + data.userControlName + '.resx'), {
      data: data
    }
  );

  //UserControl - Resources File
  runner.fs.copyTpl(
    runner.templatePath('MVP/List/_presenter.vb'),
    runner.destinationPath(featureFolderName + '/List/' + data.presenterName + '.vb'), {
      data: data
    }
  );


  
}