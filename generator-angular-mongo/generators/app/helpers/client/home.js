const copier = require('../templateCopier.js');

module.exports.generate = function (data, runner, _srcPath, destPath) {
  var _srcHomePath = _srcPath;
  var _srcHomeComponentPath = _srcHomePath + '/Components/Main/';

  var destHomePath = destPath;
  var destHomeComponentPath = destHomePath + 'Components/Main/';

  // Routes
  copier.copyTpl(runner, _srcHomePath + '_routes.js', destHomePath + 'routes.js', data);

  // Home component
  copier.copyTpl(runner, _srcHomeComponentPath + '_main.js', destHomeComponentPath + 'main.js', data);
  copier.copyTpl(runner, _srcHomeComponentPath + '_mainTemplate.html', destHomeComponentPath + 'homeTemplate.html', data);
};
