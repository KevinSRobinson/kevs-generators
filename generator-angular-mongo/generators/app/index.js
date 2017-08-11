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
const server = require('./server.js');
const home = require('./home.js');
const login = require('./login.js');
const styles = require('./styles.js');
const navigation = require('./navigation.js');

_.mixin(require('lodash-inflection'));
module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the world-class ' + chalk.red('generator-yeoman-qload') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'angular app name',
      message: 'Enter a name for the app',
      default: 'app'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props)
      this.props = props;
    });
  }
  writing() {


    var destPath = 'C:/Repos/Generated/';   

    var model = require('./data.json');

    var data = {
      appName: this.props.appName,
      name: model.title,
      plural: _.pluralize(model.title),
      camelCase: _.camelCase(model.title),
      camelCasePlural: _.pluralize(_.camelCase(model.title)),
      serviceName: _.pluralize(model.title) + 'DataService',
      listComponentTemplateUrl: _.pluralize(model.title) + 'ListTemplate',
      model: model,
      _: _,
    };

    var srcClientPath = './Client/';
    var srcGulpPath = srcClientPath + 'Gulp/';
    var srcFeaturesPath = srcClientPath + 'Features/';
    var srcLoginPath = srcFeaturesPath + 'Login/';
     var srcStylesPath = srcClientPath + 'Styles/';
  var srcNavigationPath = srcFeaturesPath + 'Navigation/';  

     components.generate(data, this, destPath + "/Features/" + model.title + "/");
     modals.generate(data, this, destPath + "/Features/" + model.title + "/Modals/");
     home.generate(data, this, destPath + "/Features/Home/");
     login.generate(data, this, srcLoginPath , destPath + "Features/Login/");
     gulp.generate(data, this, srcGulpPath, destPath + "/GulpTasks/");
     styles.generate(data, this, srcStylesPath, destPath + "/Styles/");
      navigation.generate(data, this, srcNavigationPath, destPath + "/Navigation/");
    // packagemanagers.generate(data, this, basepath + "/GulpTasks/");
    // server.generate(data, this, basepath + "/Server/");
  }

  install() {

  }
};
