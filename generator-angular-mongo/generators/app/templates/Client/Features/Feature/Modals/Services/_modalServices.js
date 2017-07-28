var <%=data.modalServiceName%> = function($uibModal){
	 
var add = function() {
return $uibModal.open({
	templateUrl: './src/Client/Features/<%= data.name %>/Modals/CreateUpdate/createUpdate<%= data.name %>ModalTemplate.html',
	controller: 'createUpdate<%=data.name%>ModalController',
	controllerAs: 'vm',
	resolve: {
	<%= data.camelCase %>: function () {
		return null;
	}}});
};
	

var modify = function(<%= data.camelCase %>) {
return $uibModal.open({
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
	modify: modify
}
 }
angular.module('app').factory('<%=data.modalServiceName%>', <%=data.modalServiceName%>);

