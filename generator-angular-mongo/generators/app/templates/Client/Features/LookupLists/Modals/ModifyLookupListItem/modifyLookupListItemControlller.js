var modifyLookupListItemController = function ($uibModalInstance, lookupListsDataService, lookupList) {
    var vm = this;
    vm.lookupList = lookupList;

    vm.init = function () {
        if (lookupList != null) {
            vm.lookupList = lookupList;
        };
    };

    vm.save = function () {
        var lookupListPromise = lookupListsDataService.Modify(vm.lookupList);
        lookupListPromise.then(function (response) {
            $uibModalInstance.close(response.data);
        });
    };

    vm.close = function () {
        $uibModalInstance.close();
    };

    vm.init();
};


angular.module("app").controller("modifyLookupListItemController", modifyLookupListItemController);