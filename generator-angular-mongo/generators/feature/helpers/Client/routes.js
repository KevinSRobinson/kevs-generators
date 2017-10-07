module.exports.generate = function (data, runner, _srcPath, destPath) {
  data.copier.copyTpl(runner, _srcPath + '_routes.js', destPath + data._.pluralize(data._.camelCase(data.name)) + 'routes.js', data);
};
