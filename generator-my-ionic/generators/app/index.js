'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const core = require('./helpers/core.js');
const hooks = require('./helpers/hooks.js');

const _ = require('lodash');


module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantabulous ' + chalk.red('generator-my-ionic') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    var destPath = 'C:/Repos/GeneratedIonic/';   

        
        //var model = require('./data.json');
       // var features = require('./features.json');
        // Core.generate(this, basepath);
    
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
    hooks.generate(data, this, srcCorePath, destClientPath);
  }

  install() {
    this.installDependencies();
  }
};
