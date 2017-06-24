const copier = require('../templateCopier.js');
module.exports.generate = function (data, runner, _srcPath, destPath) {

  var _srcLoginComponentsPath = _srcPath + 'Components/';

  var destLoginPath = destPath + '/Features/';
  var destLoginComponentsPath = destLoginPath + '/Components/';

  copier.copyTpl(runner, _srcLoginComponentsPath + '_login.html', destLoginPath + 'login.html', data);
  copier.copyTpl(runner, _srcLoginComponentsPath + '_login.js', destLoginComponentsPath + 'login.js', data);
  copier.copyTpl(runner, _srcPath + '_routes.js', destLoginComponentsPath + 'routes.js', data)

};
