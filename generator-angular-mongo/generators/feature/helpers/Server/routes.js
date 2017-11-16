module.exports.generate = function (data, runner, _srcPath, destPath) {
  let _srcRoute = _srcPath + 'Routes/_routes.js';
  let destRoute = destPath + 'Routes/routes.js';

  data.copier.copyTpl(runner, _srcRoute, destRoute, data);
};
