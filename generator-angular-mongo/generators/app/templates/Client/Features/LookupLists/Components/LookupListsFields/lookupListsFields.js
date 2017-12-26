var lookupListsFields = {
	bindings: {
		ngModel: '='
	},
	template: require('raw-loader!./lookupListsFields.Html'),	
	controllerAs: "vm",
	controller: function () {
		var vm = this;

		vm.lists = ['Tag', 'NoteTag', 'Area', 'HSSTrust', 'ProgramCare', 'MainstreaOrCareManaged', 'PlacementStatus'];
		vm.parents = ['Common', 'Client', 'Volunteer'];
	}
};
angular.module("app").component("lookupListsFields", lookupListsFields);