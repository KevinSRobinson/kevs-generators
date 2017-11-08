const copier = require('../../../../Core/templateCopier.js');

module.exports.generate = function (data, runner, srcPath, destPath) {


  copier.copyTpl(runner, srcPath + '*.*', destPath, data);

  // copier.copyTpl(runner, srcPath + '.babelrc.js', destPath + '.babelrc.js', data);
  // copier.copyTpl(runner, srcPath + '.gitignore', destPath + '.gitignore.js', data);
  // copier.copyTpl(runner, srcPath + '.eslintrc.json', destPath + '.eslintrc.json', data);
  // copier.copyTpl(runner, srcPath + '.editorconfig', destPath + '.editorconfig', data);
  // copier.copyTpl(runner, srcPath + '.index._ejs', destPath + '.index.js', data);
  

};
