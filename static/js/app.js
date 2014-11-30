(function(){
    var app = angular.module('outspoken',[]);

    app.controller('OutspokenController',['$http', function($http){
	var outspoken = this;
	console.log("In the controller");
	outspoken.incidents = [];
	var url = "/all-incidents/"
	$http.get(url)
	    .success(function(data){
		outspoken.incidents=data
		console.log(outspoken.incidents);
	    });
    }]);

    app.directive('header',function(){
	console.log("In directive");
	return {
	    restrict : 'E',
	    templateUrl : 'subtemplates/header.html'
	};
    });
    
})();
