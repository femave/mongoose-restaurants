angular.module('mainApp')

.controller('SearchRestaurant', function ($scope, service) {

    function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


   let page = 1

	$scope.pageUp = function (){
		++page
		$scope.searcher($scope.borough, page)
	}

	$scope.pageDown = function (){
		page===1 ? page : --page
		$scope.searcher($scope.borough, page)
	}


	$scope.searcher = function(borough, page){
		console.log('hi')
   	let toSearch = capitalizeFirstLetter(borough)
   	console.log(toSearch)
       service.searchbyBorough(toSearch, page)
       .then(function(response){
       	$scope.boroughs = response.data
       })
   }

})
