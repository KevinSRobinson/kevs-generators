var createUpdateOrganisationModalController = function ($uibModalInstance, , ) {
    var vm = this;
    vm. = ;

    vm.init = function () {
       if ( != null) {
           vm. = .;
       };
    };

    vm.save = function () {
       var Promise = .Modify(vm.);
       Promise.then(function (response) {
           $uibModalInstance.close(response.data);
       });
    };

    vm.close = function () {
       $uibModalInstance.close();
    };

    vm.init();
}

angular.module('app').controller('createUpdateOrganisationModalController', createUpdateOrganisationModalController);