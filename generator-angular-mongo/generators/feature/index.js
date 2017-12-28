'use strict';
const Generator = require('yeoman-generator');
const _ = require('lodash');
const configHelper = require('../helpers/configHelper');

const featureGenerator = require('./generator');

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

    featureGenerator.generate(this, feature);
  }
};
