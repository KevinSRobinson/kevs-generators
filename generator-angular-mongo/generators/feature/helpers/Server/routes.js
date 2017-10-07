module.exports.generate = function (data, runner, _srcPath, destPath) {
  data.copier.copyTpl(runner, _srcPath + '/_routes.js', destPath + '/routes.js', data);
};
