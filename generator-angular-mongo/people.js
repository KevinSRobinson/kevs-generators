var peopleModalsService = function ($uibModal) {

  var add = function () {
    return $uibModal.open({
      templateUrl: './src/Client/Features/Person/createUpdatePersonTemplate.html',
      controller: 'peopleModalsService',
      controllerAs: 'vm',
      resolve: { 
        person: return null;
        }
      });
  };


  var modify = function (person) {
    return $uibModal.open({
      templateUrl: './src/Client/Features/Person/createUpdatePersonTemplate.html',
      controller: 'peopleModalsService',
      controllerAs: 'vm',
      resolve: {
        person: function () {
          return person;
        }
      }
    });
  };

  return {
    add: add,
    modify: modify
  }
}

angular.module('app').factory('peopleModalsService', peopleModalsService);
