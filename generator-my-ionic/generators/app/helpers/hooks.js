const copier = require('../../../../Core/templateCopier.js');

module.exports.generate = function (data, runner, srcPath, destPath) {

  srcPath = srcPath + "/hooks/";
  destPath = destPath + "/hooks/";

  copier.copyTpl(runner, srcPath + '*.*', destPath, data);

   

};
