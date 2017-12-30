let _base = "c:/new/generated/js/";
let _featureBase = "";
let _baseClient = _base + 'client/';

const chalk = require('chalk');
let setBase = function (path) {
  _base = path;
};
let setFeatureBase = function (path) {
  _featureBase = _base + "Features/" + path + "/";

  console.log(chalk.blue("_featureBase = " + _featureBase));
};


let getFeatureBase = function (feature) {
  return _baseClient + "/Features/" + feature + "/";
};
let getFeature = function (feature, method) {
  return _baseClient + "/Features/" + feature + "/" + method + "/";
};
let getMethod = function (feature, section, method) {

		var path = _baseClient + "/Features/" + feature + "/" + section + "/";

		if(method != undefined){
			path += method + "/";
		}
		return path;
};

let getServer = function (feature, method) {
  return _base + "/Server/" + method + "/" + feature + "/";
};

let client = _base + 'js/client/';

let method = function (feature, section, method){
  return  getFeature(feature, section, method);
}

let serverMethod = function (feature, method){
  return  getServer(feature, method);
}
let Server = _base + 'src/Server/';




let getOutput = function (runner) {
  return runner.config.get('destpath');
};
let saveOutput = function saveOutput(runner, destpath) {
  _base = Pat;
  return runner.config.set('destpath', destpath);
};


module.exports = {
  setBase: setBase,
  featureBase: _featureBase,
  base: _base,
  client: client,
	method: method,
  server: Server,
  getOutput: getOutput,
  saveOutput: saveOutput,
  setFeatureBase: setFeatureBase,
	getFeatureBase: getFeatureBase,
	serverMethod: serverMethod,
	getClientPath: getMethod
};


