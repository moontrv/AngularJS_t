var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
	$scope.appDetails = {
		title : "BooKart",
		tagline : "We have collection of 1 Million books"
	};
});

var BookListCtrl = function($scope){
	$scope.books = [
		{
			imgUrl: "1.png", 
			name: "The first book",
			price: 205,
			rating: 3,
			binding: "Paperback",
			publisher: "Random publisher",
			releaseDate: "12-09-2013",
			details: "Rob in his thirties"
		},
		{
			imgUrl: "2.png", 
			name: "Gerome the great fighter",
			price: 102,
			rating: 4,
			binding: "Paperback",
			publisher: "Scholastic",
			releaseDate: "01-07-2015",
			details: "Gerome fought his way"
		},
		{
			imgUrl: "3.png", 
			name: "Life",
			price: 301,
			rating: 5,
			binding: "Paperback",
			publisher: "Hatchette",
			releaseDate: "01-01-2015",
			details: "Seeing the opportunities in life"
		}
	]
}