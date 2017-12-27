'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const destPaths = require('./destPaths');
//const configHelper = require('./helpers/configHelper'),;
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
const generator = require('./generator');
const prompts = require('./prompts');
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
      default:  this.config.get('destPath'),
      store: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props);
      this.props = props;
    });
  }
  writing() {

    console.log(destPaths.destPaths);
    //destPaths.destPaths.saveOutputPath(this, this.props.destPath);

     generator.generate(this);

  }
};
