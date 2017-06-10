var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));
var Generator = require('yeoman-generator');

_.mixin(require('lodash-inflection'));
const copier = require('./templateCopier.js')

module.exports.generate = function (data, runner, destPath) {

  var srcHomePath = 'Client/Features/Home/';
  var srcHomeComponentPath = srcHomePath + 'Components/Home/';

  var destHomePath = destPath + '/Features/Home/';
  var destHomeComponentPath = destHomePath + '/Components/Home/';

  //routes
  copier.copyTpl(runner, srcHomePath + '_routes.js', destHomePath + 'routes.js', data);

  //home component
  copier.copyTpl(runner, srcHomeComponentPath + '_home.js', destHomeComponentPath + 'home.js', data);
  copier.copyTpl(runner, srcHomeComponentPath + '_homeTemplate.html', destHomeComponentPath + 'homeTemplate.html', data);


};
