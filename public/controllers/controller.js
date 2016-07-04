var contactApp = angular.module('contactApp', []);

contactApp.controller('appCtrl', ['$scope', '$http', function($scope, $http){
	console.log("hello from controller");

var refresh = function(){	

	$http.get('/contactlist').success(function(res){
		console.log("I got the data I requested");
		$scope.contactList = res;
		$scope.contact ="";
	});
};
refresh();
	
$scope.addContact = function(){
	console.log($scope.contact);
	$http.post('/contactlist', $scope.contact).success(function(response){
		console.log(response);
		refresh();
	});
};

$scope.remove = function(id){
	console.log(id);
	$http.delete('/contactlist/' + id).success(function(response){
		refresh();
	});
};

$scope.edit = function(id){
	console.log(id);
	$http.get('/contactlist/' + id).success(function(response){
		$scope.contact = response;
	});
};
$scope.update = function(id){
	console.log($scope.contact._id);
	$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
		refresh();
	})
};

$scope.deselect = function(){
	$scope.contact = "";
};

	
}]);

