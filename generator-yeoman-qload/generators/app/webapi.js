var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));



module.exports.generate = function (runner, basepath, data) {

  
  var destWebApiFolderName = basepath + '/' + data.name + '/';

  runner.fs.copyTpl(
    runner.templatePath('WebApi/_api.ejs'),
    runner.destinationPath(destWebApiFolderName + data.plural + 'Api.vb'), {
      data: data
    }
  );


};