var <%=data.modalServiceName%>  = function($uibModal){
	 
var add = function() {
return $uibModal.open({
	templateUrl: '<%= data.modalTemplatePath %><%= data.modalTemplateName %>',
	controller: '<%=data.modalServiceName%>',
	controllerAs: 'vm',
	resolve: {
	<%= data.camelCase %>: function () {
		return null;
	}
	}
	});
};
	

var modify = function(<%= data.camelCase %>) {
return $uibModal.open({
	templateUrl: '<%= data.modalTemplatePath %><%= data.modalTemplateName %>',
	controller: '<%=data.modalServiceName%>',
	controllerAs: 'vm',
	resolve: {
	<%= data.camelCase %>: function () {
		return <%= data.camelCase %>;
	}
	}
	});
};


 }
angular.module('app').factory('<%=data.modalServiceName%>', <%=data.modalServiceName%>);

