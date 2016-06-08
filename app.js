var app = angular.module('myApp', [])
.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
	$scope.appDetails = {
		title : "BooKart",
		tagline : "We have collection of 1 Million books"
	};
})
.controller('BookListCtrl', function($scope) {
	$scope.books = [
			{
				imgUrl: "", 
				name: "The first book",
				price: 205,
				rating: 3,
				binding: "Paperback",
				publisher: "Random publisher",
				releaseDate: "12-09-2013",
				details: "Rob in his thirties"
			},
			{
				imgUrl: "", 
				name: "Gerome the great fighter",
				price: 102,
				rating: 4,
				binding: "Paperback",
				publisher: "Scholastic",
				releaseDate: "01-07-2015",
				details: "Gerome fought his way"
			},
			{
				imgUrl: "", 
				name: "Life",
				price: 301,
				rating: 5,
				binding: "Paperback",
				publisher: "Hatchette",
				releaseDate: "01-01-2015",
				details: "Seeing the opportunities in life"
			}
	];
	 $scope.addToCart = function(book){
		 console.log("added to cart", book);
	 }
});		