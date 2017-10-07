module.exports.generate = function (data, runner, _srcPath, destPath) {

  data.copier.copyTpl(runner, _srcPath + '_dataServices.js', destPath + data.plural + 'dataService.js', data);
};
