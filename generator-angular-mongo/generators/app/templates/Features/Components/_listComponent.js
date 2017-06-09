var <%=data.plural%>List = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: '<%=data.listComponentTemplateUrl%>',
controller: function (<%=data.serviceName%>) {
    var vm = this;
    vm.error = {};
    vm.<%=data.plural%> = [];

    vm.init = function(){
        vm.load<%=data.plural%>s();
    };

    vm.load<%=data.plural%>s = function(){
        var <%=data.plural%>Promise= <%=data.serviceName%>.GetAll();
        <%=data.plural%>Promise.then(function(response){
	     vm.<%=data.plural%> = response.data.data;
        }).catch(function(error){
	        vm.error = error;
        })
    };
	

    //////////////////////
    //Modals
    vm.create = function(){
        var modal = <%=data.serviceName%>.Add();
        modal.result.then(function(response){
	        vm.<%=data.plural%>.push(response);
        });
    };

    vm.edit = function(<%=data.name%>){
        <%=data.serviceName%>.Modify(<%=data.name%>);
    };

    vm.view = function(<%=data.plural%>){
		<%=data.serviceName%>.View(<%=data.name%>);
	};

    vm.init();

    }
};
angular.module('app').component('<%=data.plural%>List', <%=data.plural%>List);
