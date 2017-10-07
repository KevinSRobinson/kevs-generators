'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const configHelper = require('../helpers/configHelpers');
const core = require('./helpers/client/core.js');
const gulp = require('./helpers/client/gulp.js');
const packagemanagers = require('./helpers/client/package-managers.js');
const serverCore = require('./helpers/Server/serverCore.js');
const home = require('./helpers/client/home.js');
const login = require('./helpers/client/login.js');
const styles = require('./helpers/client/styles.js');

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
      name: 'appName',
      message: 'Enter a name for the app',
      default: 'app',
      store: true
    },
    {
      type: 'input',
      name: 'destPath',
      message: 'Enter a Location for the app : ',
      default: 'C:/Repos/Generated1/',
      store: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props);
      this.props = props;
    });
  }
  writing() {
    var person = require('./models/person.json');
    var organisation = require('./models/organisation.json');

    var models = [];

    models.push(person);
    models.push(organisation);

    var features = require('./features.json');

    var appDetails = {
      appName: this.props.appName,
      appTitle: 'Generated App'
    };

    this.config.set('destPath', this.props.destPath);

    console.log("Saved destPath = " + this.config.get('destPath'));

    var destPath = this.props.destPath;
    var destClientPath = destPath + 'Src/Client/';
    var destServerPath = destPath + '/Src/Server/';
    var destFeaturesPath = destClientPath + 'Features/';
    var destHomePath = destFeaturesPath + '/Home/';
    var destLoginPath = destFeaturesPath + 'Login/';

    var srcClientPath = './Client/';
    var srcCorePath = srcClientPath + 'Core/';
    var srcPackageManagersPath = srcClientPath + 'PackageManagers/';
    var srcGulpPath = srcClientPath + 'Gulp/';
    var srcFeaturesPath = srcClientPath + 'Features/';
    var srcHomePath = srcFeaturesPath + 'Home/';

    var srcLoginPath = srcFeaturesPath + 'Login/';
    var srcStylesPath = srcClientPath + 'Styles/';


    var srcServerPath = './Server/';

    // Client
    core.generate(appDetails, this, srcCorePath, destClientPath);
    packagemanagers.generate(appDetails, this, srcPackageManagersPath, destClientPath);
    gulp.generate(appDetails, this, srcGulpPath, destPath);
    styles.generate(appDetails, this, srcStylesPath, srcStylesPath + '/Styles/');

    // // Core Features
    home.generate(appDetails, this, srcHomePath, destHomePath);
    login.generate(appDetails, this, srcLoginPath, destLoginPath);

    var data = {
      appName: this.props.appName,
      models: models,
      features: features.features,
      _: _
    };

    serverCore.generate(data, this, srcServerPath, destServerPath + '/');


  }
};
