module.exports.generate = function (data, runner, _srcPath, destPath) {
  let _srcDataServices = _srcPath + 'DataServices/_dataServices.js';
  let destDataServices = destPath + data.plural + 'dataService.js';

  data.copier.copyTpl(runner, _srcDataServices, destDataServices, data);
};
