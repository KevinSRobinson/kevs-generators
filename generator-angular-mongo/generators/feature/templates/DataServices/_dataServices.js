var <%=data.plural%>DataService = function($http, apiBase) {
	
    apiBase += "/<%=data.plural%>/";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var create = function(<%=data.camelCase%>) {
        return $http.put(apiBase + <%=data.camelCase%>._id, <%=data.camelCase%>);
    };    

    var modify = function(<%=data.camelCase%>) {
		     if (<%=data.camelCase%> != null  && <%=data.camelCase%>._id != null) { 
              return $http.put(apiBase + <%=data.camelCase%>._id, <%=data.camelCase%>); 
          } 
          else { 
              return $http.post(apiBase, <%=data.camelCase%>); 
          } 
    };

  
    var del = function(<%=data.camelCase%>) {
		return $http.delete(apiBase + <%=data.camelCase%>.<%=data.camelCase%>._id, <%=data.camelCase%>.<%=data.camelCase%>);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('<%=data.appName%>').factory('<%=data.plural%>DataService', <%=data.plural%>DataService);

