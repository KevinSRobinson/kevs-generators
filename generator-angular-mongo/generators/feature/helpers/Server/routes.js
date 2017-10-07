const copier = require('../../templateCopier.js');

module.exports.generate = function (data, runner, _srcPath, destPath) {

  
  console.log('_srcPath = ' + _srcPath);
  console.log('destPath = ' + destPath);

  copier.copyTpl(runner, _srcPath + '/_routes.js', destPath +  '/routes.js', data);

};
