var <%=data.modalServiceName%> = function($uibModal){
	 
	let modifyTemplate = require('raw-loader!../CreateUpdate/createUpdatePersonModalTemplate.html');
	let deleteTemplate = require('raw-loader!../Delete/deletePersonModalModalTempalte.html');


var add = function() {
return $uibModal.open({
<<<<<<< HEAD
	template: require('raw-loader!./Modals/CreateUpdate/createUpdate<%= data.name %>ModalTemplate.html'),		
=======
template: modifyTemplate,
>>>>>>> d4b5a3d5798a45901a0641d11d34edb70e024299
	controller: 'createUpdate<%=data.name%>ModalController',
	controllerAs: 'vm',
	resolve: {
	<%= data.camelCase %>: function () {
		return null;
	}}});
};
	

var del = function(<%= data.camelCase %>) { 
return $uibModal.open({ 
<<<<<<< HEAD
	template: require('raw-loader!./Modals/CreateUpdate/delete<%= data.name %>ModalModalTempalte.html'),	    
=======
	template: modifyTemplate,
>>>>>>> d4b5a3d5798a45901a0641d11d34edb70e024299
controller: 'delete<%= data.name %>Controller', 
  controllerAs: 'vm', 
  resolve: { 
  <%= data.camelCase %>: function () { 
    return <%= data.camelCase %>; 
  }}}); 
}; 

var modify = function(<%= data.camelCase %>) {
return $uibModal.open({
<<<<<<< HEAD
	template: require('raw-loader!./Modals/CreateUpdate/createUpdate<%= data.name %>ModalTemplate.html'),	
=======
	template: deleteTemplate,
>>>>>>> d4b5a3d5798a45901a0641d11d34edb70e024299
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

