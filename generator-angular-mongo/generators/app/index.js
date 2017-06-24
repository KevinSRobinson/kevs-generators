'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const core = require('./helpers/client/core.js');
const components = require('./helpers/client/components.js');
const modals = require('./helpers/client/modals.js');
const gulp = require('./helpers/client/gulp.js');
const packagemanagers = require('./helpers/client/package-managers.js');
const server = require('./helpers/Server/server.js');
const home = require('./helpers/client/home.js');
const login = require('./helpers/client/login.js');
const styles = require('./helpers/client/styles.js');
const navigation = require('./helpers/client/navigation.js');

_.mixin(require('lodash-inflection'));
module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the world-class ' +
        chalk.red('generator-yeoman-qload') +
        ' generator!'
      )
    );

    const prompts = [{
      type: 'input',
      name: 'angular app name',
      message: 'Enter a name for the app',
      default: 'app'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props);
      this.props = props;
    });
  }
  writing() {

    var destPath = 'C:/Repos/Generated/';
    var destClientPath = destPath + '/Src/Client/';
    var destServerPath = destPath + '/Src/Server/';

    var model = require('./data.json');
    // Core.generate(this, basepath);

    var data = {
      appName: this.props.appName,
      name: model.title,
      plural: _.pluralize(model.title),
      camelCase: _.camelCase(model.title),
      camelCasePlural: _.pluralize(_.camelCase(model.title)),
      serviceName: _.pluralize(model.title) + 'DataService',
      listComponentTemplateUrl: _.pluralize(model.title) + 'ListTemplate',
      model: model,
      _: _
    };

    var srcClientPath = './Client/';
    var srcPackageManagersPath = srcClientPath + 'PackageManagers/';
    var srcGulpPath = srcClientPath + 'Gulp/';
    var srcFeaturesPath = srcClientPath + 'Features/';
    var srcLoginPath = srcFeaturesPath + 'Login/';
    var srcStylesPath = srcClientPath + 'Styles/';
    var srcNavigationPath = srcFeaturesPath + 'Navigation/';

    var srcServerPath = './Server/';

    // Client
    packagemanagers.generate(data, this, srcPackageManagersPath, destPath);

    gulp.generate(data, this, srcGulpPath, destPath);

    components.generate(data, this, destClientPath + 'Features/' + model.title + '/');

    modals.generate(data, this, destClientPath + 'Features/' + model.title + '/Modals/');

    home.generate(data, this, destClientPath + 'Features/Home/');

    login.generate(data, this, srcLoginPath, destClientPath + 'Features/Login/');


    styles.generate(data, this, srcStylesPath, destClientPath + '/Styles/');

    navigation.generate(data, this, srcNavigationPath, destClientPath + '/Navigation/');


    // Server
    server.generate(data, this, srcServerPath, destServerPath);
  }

  install() {}
};
