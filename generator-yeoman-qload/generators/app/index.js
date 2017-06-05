
var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));

const mvpEdit = require("./edit.js");
const mvpList = require("./list.js");
const mvpDetails = require("./details.js");
const mvpMasterDetails = require("./masterDetails.js");

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

  
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

    const prompts = [
    {
      type: 'input',
      name: 'featureName',
      message: 'Enter a name for the feature',
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'Select Features',
      choices: [
        {name: 'Details', value : 'Details', checked: true},
        {name: 'Edit', value : 'Edit', checked: true},
        {name: 'List', value : 'List', checked: true},
        {name: 'MasterDeails', value : 'MasterDeails', checked: true},
        {name: 'Create', value : 'Create', checked: true},
      ]
    }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(props)

      this.log('Details = ' + _.includes(props.features, 'Details'));
      this.log('Edit = ' + _.includes(props.features, 'Edit'));
      this.log('List = ' + _.includes(props.features, 'List'));
      this.log('MasterDeails = ' + _.includes(props.features, 'MasterDeails'));
      this.log('Create = ' + _.includes(props.features, 'Create'));

      this.props = props;
    });
  }

  writing() {

    var basepath = "C:/Source/Webapis/QloadWinForms/QloadWinForms/"

     

      if(_.includes(this.props.features, 'List') ) {
            mvpList.generate(this, basepath);
      }

      if(_.includes(this.props.features, 'Details') ) {
           mvpDetails.generate(this, basepath);
      }
     
      if(_.includes(this.props.features, 'Edit') ) {
           mvpEdit.generate(this, basepath);
      }

      if(_.includes(this.props.features, 'Details') ) {
            mvpMasterDetails.generate(this, basepath);
      }
   
     
  }
  bower() {
    // var bowerJson = {
    //   name: 'myapp',
    //   licence: 'mit',
    //   dependancies: {}
    // };

    //bowerJson.dependancies['angular'] = "1.5.7";

    //this.fs.writeJSON('Generated/Contacts/List/bower.json', bowerJson);
  }

  install() {
    //this.installDependencies();
  }
};