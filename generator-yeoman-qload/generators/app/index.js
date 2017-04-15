
var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.argument('classname', {type: String, required: true})
    // Next, add your custom code
    this.log('classname (arg) : ' + this.options.classname)
    this.option('babel'); // This method adds support for a `--babel` flag
  }
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