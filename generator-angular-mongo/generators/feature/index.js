'use strict';
const Generator = require('yeoman-generator');
const _ = require('lodash');
const components = require('./helpers/components.js');
const featureRoutes = require('./helpers/routes.js');
const dataServices = require('./helpers/dataServices.js');

const serverRoutes = require('./helpers/Server/routes.js');

_.mixin(require('lodash-inflection'));

module.exports = class extends Generator {
  prompting() {

    const prompts = [{
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

    var feature = require('../models/' + this.props.feature + '.json');

    var srcClientPath = './Client/';
    var srcDataServicesPath = srcClientPath + 'DataServices/';
    var srcComponentsPath = srcClientPath + 'Components/';

    // Server Source Paths
    var srcServerPath = './Server/';
    var srcServerRoutesPath = srcServerPath + 'Routes/';

    // var srcFeaturesPath = srcClientPath + 'Features/';
    // var srcFeaturePath = srcClientPath + '/';
    // var srcNavigationPath = srcFeaturesPath + 'Navigation/';
    // var destServerPath = destPath + '/Src/Server/';
    // var featurePath = destFeaturesPath;

    // Client Destination Paths
    var destPath = 'C:/Repos/Generated/';
    var destClientPath = destPath + 'Src/Client/';
    var destFeaturesPath = destClientPath + 'Features/';
    var destComponentsPath = destFeaturesPath + feature.name + '/Components/';
    var destDataServicesPath = destClientPath + 'DataServices/';

    //  var destFeaturePath = featurePath + data.name + '/';
    //  var destComponentsPath = featurePath + data.name + '/Components/';
    // // var destModalsPath = featurePath + data.name + '/Modals/';
    var destServerPath = destPath + 'Src/Server/';
    var destServerRoutesPath = destServerPath + 'Routes/';

    var data = {
      appName: this.props.appName,
      name: feature.title,
      plural: _.pluralize(feature.title),
      camelCase: _.camelCase(feature.title),
      camelCasePlural: _.pluralize(_.camelCase(feature.title)),
      modalServiceName: _.pluralize(feature.title) + 'ModelService',
      serviceName: _.pluralize(feature.title) + 'DataService',
      listComponentTemplateUrl: _.pluralize(feature.title) + 'ListTemplate',
      _: _,
      model: feature
    };



  

    // Client
    dataServices.generate(data, this, srcDataServicesPath, destDataServicesPath);
    featureRoutes.generate(data, this, srcClientPath, destFeaturesPath);
    components.generate(data, this, srcComponentsPath, destComponentsPath);


    // Server
    serverRoutes.generate(data, this, srcServerRoutesPath, destServerRoutesPath);
  }

  install() {}
};
