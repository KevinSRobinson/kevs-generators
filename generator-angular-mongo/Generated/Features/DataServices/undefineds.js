var  = function($http, apiBase) {
	
    apiBase += "/undefineds";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var modify = function() {
        return $http.put(apiBase + ._id, );
    };    

    var modify = function() {
		if(hourRecord._id){
			return $http.put(apiBase + ._id, );
		}
		return $http.post(apiBase, );        
    };

  
    var del = function() {
		return $http.delete(apiBase, );
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('').factory('', );

