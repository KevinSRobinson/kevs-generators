'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const configHelper = require('../helpers/configHelper');
const core = require('./helpers/client/core.js');
const serverCore = require('./helpers/Server/serverCore.js');
const home = require('./helpers/client/home.js');
const login = require('./helpers/client/login.js');
const styles = require('./helpers/client/styles.js');
const navigation = require('./helpers/client/navigation.js');
const webpack = require('./helpers/client/webpack.js');
const publicpath = require('./helpers/client/public.js');
const components = require('./helpers/client/Feature/components.js');
const routes = require('./helpers/client/Feature/routes.js');
const modals = require('./helpers/client/Feature/modals.js');
const dataServices = require('./helpers/client/Feature/dataServices.js');

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
      default: configHelper.getOutputPath(this),
      store: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props);
      this.props = props;
    });
  }
  writing() {
    var person = require('../../../models/person.json');
    var organisation = require('../../../models/organisation.json');

    var models = [];
    var destPath = configHelper;
    var features = require('./features.json');


    var appDetails = {
      appName: this.props.appName,
      appTitle: 'Generated App',
      data: null,
      _: _
    };

  // this.config.set('destPath', this.props.destPath);
    configHelper.saveOutputPath(this, this.props.destPath);


    var destPath = this.props.destPath;
    var destClientPath = destPath + '/js/client/';
    var destServerPath = destPath + '/Src/Server/';
    var destFeaturesPath = destClientPath + 'Features/';
    var destHomePath = destFeaturesPath + '/Home/';
    var destLoginPath = destFeaturesPath + 'Login/';

    var srcClientPath = './Client/';
    var srcCorePath = srcClientPath + 'Core/';
    var srcdataServicesorePath = srcClientPath + 'Core/';
    var srcWebpackPath = srcClientPath + 'Webpack/';
    var srcPackageManagersPath = srcClientPath + 'PackageManagers/';
    var srcFeaturesPath = srcClientPath + 'Features/';
    var srcDataServicesPath = srcClientPath + 'DataServices/';
    var srcNavigationPath = srcFeaturesPath + 'Navigation/';
   var srcHomePath = srcFeaturesPath + 'Home/';
    var srcLoginPath = srcFeaturesPath + 'Login/';
    var srcStylesPath = srcClientPath + 'Styles/';
    var srcServerPath = './Server/';


   // packagemanagers.generate(appDetails, this, srcPackageManagersPath, destPath);

    core.generate(appDetails, this, srcCorePath, destClientPath);

  }
};
