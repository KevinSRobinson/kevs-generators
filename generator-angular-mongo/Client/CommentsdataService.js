var CommentsDataService = function($http, apiBase) {
	
    apiBase += "/Comments/";

    var getAll = function(){
		return $http.get(apiBase);
	};

    var getById = function(id) {
		return $http.get(apiBase + id);
	};

    var create = function(comment) {
        return $http.put(apiBase + comment._id, comment);
    };    

    var modify = function(comment) {
		     if (comment != null  && comment._id != null) { 
              return $http.put(apiBase + comment._id, comment); 
          } 
          else { 
              return $http.post(apiBase, comment); 
          } 
    };

  
    var del = function(comment) {
		return $http.delete(apiBase + comment.comment._id, comment.comment);
	};

    return {
	    GetAll : getAll,
	    GetById : getById,
	    Modify : modify,
	    Delete : del
    };
};
	

angular.module('').factory('CommentsDataService', CommentsDataService);

