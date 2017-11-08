var <%=data.modalServiceName%> = function($uibModal){
	 
var add = function() {
return $uibModal.open({
	template: require('raw-loader!./createUpdate<%= data.name %>ModalTemplate.html'),	
	controller: 'createUpdate<%=data.name%>ModalController',
	controllerAs: 'vm',
	resolve: {
	<%= data.camelCase %>: function () {
		return null;
	}}});
};
	

var del = function(<%= data.camelCase %>) { 
return $uibModal.open({ 
    templateUrl: './src/Client/Features/<%= data.name %>/Modals/Delete/delete<%= data.name %>ModalModalTempalte.html', 
controller: 'delete<%= data.name %>Controller', 
  controllerAs: 'vm', 
  resolve: { 
  <%= data.camelCase %>: function () { 
    return <%= data.camelCase %>; 
  }}}); 
}; 

var modify = function(<%= data.camelCase %>) {
return $uibModal.open({
	template: require('raw-loader!./createUpdate<%= data.name %>ModalTemplate.html'),
		templateUrl: './src/Client/Features/<%= data.name %>/Modals/CreateUpdate/createUpdate<%= data.name %>ModalTemplate.html',
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

