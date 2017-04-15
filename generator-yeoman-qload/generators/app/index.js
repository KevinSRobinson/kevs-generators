'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the world-class ' + chalk.red('generator-yeoman-qload') + ' generator!'
    ));

    // const prompts = [{
    //   type: 'confirm',
    //   name: 'someAnswer',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];

    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // });
  }

  writing() {
    this.fs.copy(
      this.templatePath('IContactView.vb'),
      this.destinationPath('Generated\IContactView.vb')
    );

    this.fs.copyTpl(
      this.templatePath('Contacts/List/IContactsListView.vb'),
      this.destinationPath('Generated/IContactsListView.vb'),
      {
        DtoName: 'OrganisationDto',
        ClassName: 'Organisation'
      }
    );


    this.fs.copyTpl(
      this.templatePath('Contacts/List/IContactsListView.vb'),
      this.destinationPath('Generated/IContactsListView.vb'),
      {
        DtoName: 'OrganisationDto',
        ClassName: 'Organisation'
      }
    );

    this.fs.copyTpl(
      this.templatePath('Contacts/List/ucContactsViewPresenter.vb'),
      this.destinationPath('Generated/Contacts/List/ucContactsViewPresenter.vb'),
      {
        DtoName: 'OrganisationDto',
        ClassName: 'Organisation'
      }
    );
  }

  install() {
    //this.installDependencies();
  }
};
