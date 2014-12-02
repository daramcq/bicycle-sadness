(function(){
    var app = angular.module('outspoken',['leaflet-directive']);

    app.controller('OutspokenController',function($scope,$http){
	var outspoken = this;
	console.log("In the controller");
	outspoken.incidents = [];
	var url = "/all-incidents/"
	$http.get(url)
	    .success(function(data){
		console.log(data);
		angular.extend($scope, {markers : data});
	    });
	

    });

    app.directive('header',function(){
	console.log("In directive");
	return {
	    restrict : 'E',
	    templateUrl : 'subtemplates/header.html'
	};
    });
    var markers = {
	    osloMarker: {
            lat: 59.91,
            lng: 10.75,
                message: "I want to travel here!",
                focus: true,
                draggable: false
	    }
	};
})();
