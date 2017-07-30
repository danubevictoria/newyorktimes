// Dependency Injection
// Can inject code into your app by putting in the library you want to use in the []
var app = angular.module("myApp", []);

// $http is Angular's version of AJAX
app.controller('firstCtrl', function($scope, $http) {
	// $scope.myName = 'Danube';

	// // name var
	// console.log($scope.myName);

	// // change name function
	// $scope.logChanges = function(name) {
	// 	console.log(name);
	// }

	// // Array of names
	// $scope.nameArr = ['brian', 'chris', 'matt', 'nick', 'sam', 'isaac'];

	// // Create an array of objects in this case persons
	// var person1 = {
	// 	firstName: 'Danube',
	// 	lastName: 'Phan'
	// };

	// var person2 = {
	// 	firstName: 'Brian',
	// 	lastName: 'Jenney'
	// };

	// $scope.personArr = [person1, person2];

// New York Times API
// Using CRUD operations (get)
// Angular has a lot of built in services that you have to specify that you are going to use. This is to minimize amount of code you use. Decreases load time.
// Get to choose what you want to use to make code faster
// .then checks that the data comes in and runs function on the data that was returned from the get
	// $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=eggs&api-key=0ade7cc85ce941caa70f0532fe318bb6').then(function(result){
	// 	console.log(result.data.response.docs);
	// });

// Create app to get user input, then button to get user input and return list of stuff that is important

	$scope.search = function(user_input){
		$scope.user_input = document.getElementById("input").value;
		// console.log($scope.user_input);

		$http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+$scope.user_input+'&api-key=0ade7cc85ce941caa70f0532fe318bb6').then(function(result){
			$scope.articlesArr = result.data.response.docs;
			console.log($scope.articlesArr);
		});
	};
});