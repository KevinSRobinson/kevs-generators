var lookupListsFields = {
	bindings: {
		ngModel: '='
	},
	templateUrl: 'src/client/Features//LookupLists/Components/LookupListsFields/lookupListsFields.Html',
	controllerAs: "vm",
	controller: function () {
		var vm = this;

		vm.lists = ['Tag', 'NoteTag', 'Area', 'HSSTrust', 'ProgramCare', 'MainstreaOrCareManaged', 'PlacementStatus'];
		vm.parents = ['Common', 'Client', 'Volunteer'];
	}
};
angular.module("app").component("lookupListsFields", lookupListsFields);