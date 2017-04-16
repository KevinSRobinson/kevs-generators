var generators = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));

const helpers = require('../Utils/templateHelpers.js').helpers;

module.exports = class extends generators {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.argument('classname', { type: String, required: true })

  }
  prompting() {

    this.log(yosay(
      'Welcome to the world-class ' + chalk.red('generator-yeoman-qload') + ' generator!'
    ));

  }

  writing() {

    //source files
    let featureType = "Details";

    var _srcPath = "Details/";
    var helper = new helpers(featureType, this.options.classname);
    
    var outputFolder = "Generated"
    
    //template model
    var model = {
      DtoName: this.options.classname + 'Dto',
      ClassName: this.options.classname
    }

    //Interface
    this.fs.copyTpl(
      this.templatePath(_srcPath + helper.srcInterfaceFileName),
      this.destinationPath(outputFolder + helper.featureFolderName + helper.interfaceFileName),
      model
    );
    ///////////////////////////////
    //UserControl - Code Behind
    this.fs.copyTpl(this.templatePath(_srcPath + helper.srcUserControlCodeBehindFileName),
      this.destinationPath(outputFolder + helper.featureFolderName + helper.userControlCodeBehindFileName),
      model
    );
    //UserControl - Designer
    this.fs.copyTpl(
      this.templatePath(_srcPath + helper.srcUserControlDesignerFileName),
      this.destinationPath(outputFolder + helper.featureFolderName + helper.userControlDesignerFileName),
      model
    );


  }
}