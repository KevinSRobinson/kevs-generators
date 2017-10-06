function delete<%=data.name%>Controller($uibModalInstance, <%=data.plural%>DataService, <%=data.camelCase%>) {
  var vm = this;
  vm.<%=data.camelCase%> = <%=data.camelCase%>;

  vm.save = function () {

    var <%=data.camelCase%>Promise = peopleDataService.Delete(vm.<%=data.camelCase%>);
    <%=data.camelCase%>Promise.then(function (response) {
      $uibModalInstance.close(vm.<%=data.camelCase%>);
    });

  };

  vm.close = function () {
    $uibModalInstance.close(0);
  };
}

angular.module("app").controller("delete<%=data.name%>Controller", delete<%=data.name%>Controller);
