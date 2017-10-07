
'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const components = require('./helpers/components.js');
const featureRoutes = require('./helpers/routes.js');
const dataServices = require('./helpers/dataServices.js');

const serverRoutes = require('./helpers/Server/routes.js');

var requireDir = require('require-dir');

_.mixin(require('lodash-inflection'));
module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Create a New Feature' +
        chalk.red('generator-yeoman-qload') +
        ' generator!'
      )
    );

    const prompts = [ 
    {
      type: 'input',
      name: 'feature',
      message: 'Enter a name for the Feature',
      default: 'Comment'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props);
      this.props = props;
    });
  }
  writing() {


    console.log( this.props.feature);
  
      var feature = require('../models/' + this.props.feature + '.json');
      //var organisation = require('./models/organisation.json');

    var models=  [];

    models.push(feature);

    var appDetails = {
       appName: 'app',
       appTitle: 'Generated App'
    }

    
    var destPath = 'C:/Repos/Generated/';
    var destClientPath = destPath + 'Src/Client/';
        
    var destFeaturesPath = destClientPath + 'Features/';
    var destDataServicesPath = destClientPath + 'DataServices/';
    var destHomePath = destFeaturesPath + '/Home/';
  
    var destNavigationPath = destFeaturesPath + 'Navigation/';

    var srcClientPath = './';
 
       
    var srcDataServicesPath = srcClientPath + 'DataServices/';
    var srcFeaturesPath = srcClientPath + 'Features/';
    var srcHomePath = srcFeaturesPath + 'Home/';

    var srcFeaturePath = srcClientPath + '/';   
    var srcModalsPath = srcFeaturePath + 'Modals/';
    var srcComponentsPath = srcFeaturePath + 'Components/';
    var srcNavigationPath = srcFeaturesPath + 'Navigation/';
    var destServerPath = destPath + '/Src/Server/';

    var featurePath = destFeaturesPath;

        
    var data = {
     appName: this.props.appName,
     models: models,
     features:feature,
     _: _
    };

    



  let model = feature;

  var data = {
      appName: this.props.appName,
      name: model.title,
     plural: _.pluralize(model.title),
      camelCase: _.camelCase(model.title),
     camelCasePlural: _.pluralize(_.camelCase(model.title)),
     modalServiceName: _.pluralize(model.title) + 'ModelService',
     serviceName: _.pluralize(model.title) + 'DataService',
     listComponentTemplateUrl: _.pluralize(model.title) + 'ListTemplate',
     model: model,
     features: models,
     _: _
    };


   var destFeaturePath = featurePath + data.name + '/';
   var destComponentsPath = featurePath + data.name + '/Components/';
   var destModalsPath = featurePath + data.name + '/Modals/';

   var destServerRoutesPath = destServerPath + '/Routes/';
   var srcServerPath = './Server/';
   var srcRoutesPath = srcServerPath + '/Routes/';

   
    //Client
    dataServices.generate(data, this, srcDataServicesPath, destDataServicesPath);
    //featureRoutes.generate(data, this, srcFeaturePath, destFeaturePath);
    components.generate(data, this, srcComponentsPath, destComponentsPath);

    console.log("srcServerPath =" + srcServerPath);
    console.log("destServerPath =" + destServerPath);
    //Server
    serverRoutes.generate(data, this, srcServerPath, destServerRoutesPath);

  }

  install() {}
};

