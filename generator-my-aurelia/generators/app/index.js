'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const core = require('./helpers/core.js');
const src = require('./helpers/src.js');
const staticFiles = require('./helpers/static.js');
const tests = require('./helpers/tests.js');
// const components = require('./helpers/client/Feature/components.js');
// const modals = require('./helpers/client/modals.js');
// const gulp = require('./helpers/client/gulp.js');
// const packagemanagers = require('./helpers/client/package-managers.js');
// const server = require('./helpers/Server/server.js');
// const home = require('./helpers/client/home.js');
// const login = require('./helpers/client/login.js');
// const styles = require('./helpers/client/styles.js');
// const navigation = require('./helpers/client/navigation.js');
// const featureRoutes = require('./helpers/client/Feature/routes.js');
// const dataServices = require('./helpers/client/Feature/dataServices.js');
//const lookuplists = require('./helpers/client/lookuplists.js');

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
      default: 'app'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props);
      this.props = props;
    });
  }
  writing() {


    var destPath = 'C:/Repos/GeneratedAur/';


    var data = {
       appName: this.props.appName,
      // name: model.title,
      // plural: _.pluralize(model.title),
      // camelCase: _.camelCase(model.title),
      // camelCasePlural: _.pluralize(_.camelCase(model.title)),
      // modalServiceName: _.pluralize(model.title) + 'ModelService',
      // serviceName: _.pluralize(model.title) + 'DataService',
      // listComponentTemplateUrl: _.pluralize(model.title) + 'ListTemplate',
      // features: features,
      _: _
    };

    // var destPath = 'C:/Repos/Generated/';
     var destClientPath = destPath + '/';
    // var destStylesPath = destClientPath + 'Styles/';
    // var destServerPath = destPath + '/Src/Server/';
    // var destFeaturesPath = destClientPath + 'Features/';
    // var destDataServicesPath = destClientPath + 'DataServices/';
    // var destHomePath = destFeaturesPath + '/Home/';

    // var destNavigationPath = destFeaturesPath + 'Navigation/';
    // var destLoginPath = destFeaturesPath + 'Login/';
    // var destLookupListsPath = destFeaturesPath + 'LookupLists/';


     var srcClientPath = './';

   var srcCorePath = srcClientPath + '/';
    // var srcPackageManagersPath = srcClientPath + 'PackageManagers/';
    // var srcGulpPath = srcClientPath + 'Gulp/';
    // var srcDataServicesPath = srcClientPath + 'DataServices/';
    // var srcFeaturesPath = srcClientPath + 'Features/';
    // var srcHomePath = srcFeaturesPath + 'Home/';

    // var srcFeaturePath = srcClientPath + 'Features/Feature/';
    // var srcModalsPath = srcFeaturePath + 'Modals/';
    // var srcLookupListsPath = srcClientPath + '/Features/LookupLists/';

    // var srcComponentsPath = srcFeaturePath + 'Components/';
    // var srcLoginPath = srcFeaturesPath + 'Login/';
    // var srcStylesPath = srcClientPath + 'Styles/';
    // var srcNavigationPath = srcFeaturesPath + 'Navigation/';


    // var srcServerPath = './Server/';

    // Client
    core.generate(data, this, srcCorePath, destClientPath);
    src.generate(data, this, srcCorePath, destClientPath);
    staticFiles.generate(data, this, srcCorePath, destClientPath);
    tests.generate(data, this, srcCorePath, destClientPath);

  }

  install() {}
};
