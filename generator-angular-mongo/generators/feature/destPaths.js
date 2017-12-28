module.exports =  function () {

  let _base = "c:/new/generated/";
  let setBase = function (path) {
    _base = path;
  };

  let client = _base + 'js/client/';
  let features = client + 'features/';


  let details = features + 'details/';



  let Server = _base + 'src/Server/';


  let Home = _base + 'home/';
  let Login = _base + 'login/';
  let Client =  + 'js/client/';

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
    details: details,
    server: Server,
    features: features,
    home: Home,
    login: Login,
    getOutput: getOutput,
    saveOutput: saveOutput
  }
};
