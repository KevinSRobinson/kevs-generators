var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');

//lodash
const _ = require('lodash');
_.mixin(require("lodash-inflection"));


module.exports.generate = function (runner, basepath, data) {


  //UserControl - Code Behind
  runner.fs.copyTpl(
    runner.templatePath('MVP/Add/Form/_addDialog.vb'),
    runner.destinationPath(basepath + '/Add/FrmEdit' + data.name + '.vb'), {
      data: data
    }
  );

    //UserControl - Designer
  runner.fs.copyTpl(
    runner.templatePath('MVP/Add/Form/_addDialogDesigner.vb'),
    runner.destinationPath(basepath + '/Add/FrmEdit' + data.name + '.Designer.vb'), {
      data: data
    }
  );

  //UserControl - Interface
  runner.fs.copyTpl(
    runner.templatePath('MVP/Add/Form/_IAdd.vb'),
    runner.destinationPath(basepath + '/Add/IModify' + data.name + '.vb'), {
      data: data
    }
  );
}