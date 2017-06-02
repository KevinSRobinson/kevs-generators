'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));
module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the magnificent ' + chalk.red('generator-angular-mongo') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'appName',
      message: 'Name of the Angular Application '
    }, {
      type: 'input',
      name: 'appTitle',
      message: 'Title of the Application '
    }];



    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    var data = {
      appName: this.props.appName,
      appTitle: this.props.appTitle,
      featureName: "contact",
      featureNamePlural: "contacts",
      dataServiceName:  "contactsDataService"
    }

    this.fs.copyTpl(
      this.templatePath('_appRun.js'),
      this.destinationPath('Generated/appRun.js'), {
        data: data
      }
    );
    this.fs.copyTpl(
      this.templatePath('_app.js'),
      this.destinationPath('Generated/app.js'), {
        data: data
      }
    );
    this.fs.copyTpl(
      this.templatePath('_auth0Service.js'),
      this.destinationPath('Generated/auth0Service.js'), {
        data: data
      }
    );
    this.fs.copyTpl(
      this.templatePath('_IndexPage.html'),
      this.destinationPath('Generated/IndexPage.html'), {
        data: data
      }
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('Generated/package.json'), {
        data: data
      }
    );
    this.fs.copyTpl(
      this.templatePath('_routes.js'),
      this.destinationPath('Generated/routes.js'), {
        data: data
      }
    );

     this.fs.copyTpl(
      this.templatePath('_routes.js'),
      this.destinationPath('Generated/Features/' + data.featureNamePlural +  '/routes.js'), {
        data: data
      }
    );


     this.fs.copyTpl(
      this.templatePath('./DataServices/_angularServices.js'),
      this.destinationPath('Generated/Features/DataServices/'+ data.featureNamePlural +'.js'), {
        data: data
      }
    );
  }

  install() {
    this.installDependencies();
  }
};
