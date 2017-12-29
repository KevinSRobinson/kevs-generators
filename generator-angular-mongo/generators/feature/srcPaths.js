let _base = './client/';
let _serverBase = './Server/';

let _baseComponents = _base + '/components/';
let _modalsBase = _base + '/Modals/';
let _routesBase = _base + '/Routes/';


let _componets  = {
	list : _baseComponents + '/list/',
	details : _baseComponents + '/details/',
	home : _baseComponents + '/home/',
	fields : _baseComponents + '/fields/'
}

let _modals = {
	modify: _modalsBase +  "CreateUpdate/",
	delete: _modalsBase +  "Delete/",
	services: _modalsBase +  "Services/"
}

let _server = {
	 api : _serverBase + '/Api/',
	 controllers : _serverBase + '/Controllers/',
	 models : _serverBase + '/Models/',
	 routes : _serverBase + '/Routes/',
}

module.exports = {
	setBasePath: function (path) {
		_base = path;
	},
	base: _base,
	componets: _componets,
	baseComponents: _baseComponents,
	modalsBase: _modalsBase,
	modals: _modals,
	routes: _routesBase,
	server: _server
};



  // // Client Source Paths
  // var srcClientPath = './Client/';

  // // Server Source Paths
  // var srcServerPath = './Server/';

// var src = function(basePath){

//   var _ClientPath = './Client/';
//   var _CorePath = _ClientPath + 'Core/';
//   var _dataServicesorePath = _ClientPath + 'Core/';
//   var _WebpackPath = _ClientPath + 'Webpack/';
//   var _PackageManagersPath = _ClientPath + 'PackageManagers/';
//   var _FeaturesPath = _ClientPath + 'Features/';
//   var _DataServicesPath = _ClientPath + 'DataServices/';
//   var _NavigationPath = _FeaturesPath + 'Navigation/';
//   var _HomePath = _FeaturesPath + 'Home/';

//   var _LoginPath = _FeaturesPath + 'Login/';
//   var _StylesPath = _ClientPath + 'Styles/';


//   var srcServerPath = './Server/';

//   return {
//     basePath: _basePath,
//     ClientPath : _ClientPath,
//     CorePath : _CorePath
//     dataServicesorePath : ClientPath + 'Core/',
//     WebpackPath : ClientPath + 'Webpack/',
//     PackageManagersPath : ClientPath + 'PackageManagers/',
//     FeaturesPath : ClientPath + 'Features/',
//     DataServicesPath : ClientPath + 'DataServices/',
//     NavigationPath : FeaturesPath + 'Navigation/',
//     HomePath : FeaturesPath + 'Home/',

//     LoginPath : FeaturesPath + 'Login/',
//     StylesPath : ClientPath + 'Styles/',
//   }
// }



// dest = function(basePath){

//   let _basePath = basePath;

//   var _clientPath = _basePath + '/js/client/';
//   var _serverPath = _basePath + '/Src/Server/';
//   var _featuresPath = _basePath + 'Features/';
//   var _homePath = _basePath + '/Home/';
//   var _loginPath = _basePath + 'Login/';

//   return {
//     clientPath : _clientPath,
//     serverPath : _serverPath,
//     featuresPath = _featuresPath,
//     homePath = _homePath,
//     loginPath = _loginPath
//   }
// }
