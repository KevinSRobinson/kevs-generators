module.exports.generate = function (data, runner, _srcPath, destPath) {
  let _srcModel = _srcPath + 'Models/_models.js';
  let destModel = destPath + data.camelCasePlural + 'Model.js';

  data.copier.copyTpl(runner, _srcModel, destModel, data);
};
