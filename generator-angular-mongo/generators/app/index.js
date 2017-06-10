'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const core = require('./core.js');
const components = require('./components.js');
const modals = require('./modals.js');
const gulp = require('./gulp.js');
const packagemanagers = require('./package-managers.js');

_.mixin(require('lodash-inflection'));
module.exports = class extends Generator {
  
  writing() {


    var basepath = 'C:/Repos/Generated/';
    var model = require('./data.json');
    //core.generate(this, basepath);

    var model = require('./data.json');

    var data = {
      name: model.title,
      plural: _.pluralize(model.title),
      camelCase: _.camelCase(model.title),
      serviceName: _.pluralize(model.title) + 'DataService',
      listComponentTemplateUrl: _.pluralize(model.title) + 'ListTemplate',
      model: model,
      _: _,
    };


    components.generate(data, this, basepath + "/Features/" + model.title + "/");
    modals.generate(this, basepath + "/Features/" + model.title + "/Modals/");
    gulp.generate(data, this, basepath + "/GulpTasks/");
    packagemanagers.generate(data, this, basepath + "/GulpTasks/");
  }

  install() {
   
  }
};
