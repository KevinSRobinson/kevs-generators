const copier = require('../templateCopier.js');

module.exports.generate = function (data, runner, srcPath, destPath) {
  copier.copyTpl(runner, srcPath + '_index.html', destPath + 'index.html', data);

  copier.copyTpl(runner, srcPath + '_env.js', destPath + 'env.js', data);
  copier.copyTpl(runner, srcPath + '_appRun.js', destPath + 'app.run.js', data);
  copier.copyTpl(runner, srcPath + '_appConfig.js', destPath + 'app.config.js', data);
  copier.copyTpl(runner, srcPath + '_config.json', destPath + 'config.json', data);
  copier.copyTpl(runner, srcPath + '_auth0Service.js', destPath + 'auth0Service.js', data);
  copier.copyTpl(runner, srcPath + '_app.js', destPath + 'app.base.js', data);
  copier.copyTpl(runner, srcPath + '_routes.js', destPath + 'routes.js', data);

};
