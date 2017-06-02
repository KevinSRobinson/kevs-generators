var contactsDataService = function($http, apiBase) {
	
    apiBase += "/contacts";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var modify = function(contact) {
        return $http.put(apiBase + contact._id, contact);
    };    

    var modify = function(contact) {
		if(hourRecord._id){
			return $http.put(apiBase + contact._id, contact);
		}
		return $http.post(apiBase, contact);        
    };

  
    var del = function(contact) {
		return $http.delete(apiBase, contact);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('fgh').factory('contactsDataService', contactsDataService);

