const copier = require('../templateCopier.js');

module.exports.generate = function (appDetails, runner, srcPath, destPath) {

  copier.copyTpl(runner, srcPath + '_index.html', destPath + 'index.html', appDetails);

  copier.copyTpl(runner, srcPath + '_env.js', destPath + 'env.js', appDetails);

  if (appDetails.useAuth0 = true) { 
    copier.copyTpl(runner, srcPath + '_appRun.js', destPath + 'app.run.js', appDetails);
  }  
  
  
  copier.copyTpl(runner, srcPath + '_appConfig.js', destPath + 'app.config.js', appDetails);
  copier.copyTpl(runner, srcPath + '_config.json', destPath + 'config.json', appDetails);
  //copier.copyTpl(runner, srcPath + '_auth0Service.js', destPath + 'auth0Service.js', appDetails);
  copier.copyTpl(runner, srcPath + '_app.js', destPath + 'app.base.js', appDetails);
  copier.copyTpl(runner, srcPath + '_routes.js', destPath + 'routes.js', appDetails);
  
};
