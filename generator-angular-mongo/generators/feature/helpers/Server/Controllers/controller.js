module.exports.generate = function (data, runner, _srcPath, destPath) {
  let _srcController = _srcPath + '/Controllers/_controller.js';
  let destController = destPath + '/Controllers/' + data.camelCasePlural + '.Server.Controller.js';

  console.log('_srcController=' + _srcController);
  console.log('destController=' + destController);

  data.copier.copyTpl(runner, _srcController, destController, data);
};
