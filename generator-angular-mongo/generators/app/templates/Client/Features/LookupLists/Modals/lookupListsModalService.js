var lookupListsModalService = function ($uibModal) {


	var add = function () {
		return $uibModal.open({
			
			templateUrl: 'src/client/Features/LookupLists/Modals/ModifyLookupListItem/modifyLookupListsModal.Html',
			controller: "modifyLookupListItemController",
			controllerAs: 'vm',
			resolve: {
				lookupList: function () {
					return null;
				}
			}
		});
	};


	var modify = function (lookupList) {
		return $uibModal.open({
			templateUrl: 'src/client/Features/LookupLists/Modals/ModifyLookupListItem/modifyLookupListsModal.Html',
			controller: "modifyLookupListItemController",
			controllerAs: 'vm',
			resolve: {
				lookupList: function () {
					return lookupList;
				}
			}
		});
	};

	
	var del = function (lookuplistItem) {
		return $uibModal.open({
			templateUrl: 'src/client/Features/LookupLists/Modals/DeleteLookupListItem/deleteLookupListItemModal.html',
			controller: "deleteLookupListItemController",
			controllerAs: 'vm',
			resolve: {
				lookuplistItem: function () {
					return lookuplistItem;
				}
			}
		});
	};


	return {
		Add: add,
		Modify: modify,
		Delete: del
	};
}

angular.module('app').factory('lookupListsModalService', lookupListsModalService);