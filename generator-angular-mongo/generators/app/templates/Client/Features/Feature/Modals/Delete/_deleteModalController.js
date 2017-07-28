function deleteContactController($uibModalInstance, contactsDataService, contact, type) {
	var vm = this;
	vm.contact = contact;

	vm.save = function () {
		var contactPromise = contactsDataService.Delete(vm.contact, type);
		contactPromise.then(function (response) {
			$uibModalInstance.close(vm.contact);
		}).catch(function (error) {
			$uibModalInstance.close(vm.error);
		});
	};

	vm.close = function () {
		$uibModalInstance.close(0);
	};
}

angular.module("app").controller("deleteContactController", deleteContactController);