var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));
const copier = require('./templateCopier.js');
module.exports.generate = function (data, runner, basepath) {

 

  copier.copyTpl(runner, './Gulp/_gulp.browserSync.js', basepath + '/gulp.browserSync.js', data);
  copier.copyTpl(runner, './Gulp/_gulp.build.js', basepath + '/gulp.build.js', data);
  copier.copyTpl(runner, './Gulp/_gulp.codeQuality.js', basepath + '/package.json', data)

};
