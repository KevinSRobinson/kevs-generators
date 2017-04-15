
var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));


module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.argument('classname', { type: String, required: true })
    this.argument('includePresenter', { type: Boolean, required: false, default: false })
    // Next, add your custom code
    this.log('classname (arg) : ' + this.options.classname)
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the world-class ' + chalk.red('generator-yeoman-qload') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    },
    {
      type: 'input',
      name: 'featurename',
      message: 'Enter a name for the feature',
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'Select Features',
      choices: [
        {name: 'option1', value : 'option1', checked: true},
        {name: 'option2', value : 'option2', checked: true},
        {name: 'option3', value : 'option3', checked: true},
      ]
    }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props)

      this.log('option1 = ' + _.includes(props.features, 'option1'));
      this.log('option2 = ' + _.includes(props.features, 'option2'));
      this.log('option3 = ' + _.includes(props.features, 'option3'));

      this.props = props;
    });
  }

  writing() {


    var featureFolderName = 'Generated/' + this.options.classname + 's/';
    var interfaceName = 'I' + this.options.classname + 'sListView';
    var presenterName = this.options.classname + 'sListPresenter';
    var userControlName = 'uc' + this.options.classname + 'sListView';
    var ttt = _.kebabCase;

    this.log(_.kebabCase(userControlName));
    this.log(_.startCase(userControlName));
    this.log(_.pluralize("Category"));
   

    if (this.options.includePresenter) {
      //Presenter
      this.fs.copyTpl(
        this.templatePath('MVP/List/presenter.vb'),
        this.destinationPath(featureFolderName + '/List/' + presenterName + '.vb'),
        {
          DtoName: this.options.classname + 'Dto',
          ClassName: this.options.classname
        }
      );
    }




    ///////////////////////////////
    //UserControl - Code Behind
    this.fs.copyTpl(
      this.templatePath('MVP/List/UserControl/ucListView.vb'),
      this.destinationPath(featureFolderName + '/List/' + userControlName + '.vb'),
      {
        DtoName: this.options.classname + 'Dto',
        ClassName: this.options.classname
      }
    );

    //UserControl - Designer
    this.fs.copyTpl(
      this.templatePath('MVP/List/UserControl/ucContactsView.Designer.vb'),
      this.destinationPath(featureFolderName + '/List/' + userControlName + '.Designer.vb'),
      {
        DtoName: this.options.classname + 'Dto',
        ClassName: this.options.classname
      }
    );

    //UserControl - Resources File
    this.fs.copyTpl(
      this.templatePath('MVP/List/UserControl/ucContactsView.resx'),
      this.destinationPath(featureFolderName + '/List/' + userControlName + '.resx'),
      {
        DtoName: this.options.classname + 'Dto',
        ClassName: this.options.classname
      }
    );

  }
  bower() {
    var bowerJson = {
      name: 'myapp',
      licence: 'mit',
      dependancies: {}
    };

    bowerJson.dependancies['angular'] = "1.5.7";

    this.fs.writeJSON('Generated/Contacts/List/bower.json', bowerJson);
  }

  install() {
    this.installDependencies();
  }
};