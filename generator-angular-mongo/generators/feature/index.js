'use strict';
const Generator = require('yeoman-generator');
const _ = require('lodash');

// Client
const components = require('./helpers/Client/components.js');
const featureRoutes = require('./helpers/Client/routes.js');
const dataServices = require('./helpers/Client/dataServices.js');

// Server
const serverRoutes = require('./helpers/Server/routes.js');
const serverModel = require('./helpers/Server/Models/model.js');
const serverApi = require('./helpers/Server/Apis/api.js');
const serverController = require('./helpers/Server/Controllers/controller.js');

_.mixin(require('lodash-inflection'));

module.exports = class extends Generator {
  prompting() {
    const prompts = [{
      type: 'input',
      name: 'feature',
      message: 'Enter a name for the Feature',
      default: 'Comment'
    },
    {
      type: 'input',
      name: 'useAuth0',
      message: 'Use Auth0',
      default: 'false'
    }
  ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }
  writing() {
    var feature = require('../models/' + this.props.feature + '.json');

    // Main Output Path
    var destPath = 'C:/Repos/Generated/';

    // Client Source Paths
    var srcClientPath = './Client/';

    // Client Destination Paths
    var destClientPath = destPath + 'Src/Client/';
    var destFeaturesPath = destClientPath + 'Features/';

    // Server Source Paths
    var srcServerPath = './Server/';

    // Server Destination Paths
    var destServerPath = destPath + 'Src/Server/';

    var data = {
      appName: this.props.appName,
      name: feature.title,
      useAuth0: this.props.useAuth0,
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
    dataServices.generate(data, this, srcClientPath, destFeaturesPath);
    featureRoutes.generate(data, this, srcClientPath, destFeaturesPath);
    components.generate(data, this, srcClientPath, destFeaturesPath);

    // Server
    serverRoutes.generate(data, this, srcServerPath, destServerPath);
    serverModel.generate(data, this, srcServerPath, destServerPath);
    serverApi.generate(data, this, srcServerPath, destServerPath);
    serverController.generate(data, this, srcServerPath, destServerPath);
  }
};
