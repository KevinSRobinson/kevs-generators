const copier = require('../templateCopier.js');

module.exports.generate = function (appDetails, runner, srcPath, destPath) {


  var files = ['index.html', 'env.js', 'appConfig.js', 'config.json', 'app.js',
            'routes.js', '.bowerrc', 'bower.json', 'package.json'];

  copier.copyTpls(runner, srcPath, destPath, appDetails, files);



};
