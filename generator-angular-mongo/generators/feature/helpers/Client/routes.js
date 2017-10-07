module.exports.generate = function (data, runner, _srcPath, destPath) {
  let _srcRoute = _srcPath + '_routes.js';
  let destRoute = destPath + data._.pluralize(data._.camelCase(data.name)) + 'routes.js';

  data.copier.copyTpl(runner, _srcRoute, destRoute, data);
};
