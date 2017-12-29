let _base = "c:/new/generated/";
let _featureBase = "";
const chalk = require('chalk');
let setBase = function (path) {
  _base = path;
};
let setFeatureBase = function (path) {
  _featureBase = _base + "Features/" + path + "/";

  console.log(chalk.blue("_featureBase = " + _featureBase));
};

let getFeature = function (feature, method) {
  return _base + "/Features/" + feature + "/" + method + "/";
};
let getModal = function (feature, method) {
  return _base + "/Features/" + feature + "/Modals/" + method + "/";
};

let client = _base + 'js/client/';
let features = client + 'features/';


let featureMethod = function (feature, method){
  return  getFeature(feature, method);
}
let modalMethod = function (feature, method){
  return  getModal(feature, method);
}



let _fields =  _featureBase +  'fields/';
let _home =  _featureBase +  'home/'
let _list =  _featureBase +  '_list';

let Server = _base + 'src/Server/';


let Login = _base + 'login/';
let Client = +'js/client/';

let getOutput = function (runner) {
  return runner.config.get('destpath');
};
let saveOutput = function saveOutput(runner, destpath) {
  _base = Pat;
  return runner.config.set('destpath', destpath);
};

let modalsBase = _featureBase + 'Modals/';
let _modals = {
  modify:  modalsBase + "CreateUpdate/",
  delete:  modalsBase + "Delete/",
  services: modalsBase + "Services/"
}

module.exports = {
  setBase: setBase,
  featureBase: _featureBase,
  base: _base,
  client: client,
  fields: _fields,
  home: _home,
  featureMethod: featureMethod,
  modalMethod: modalMethod,
  server: Server,
  features: features,
  home: _home,
  list: _list,
  login: Login,
  modals: _modals,
  getOutput: getOutput,
  saveOutput: saveOutput,
  setFeatureBase: setFeatureBase
};





return
// // Server Destination Paths
// var destServerPath = destPath + 'Src/Server/';
// // Client Destination Paths
// var destClientPath = destPath + 'Src/Client/';
// var destFeaturesPath = destClientPath + 'Features/';
