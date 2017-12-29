var sFields = {
	bindings: {
		ngModel: '='
	},
	template: require('raw-loader!./sFields.Html'),	
	controllerAs: "vm"
};
angular.module("app").component("sFields", sFields);


