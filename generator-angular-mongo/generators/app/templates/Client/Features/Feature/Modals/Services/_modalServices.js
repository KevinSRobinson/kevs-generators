﻿var <%=data.modalServiceName%> = function($uibModal){
	 
var add = function() {
return $uibModal.open({
	template: require('raw-loader!./Modals/CreateUpdate/createUpdate<%= data.name %>ModalTemplate.html'),		
	controller: 'createUpdate<%=data.name%>ModalController',
	controllerAs: 'vm',
	resolve: {
	<%= data.camelCase %>: function () {
		return null;
	}}});
};
	

var del = function(<%= data.camelCase %>) { 
return $uibModal.open({ 
	template: require('raw-loader!./Modals/CreateUpdate/delete<%= data.name %>ModalModalTempalte.html'),	    
controller: 'delete<%= data.name %>Controller', 
  controllerAs: 'vm', 
  resolve: { 
  <%= data.camelCase %>: function () { 
    return <%= data.camelCase %>; 
  }}}); 
}; 

var modify = function(<%= data.camelCase %>) {
return $uibModal.open({
	template: require('raw-loader!./Modals/CreateUpdate/createUpdate<%= data.name %>ModalTemplate.html'),	
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

