function deleteLookupListItemController($uibModalInstance, lookupListsDataService, lookuplistItem) {
	var vm = this;
	vm.lookuplistItem = lookuplistItem;

	vm.save = function () {
		var lookuplistItemPromise = lookupListsDataService.Delete(vm.lookuplistItem);
		lookuplistItemPromise.then(function (response) {
			$uibModalInstance.close(vm.lookuplistItem);
		}).catch(function(error){
			$uibModalInstance.close(vm.error);
		});
	};

	vm.close = function () {
		$uibModalInstance.close(0);
	};

}

angular.module("app").controller("deleteLookupListItemController", deleteLookupListItemController);