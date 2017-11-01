const copier = require('..//templateCopier.js');

module.exports.generate = function (data, runner, _srcPath, destPath) {

  copier.copyTpl(runner, _srcPath + '_.bowerrc', destPath + '.bowerrc', data);
  copier.copyTpl(runner, _srcPath + '_bower.json', destPath + 'bower.json', data);
  copier.copyTpl(runner, _srcPath + '_package.json', destPath + 'package.json', data)
};
