module.exports.generate = function (data, runner, _srcPath, destPath) {
  let _srcApi = _srcPath + 'Api/_api.js';
  let destApi = destPath + '/Apis/' + data.camelCasePlural + 'Api.js';
  data.copier.copyTpl(runner, _srcApi, destApi, data);
};
