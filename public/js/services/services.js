angular.module('mainApp')


.factory('service', function ($http) {

	function restaurants(page){
		const url = `http://localhost:3000/restaurants?page=${page}`
		return $http.get(url)
	}

	function searchbyBorough(borough, page){
		const url = `http://localhost:3000/restaurants/borough/${borough}?page=${page}`
		return $http.get(url)
	}
	function searchbyCuisine(cuisine, page){
		const url = `http://localhost:3000/restaurants/cuisine/${cuisine}?page=${page}`
		return $http.get(url)
	}
	return {
		restaurants:restaurants,
		searchbyBorough : searchbyBorough,
		searchbyCuisine : searchbyCuisine
	}
})
