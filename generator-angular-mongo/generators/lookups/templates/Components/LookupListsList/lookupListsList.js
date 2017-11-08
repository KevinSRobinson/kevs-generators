var lookupListsList = {
    bindings: {
        allowChanges: '@'
    },
    controllerAs: "vm",
    templateUrl: "src/client/Features//LookupLists/Components/LookupListsList/lookupListsList.Html",
    controller: function (lookupListsDataService, lookupListsModalService) {
        var vm = this;

        vm.error = {};

        vm.lookupLists = [];

        vm.init = function () {
            vm.loadLookupLists();
        };

        vm.loadLookupLists = function () {
            var lookupListsPromise = lookupListsDataService.GetAll();
            lookupListsPromise.then(function (response) {
                vm.lookupLists = response.data.data;;
            }).catch(function (error) {
                vm.error = error;
            })
        };

        //////////////////////
        //Modals
        vm.create = function () {
            var modal = lookupListsModalService.Add();
            modal.result.then(function (response) {
                vm.lookupLists.push(response);
            });
        };

        vm.edit = function (lookuplist) {
            lookupListsModalService.Modify(lookuplist);
        };

 
        vm.delete = function (lookupListItem) {
            var deletePromise = lookupListsModalService.Delete(lookupListItem);;
            deletePromise.result.then(function (response) {
                if (response != 0) {
                    vm.lookupLists = _.without(vm.lookupLists, _.findWhere(vm.lookupLists, {
                        _id: lookupListItem._id
                    }));
                }
            });
        }

        vm.init();

    }
};


angular.module('app')
    .component('lookupListsList', lookupListsList);