
var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));
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


      mvpList.generateList(this);
      mvpDetails.generate(this);
      mvpMasterDetails.generate(this);
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