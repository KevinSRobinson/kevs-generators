var contactsDataService = function($http, apiBase) {
	
    apiBase += "/contactsDataService";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var modify = function(contactsDataService) {
        return $http.put(apiBase + contactsDataService._id, contactsDataService);
    };    

    var modify = function(contactsDataService) {
		if(hourRecord._id){
			return $http.put(apiBase + contactsDataService._id, contactsDataService);
		}
		return $http.post(apiBase, contactsDataService);        
    };

  
    var del = function(contactsDataService) {
		return $http.delete(apiBase, contactsDataService);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('dfdg').factory('contactsDataService', contactsDataService);

