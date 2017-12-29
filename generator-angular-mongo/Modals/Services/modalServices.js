var  = function($uibModal){
	 
	let modifyTemplate = require('raw-loader!../CreateUpdate/createUpdatePersonModalTemplate.html');
	let deleteTemplate = require('raw-loader!../Delete/deletePersonModalModalTempalte.html');

var add = function() {
return $uibModal.open({
	template: modifyTemplate,	
	controller: 'createUpdateOrganisationModalController',
	controllerAs: 'vm',
	resolve: {
	: function () {
		return null;
	}}});
};
	

var del = function() { 
return $uibModal.open({ 
    templateUrl: deleteTemplate, 
controller: 'deleteOrganisationController', 
  controllerAs: 'vm', 
  resolve: { 
  : function () { 
    return ; 
  }}}); 
}; 

var modify = function() {
return $uibModal.open({
	template: modifyTemplate,
controller: 'createUpdateOrganisationModalController',
	controllerAs: 'vm',
	resolve: {
	: function () {
		return ;
	}}});
};


return {
	add: add,
	Modify: modify,
	Delete: del
}
 }
angular.module('app').factory('', );

