const copier = require('../templateCopier.js');

module.exports.generate = function (data, runner, _srcPath, destPath) {

  var _srcNavigationComponentsPath = _srcPath;

  var destNavigationPath = destPath + '/Features/';
  var destNavigationComponentsPath = destNavigationPath + '/Components/';

  copier.copyTpl(runner, _srcNavigationComponentsPath + '_mainLayout.js', destNavigationPath + 'login.html', data);
  copier.copyTpl(runner, _srcNavigationComponentsPath + '_navigation.html', destNavigationComponentsPath + 'login.js', data);

};
