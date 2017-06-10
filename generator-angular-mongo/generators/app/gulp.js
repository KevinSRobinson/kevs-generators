var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));
const copier = require('./templateCopier.js');
module.exports.generate = function (data, runner, basepath) {

 

  copier.copyTpl(runner, './Gulp/_gulp.browserSync.js', basepath + '/gulp.browserSync.js', data);
  copier.copyTpl(runner, './Gulp/_gulp.build.js', basepath + '/gulp.build.js', data);
  copier.copyTpl(runner, './Gulp/_gulp.codeQuality.js', basepath + '/gulp.codeQuality.js', data)

  copier.copyTpl(runner, './Gulp/_gulp.devBuild.js', basepath + '/gulp.devBuild.js', data)
  copier.copyTpl(runner, './Gulp/_gulp.fontsImages.js', basepath + '/gulp.fontsImages.js', data)
  copier.copyTpl(runner, './Gulp/_gulp.styles.js', basepath + '/gulp.styles.js', data)

  copier.copyTpl(runner, './Gulp/_gulp.utils.js', basepath + '/gulp.utils.js', data)
  copier.copyTpl(runner, './Gulp/_gulp.versioning.js', basepath + '/gulp.versioning.js', data)
};
