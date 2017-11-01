var lookupListsDataService = function ($filter,  $http, __env) {

	var base = __env.apiBase + "LookupLists/";

	var getAll = function () {
		return $http.get(base);
	};

	var getById = function (id) {
		return $http.get(base + id);
	};

	var readAllByList = function (list) {
		return $http.get(base + 'readAllByList/' + list);
	};

	var readAllByParent = function (parent) {
		return $http.get(base + 'readAllByParent/' + parent);
	};

	var modify = function (lookupList) {
		if (lookupList._id) {
			return $http.put(base + lookupList._id, lookupList);
		}
		return $http.post(base, lookupList);
	};

	var del = function (lookupListItem) {
		return $http.delete(base + lookupListItem._id, lookupListItem);
	};

	var filterLookupList = function (listName, list) {

		// array to be returned
		var filteredList = [];

		//filter List
		var items = $filter('filter')(list, {
			List: listName
		});

		//add the items to the array
		angular.forEach(items, function (value, key) {
			this.push(value.Item);
		}, filteredList);

		//return the array
		return filteredList;
	};

	return {
		GetAll: getAll,
		GetById: getById,
		Modify: modify,
		Delete: del,
		ReadAllByList: readAllByList,
		ReadAllByParent: readAllByParent,
		FilterLookupList: filterLookupList
	};
};

angular.module("app").service("lookupListsDataService", lookupListsDataService);