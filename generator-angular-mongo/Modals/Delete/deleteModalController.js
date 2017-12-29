function deleteOrganisationController($uibModalInstance, DataService, ) {
  var vm = this;
  vm. = ;

  vm.save = function () {

    var Promise = peopleDataService.Delete(vm.);
    Promise.then(function (response) {
      $uibModalInstance.close(vm.);
    });

  };

  vm.close = function () {
    $uibModalInstance.close(0);
  };
}

angular.module("app").controller("deleteOrganisationController", deleteOrganisationController);
