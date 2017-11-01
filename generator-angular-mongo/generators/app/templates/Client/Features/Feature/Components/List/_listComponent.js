var <%=data.plural%>List = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: './src/Client/Features/<%=data.name%>/Components/List/<%=data.plural%>ListTemplate.html',
controller: function ($state, <%=data.serviceName%>, <%=data.modalServiceName%>) {
    var vm = this;
    vm.error = {};
    vm.pageSize = 10;
      vm.editMode = true; 
    vm.showButtons = true; 
    vm.<%=data.plural%> = [];

    vm.init = function(){
        vm.load<%=data.plural%>s();
    };

    vm.load<%=data.plural%>s = function(){
        var <%=data.plural%>Promise= <%=data.serviceName%>.GetAll();
        <%=data.plural%>Promise.then(function(response){
	     vm.<%=data.plural%> = response.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	

    //////////////////////
    //Modals
    vm.create = function(){
        var modal = <%=data.modalServiceName%>.add();
        modal.result.then(function(response){
	        vm.<%=data.plural%>.push(response);
        });
    };

    vm.edit = function(<%=data.camelCase%>){
        <%=data.modalServiceName%>.Modify(<%=data.camelCase%>);
    };

    vm.details = function(response){
		$state.go('<%=data.camelCase%>', {
                    id: response.<%=data.camelCase%>._id
                });
	};

    vm.delete = function(person){ 
        peopleModelService.Delete(person); 
    }; 

    vm.init();

    }
};
angular.module('app').component('<%=data.plural%>List', <%=data.plural%>List);
