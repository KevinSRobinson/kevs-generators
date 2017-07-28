var createUpdate<%=data.name%>ModalController = function ($uibModalInstance, <%=data.serviceName%>, <%=data.camelCase%>) {
    var vm = this;
    vm.<%=data.camelCase%> = <%=data.camelCase%>;

    vm.init = function () {
       if (<%=data.camelCase%> != null) {
           vm.<%=data.camelCase%> = <%=data.camelCase%>;
       };
    };

    vm.save = function () {
       var <%=data.camelCase%>Promise = <%=data.serviceName%>.Modify(vm.<%=data.camelCase%>);
       <%=data.camelCase%>Promise.then(function (response) {
           $uibModalInstance.close(response.data);
       });
    };

    vm.close = function () {
      //  $uibModalInstance.close();
    };

    vm.init();
}

angular.module('app').controller('createUpdate<%=data.name%>ModalController', createUpdate<%=data.name%>ModalController);