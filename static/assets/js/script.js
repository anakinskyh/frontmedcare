// create the module and name it scotchApp
var app = angular.module("myApp", ["ngRoute"]);

//config route

app.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
        	templateUrl : `/assets/html/signin.html`,
			controller  : `signinController`
		})
		
		.when('/patient', {
        	templateUrl : `/assets/html/patient.html`,
		});
});

console.log('load script.js');

app.controller('signinController', function($scope) {

        // create a message to display in our view
        $scope.name = 'anakin skywalker';
});
