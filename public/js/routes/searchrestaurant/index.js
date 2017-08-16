angular.module('mainApp')
.config(function ($routeProvider) {
  $routeProvider
	.when('/search-restaurant', {
	  templateUrl: 'js/routes/searchRestaurant/template.html',
	   controller: 'SearchRestaurant'
})
})
