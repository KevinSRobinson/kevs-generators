var generators = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require("lodash-inflection"));

module.exports = class extends generators {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.argument('classname', { type: String, required: true })
    this.argument('excludepresenter', { type: Boolean, required: false, default: false })

  }
  prompting() {

    this.log(yosay(
      'Welcome to the world-class ' + chalk.red('generator-yeoman-qload') + ' generator!'
    ));

  }

  writing() {

    //source files
    var _srcPath = 'MVP/List/';
    var _srcInterface =  'IListView.vb';
    var _srcPresenter =  'presenter.vb';
    var _srcUserControlCodeBehind =  '/UserControl/ucListView.vb';
    var _srcUserControlDesigner =  '/UserControl/ucContactsView.Designer.vb';

    //templateVariables
    var featureFolderName = 'Generated1/' + _.pluralize(this.options.classname) + '/List/';
    var interfaceName = 'I' + this.options.classname + 'sListView';
    var presenterName = this.options.classname + 'sListPresenter';
    var userControlName = 'uc' + this.options.classname + 'sListView';

    //template names
    var featureFolderName = '/List/' + presenterName + '.vb'

    //template model
    var model = {
      DtoName: this.options.classname + 'Dto',
      ClassName: this.options.classname
    }



    
    //Interface
    this.fs.copyTpl(
      this.templatePath(_srcPath + _srcInterface),
      this.destinationPath(featureFolderName + interfaceName + '.vb'),
      model
    );

    //Presenter
    if (!this.options.excludepresenter) {
      this.fs.copyTpl(this.templatePath(_srcPath + _srcPresenter),
        this.destinationPath(featureFolderName + presenterName + '.vb'),
        model);
    }

    ///////////////////////////////
    //UserControl - Code Behind
    this.fs.copyTpl(this.templatePath(_srcPath + _srcUserControlCodeBehind),
      this.destinationPath(featureFolderName + userControlName + '.vb'),
     model
    );
    //UserControl - Designer
    this.fs.copyTpl(
      this.templatePath(_srcPath + _srcUserControlDesigner),
      this.destinationPath(featureFolderName + _srcUserControlDesigner),
      model
    );
  

  }
}