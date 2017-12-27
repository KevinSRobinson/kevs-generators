let destPaths = function () {

  var _base = ""
  let setBasePath = function (path) {
    _base = path;
  }

  let client = _base + '/js/client/';
  let destServer = _base + '/Src/Server/';
  let destFeatures = _base + 'Features/';
  let destHome = _base + '/Home/';
  let destLogin = _base + 'Login/';
  let destClient = dest + '/js/client/';

  let getOutputPath = function (runner) {
    return runner.config.get('destPath');
  };
  let saveOutputPath = function saveOutputPath(runner, destPath) {
    _base = destPat;
    return runner.config.set('destPath', destPath);
  };

  return {
    setBase: setBase,
    client: client,
    server: destServer,
    features: destFeatures,
    homeh: destHome,
    login: destLogin,
    getOutputPath: getOutputPath,
    saveOutputPath: saveOutputPath
  }
}
module.exports.destPaths = destPaths;
