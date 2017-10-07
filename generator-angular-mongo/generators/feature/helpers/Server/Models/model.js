module.exports.generate = function (data, runner, _srcPath, destPath) {
  let _srcModel = _srcPath + 'Models/_models.js';
  let destModel = destPath + 'Models/' + data.camelCasePlural + 'Model.js';

  console.log(_srcModel);
  console.log(destModel);
  data.copier.copyTpl(runner, _srcModel, destModel, data);
};
