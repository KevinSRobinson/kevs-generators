'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const core = require('./helpers/client/core.js');
const components = require('./helpers/client/Feature/components.js');
const modals = require('./helpers/client/modals.js');
const gulp = require('./helpers/client/gulp.js');
const packagemanagers = require('./helpers/client/package-managers.js');
const serverCore = require('./helpers/Server/serverCore.js');
const serverFeatures = require('./helpers/Server/serverFeatures.js');
const home = require('./helpers/client/home.js');
const login = require('./helpers/client/login.js');
const styles = require('./helpers/client/styles.js');
const navigation = require('./helpers/client/navigation.js');
const featureRoutes = require('./helpers/client/Feature/routes.js');
const dataServices = require('./helpers/client/Feature/dataServices.js');
var requireDir = require('require-dir');
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

  
      var person = require('./models/person.json');
      var organisation = require('./models/organisation.json');

    var models=  [];

    models.push(person);
    models.push(organisation);
   

    var features = require('./features.json');
    // Core.generate(this, basepath);
console.log(features.features);
console.log("-=------------------------------");
    var appDetails = {
       appName: this.props.appName,
       appTitle: 'Generated App'
    }

    
    var destPath = 'C:/Repos/Generated/';
    var destClientPath = destPath + 'Src/Client/';
    var destStylesPath = destClientPath + 'Styles/';
    var destServerPath = destPath + '/Src/Server/';
    var destFeaturesPath = destClientPath + 'Features/';
    var destDataServicesPath = destClientPath + 'DataServices/';
    var destHomePath = destFeaturesPath + '/Home/';
  
    var destNavigationPath = destFeaturesPath + 'Navigation/';
    var destLoginPath = destFeaturesPath + 'Login/';
    var destLookupListsPath = destFeaturesPath + 'LookupLists/';


    var srcClientPath = './Client/';
  
    var srcCorePath = srcClientPath + 'Core/';
    var srcPackageManagersPath = srcClientPath + 'PackageManagers/';
    var srcGulpPath = srcClientPath + 'Gulp/';
    var srcDataServicesPath = srcClientPath + 'DataServices/';
    var srcFeaturesPath = srcClientPath + 'Features/';
    var srcHomePath = srcFeaturesPath + 'Home/';

    var srcFeaturePath = srcClientPath + 'Features/Feature/';   
    var srcModalsPath = srcFeaturePath + 'Modals/';
    var srcLookupListsPath = srcClientPath + '/Features/LookupLists/';

    var srcComponentsPath = srcFeaturePath + 'Components/';
    var srcLoginPath = srcFeaturesPath + 'Login/';
    var srcStylesPath = srcClientPath + 'Styles/';
    var srcNavigationPath = srcFeaturesPath + 'Navigation/';
    

    var srcServerPath = './Server/';

    // Client
    

    core.generate(appDetails, this, srcCorePath, destClientPath);
    packagemanagers.generate(appDetails, this, srcPackageManagersPath, destClientPath);
    gulp.generate(appDetails, this, srcGulpPath, destPath);
    styles.generate(appDetails, this, srcStylesPath, srcStylesPath + '/Styles/');

    // // Core Features
    home.generate(appDetails, this, srcHomePath, destHomePath);
    login.generate(appDetails, this, srcLoginPath, destLoginPath);
    
     //lookups
         this.fs.copy(
            this.templatePath(srcLookupListsPath),
            this.destinationRoot(destLookupListsPath)
        );

    var featurePath = destFeaturesPath;

        
    var data = {
     appName: this.props.appName,
     models: models,
     features:features.features,
     _: _
    };

    serverCore.generate(data, this, srcServerPath, destServerPath + '/');
     
   
 }


  }

  install() {}
};

