var Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const _ = require('lodash');
_.mixin(require('lodash-inflection'));

module.exports.generate = function (data, runner, basepath) {
  
  var coreAppFilesPath  = basepath;

  var _srcCoreAppFilesPath  = './Client/';
  var _srcViewsPath = './Client/Views/';

  copier.copyTpl(runner, _srcCoreAppFilesPath + '_appRun.js', coreAppFilesPath + 'appRun.js', data);
  copier.copyTpl(runner, _srcCoreAppFilesPath + '_app.js', coreAppFilesPath + 'app.js', data);
  copier.copyTpl(runner, viewsPath + 'auth0Service.js', coreAppFilesPath + 'auth0Service.js', data)


  // runner.fs.copyTpl(
  //   runner.templatePath('_auth0Service.js'),
  //   runner.destinationPath(basepath + '/auth0Service.js'), {
  //     data: data
  //   }
  // );
  // runner.fs.copyTpl(
  //   runner.templatePath('_IndexPage.html'),
  //   runner.destinationPath(basepath + '/IndexPage.html'), {
  //     data: data
  //   }
  // );
  // runner.fs.copyTpl(
  //   runner.templatePath('_package.json'),
  //   runner.destinationPath(basepath + '/package.json'), {
  //     data: data
  //   }
  // );
  // runner.fs.copyTpl(
  //   runner.templatePath('_routes.js'),
  //   runner.destinationPath(basepath + '/routes.js'), {
  //     data: data
  //   }
  // );

  // for (var key in data.model.properties) {
  //   runner.fs.copyTpl(
  //     runner.templatePath('_routes.js'),
  //     runner.destinationPath(basepath + '/Features/' + key + '/routes.js'), {
  //       data: data
  //     }
  //   );
  // }

  // runner.fs.copyTpl(
  //   runner.templatePath('./DataServices/_angularServices.js'),
  //   runner.destinationPath(
  //     basepath + '/Features/DataServices/' + data.model.title + 'DataService.js'
  //   ), {
  //     data: data
  //   }
  //);
};
