﻿var <%=data.modalServiceName%> = function($uibModal){
	 
	let modifyTemplate = require('raw-loader!../CreateUpdate/createUpdatePersonModalTemplate.html');
	let deleteTemplate = require('raw-loader!../Delete/deletePersonModalModalTempalte.html');

var add = function() {
return $uibModal.open({
	template: modifyTemplate,	
	controller: 'createUpdate<%=data.name%>ModalController',
	controllerAs: 'vm',
	resolve: {
	<%= data.camelCase %>: function () {
		return null;
	}}});
};
	

var del = function(<%= data.camelCase %>) { 
return $uibModal.open({ 
    templateUrl: deleteTemplate, 
controller: 'delete<%= data.name %>Controller', 
  controllerAs: 'vm', 
  resolve: { 
  <%= data.camelCase %>: function () { 
    return <%= data.camelCase %>; 
  }}}); 
}; 

var modify = function(<%= data.camelCase %>) {
return $uibModal.open({
	template: modifyTemplate,
controller: 'createUpdate<%=data.name%>ModalController',
	controllerAs: 'vm',
	resolve: {
	<%= data.camelCase %>: function () {
		return <%= data.camelCase %>;
	}}});
};


return {
	add: add,
	Modify: modify,
	Delete: del
}
 }
angular.module('app').factory('<%=data.modalServiceName%>', <%=data.modalServiceName%>);

