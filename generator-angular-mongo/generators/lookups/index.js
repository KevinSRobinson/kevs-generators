'use strict';
const Generator = require('yeoman-generator');
const configHelper = require('../helpers/configHelper');
const chalk = require('chalk');
const yosay = require('yosay');
module.exports = class extends Generator {
  prompting() {

    console.log("OutputPath=", configHelper.getOutputPath(this));

    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the world-class ' +
        chalk.red('generator-yeoman-qload') +
        ' generator!'
      )
    );
    let prompts = [];
    let destPath = configHelper.getOutputPath(this);
    if (destPath === undefined) {
       prompts = [{
        type: 'input',
        name: 'destPath',
        message: 'Enter a Location for the app : ',
        default: 'C:/Repos/Generated1/',
        store: true
      }];
    }

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props);
      this.props = props;
    });
  }
  writing() {


    var srcClientPath = './';
    var destPath = 'C:/Repos/Generated/';
    var destClientPath = destPath + 'Src/Client/';
    var destFeaturesPath = destClientPath + 'Features/';
    var destLookupListsPath = destFeaturesPath + 'LookupLists/';

    this.fs.copy(
      this.templatePath(srcClientPath),
      this.destinationRoot(destLookupListsPath)
    );
    //serverCore.generate(data, this, srcServerPath, destServerPath + '/');
  }
  install() {}
};
