'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const core = require('./core.js');
const components = require('./components.js');


_.mixin(require('lodash-inflection'));
module.exports = class extends Generator {
  
  writing() {


    var basepath = 'C:/Repos/Generated/';
    var model = require('./data.json');
    //core.generate(this, basepath);

    components.generate(this, basepath + "/Features/" + model.title + "/");

  }

  install() {
   
  }
};
