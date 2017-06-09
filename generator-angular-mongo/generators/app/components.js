var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));

module.exports.generate = function (runner, basepath) {

  var model = require('./data.json');

  var data = {
    name: model.title,
    plural: _.pluralize(model.title),
    serviceName: _.pluralize(model.title) + 'DataService',
    listComponentTemplateUrl: _.pluralize(model.title) + 'ListTemplate',
    model: model,
    _: _,
  };

 

  // _listComponentTemplate.html

 var copier = function (source, destinationPath, data) {
    runner.fs.copyTpl(runner.templatePath(source), runner.destinationPath(destinationPath), {
      data: data
    });
  };

  copier('./Features/Components/_listComponent.js', basepath + '/listComponent.js', data)
  copier('./Features/Components/_listComponentTemplate.html', basepath +  '/listComponentTemplate.html', basepath, data)

  // runner.fs.copyTpl(
  //   runner.templatePath('./Features/Components/_listComponent.js'),
  //   runner.destinationPath(basepath + '/_listComponent.js'), {
  //     data: data
  //   }
  // );
  
};
