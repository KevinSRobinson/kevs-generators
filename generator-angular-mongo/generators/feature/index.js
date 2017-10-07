'use strict';
const Generator = require('yeoman-generator');
const _ = require('lodash');
const components = require('./helpers/Client/components.js');
const featureRoutes = require('./helpers/Client/routes.js');
const dataServices = require('./helpers/Client/dataServices.js');

const serverRoutes = require('./helpers/Server/routes.js');
const serverModel = require('./helpers/Server/Models/models.js');

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

    // Client Destination Paths
    var destPath = 'C:/Repos/Generated/';
    var destClientPath = destPath + 'Src/Client/';
    var destFeaturesPath = destClientPath + 'Features/';
    var destComponentsPath = destFeaturesPath + feature.plural + '/Components/';
    var destDataServicesPath = destClientPath + 'DataServices/';

    // Server Destination Paths
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
      model: feature,
      copier: require('./templateCopier.js')
    };

    // Client
    dataServices.generate(data, this, srcDataServicesPath, destDataServicesPath);
    featureRoutes.generate(data, this, srcClientPath, destFeaturesPath);
    components.generate(data, this, srcComponentsPath, destComponentsPath);

    // Server
    serverRoutes.generate(data, this, srcServerRoutesPath, destServerRoutesPath);
    serverModel.generate(data, this, srcServerPath, destServerPath);
  }

  install() {}
};
