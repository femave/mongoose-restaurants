angular.module('mainApp')

.controller('home', function ($scope, service) {

	let page = 1

	let searchRestaurant = function(page){
		service.restaurants(page)
		.then(function(response){
			console.log(response.data)
			$scope.restaurant = response.data
		})
	}

	searchRestaurant(page)

	  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


	$scope.pageUp = function (){
		++page
		if($scope.borough){
		  $scope.searcher($scope.borough, page)
	    }else if($scope.cuisine){
	      $scope.searcherCuisine($scope.cuisine, page)
	    }else{
		  searchRestaurant(page)
	    }
	}

	$scope.pageDown = function (){
		page===1 ? page : --page
		if($scope.borough){
		  $scope.searcher($scope.borough, page)
	    }
	    else if($scope.cuisine){
	      $scope.searcherCuisine($scope.cuisine, page)
	    }else{
		  searchRestaurant(page)
	    }
	}


	$scope.searcher = function(borough, page){
		console.log('hi')
   	let toSearch = capitalizeFirstLetter(borough)
   	console.log(toSearch)
       service.searchbyBorough(toSearch, page)
       .then(function(response){
       	$scope.restaurant = response.data

       })
   }

   $scope.searcherCuisine = function(cuisine, page){
   	console.log('sd')
     let cuisinetoSearch = capitalizeFirstLetter(cuisine)
       service.searchbyCuisine(cuisinetoSearch, page)
       .then(function(response){
       	$scope.restaurant = response.data
       })
   	}
})
