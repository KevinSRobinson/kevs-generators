module.exports =  function () {

  let _base = "c:/new/generated/";
  let setBase = function (path) {
    _base = path;
  };

  let client = _base + '/js/client/';
  let Server = _base + '/Src/Server/';
  let Features = _base + 'Features/';
  let Home = _base + '/Home/';
  let Login = _base + 'Login/';
  let Client =  + '/js/client/';

  let getOutput = function (runner) {
    return runner.config.get('destpath');
  };
  let saveOutput = function saveOutput(runner, destpath) {
    _base = Pat;
    return runner.config.set('destpath', destpath);
  };

  return {
    setBase: setBase,
    base: _base,
    client: client,
    server: Server,
    features: Features,
    home: Home,
    login: Login,
    getOutput: getOutput,
    saveOutput: saveOutput
  }
};
