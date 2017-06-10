var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));
const copier = require('./templateCopier.js');
module.exports.generate = function (data, runner, srcPath, destPath) {

   copier.copyTpl(runner, srcPath + '_gulp.browserSync.js', destPath + 'gulp.browserSync.js', data);
  copier.copyTpl(runner,  srcPath + '_gulp.build.js', destPath + 'gulp.build.js', data);
  copier.copyTpl(runner,  srcPath + '_gulp.codeQuality.js', destPath + 'gulp.codeQuality.js', data)

  copier.copyTpl(runner,  srcPath + '_gulp.devBuild.js', destPath + 'gulp.devBuild.js', data)
  copier.copyTpl(runner,  srcPath + '_gulp.fontsImages.js', destPath + 'gulp.fontsImages.js', data)
  copier.copyTpl(runner,  srcPath + '_gulp.styles.js', destPath + 'gulp.styles.js', data)

  copier.copyTpl(runner,  srcPath + '_gulp.utils.js', destPath + 'gulp.utils.js', data)
  copier.copyTpl(runner,  srcPath + '_gulp.versioning.js', destPath + 'gulp.versioning.js', data)
};
