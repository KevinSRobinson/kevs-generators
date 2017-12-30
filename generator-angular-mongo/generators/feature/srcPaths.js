let _base = './';
let _clientBase = _base + 'client/';
let _serverBase = _base + 'Server/';

let _baseComponents = _clientBase + 'components/';
let _modalsBase = _clientBase + 'Modals/';
let _routesBase = _clientBase + 'Routes/';

let getFolder =function(folder1, folder2, folder3){
	return _base + folder1 + "/" + folder2 + "/" + folder3 + "/";
}

let getClientFolder = function(section){
	return _clientBase + "/" + section  + "/";
}
let getServerFolder = function(section){
	return _serverBase + "/" + section  + "/";
}

let getClientPath = function(section,  method){
	return _clientBase + "/" + section + "/" + method + "/";
}
let getBaseClientPath = function(section){
	return _clientBase + "/" + section + "/";
}

module.exports = {
	setBasePath: function (path) {
		_clientBase = path;
	},
	base: _clientBase,
	baseComponents: _baseComponents,
	modalsBase: _modalsBase,
	routes: _routesBase,
	getClientPath: getClientPath,
	getClientFolder: getClientFolder,
	getServerFolder: getServerFolder,
	getFolder: getFolder,
	serverBase: _serverBase,
	getBaseClientPath: getBaseClientPath
};



