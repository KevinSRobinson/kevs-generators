var <%=data.camelCase%>sFields = {
	bindings: {
		ngModel: '='
	},
	templateUrl: '<%=data.camelCase%>sFields.Html',
	controllerAs: "vm"
};
angular.module("app").component("<%=data.camelCase%>sFields", <%=data.camelCase%>sFields);


